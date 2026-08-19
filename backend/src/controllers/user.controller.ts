import type { Request, Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler.ts';
import { ApiError } from '../utils/ApiError.ts';
import { successResponse } from '../utils/SuccessResponse.ts';
import { prisma } from '../db/prisma.ts';
import { StatusCode } from '../types/index.ts';
import type { LoginProps, RegisterProps } from '../types/user.type.ts';
import { generateOTP } from '../utils/otpGenerator.ts';
import { redis } from '../db/redis.ts';
import { otpKey } from '../utils/otpKey.ts';


// otp
export const otp = asyncHandler(async(req:Request, res:Response)=>{
  const {email} = req.body as {email: string};
  if (!email.trim()) {
    throw new ApiError(StatusCode.BAD_REQUEST, 'please fill all fields');
  }

  const otp = generateOTP();
  console.log("otp: ", otp);

  await redis.set(otpKey(email), otp, 'EX', 300);

  return successResponse(res, StatusCode.OK, "OTP sent successfully")

})

//register
export const register = asyncHandler(async (req: Request, res: Response) => {
  const { fullname, email, otp } = req.body as RegisterProps;
  if (!fullname.trim() || !email.trim() || otp.trim()) {
    throw new ApiError(StatusCode.BAD_REQUEST, 'please fill all fields');
  }

  const userExists = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (userExists) {
    throw new ApiError(StatusCode.CONFLICT, 'email already registered');
  }

  const savedOtp = await redis.get(otpKey(email));

  if(!savedOtp){
    throw new ApiError(StatusCode.BAD_REQUEST, 'OTP expired and not found');
  }

  if(savedOtp !== otp) {
    throw new ApiError(StatusCode.BAD_REQUEST, 'OTP is invalid');
  }

  await prisma.user.create({
    data: {
      fullname,
      email,
    },
  });

  await redis.del(otpKey(email));
  return successResponse(res, StatusCode.CREATED, 'account created successfully');
});

//login
export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, otp } = req.body as LoginProps;
  if (!email.trim() || !otp.trim()) {
    throw new ApiError(StatusCode.BAD_REQUEST, 'please fill all fields');
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    throw new ApiError(StatusCode.CONFLICT, 'email not registered');
  }

  //jwt and redis otp validation function
  const savedOtp = await redis.get(otpKey(email));

  if(!savedOtp){
    throw new ApiError(StatusCode.BAD_REQUEST, 'OTP expired and not found');
  }

  if(savedOtp !== otp) {
    throw new ApiError(StatusCode.BAD_REQUEST, 'OTP is invalid');
  }
  await redis.del(otpKey(email));

  return successResponse(res, StatusCode.OK, 'account fetched successfully',user);
});
