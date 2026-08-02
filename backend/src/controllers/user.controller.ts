import type { Request, Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler.ts';
import { ApiError } from '../utils/ApiError.ts';
import { successResponse } from '../utils/SuccessResponse.ts';
import { prisma } from '../db/prisma.ts';

export const register = asyncHandler(async (req: Request, res: Response) => {
  const { fullName, email } = req.body;
  if (!fullName || !email) {
    throw new ApiError(404, 'please fill all fields');
  }

  const userExists = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!userExists) {
    throw new ApiError(404, 'please fill all fields');
  }

  prisma.user.create({
    data: {
      fullName,
      email,
    },
  });

  return successResponse(res, 200, 'account created successfully');
});
