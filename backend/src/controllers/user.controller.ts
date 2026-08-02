import type { Request, Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler.ts';
import { ApiError } from '../utils/ApiError.ts';
import { successResponse } from '../utils/SuccessResponse.ts';
import { prisma } from '../db/prisma.ts';
import { StatusCode } from '../types/index.ts';
import type { RegisterProps } from '../types/user.type.ts';



export const register = asyncHandler(async (req: Request, res: Response) => {
  const { fullname, email } = req.body as RegisterProps
  if (!fullname || !email) {
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
