import type { Request, Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler.ts';
import { ApiError } from '../utils/ApiError.ts';
import { successResponse } from '../utils/SuccessResponse.ts';
import { prisma } from '../db/prisma.ts';
import { StatusCode } from '../types/index.ts';
import type { LoginProps, RegisterProps } from '../types/user.type.ts';


// otp
// export const otp = asyncHandler(async(req:Request, res:Response)=>{
//   const {email, otp} = req.body as LoginProps;
//   if (!email.trim() || !otp.trim()) {
//     throw new ApiError(StatusCode.BAD_REQUEST, 'please fill all fields');
//   }

// })

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

  prisma.user.create({
    data: {
      fullname,
      email,
    },
  });

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

  return successResponse(res, StatusCode.OK, 'account fetched successfully',user);
});
