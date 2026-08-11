import type { Request, Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler.ts';
import { prisma } from '../db/prisma.ts';
import { ApiError } from '../utils/ApiError.ts';
import { StatusCode } from '../types/index.ts';
import { successResponse } from '../utils/SuccessResponse.ts';


export const getProducts = asyncHandler(async (req: Request, res: Response) => {
  const product = await prisma.product.findMany({});
  if (!product) {
    throw new ApiError(StatusCode.NOT_FOUND, 'Product Not Founded');
  }

  return successResponse(res, StatusCode.OK, "Products fetched successfully", product)
});

export const getProductById = asyncHandler(async (req: Request, res: Response) => {
    const {id} = req.params as {id: string}
  const product = await prisma.product.findUnique({
    where:{
        id
    }
  });
  if (!product) {
    throw new ApiError(StatusCode.NOT_FOUND, 'Product Not Founded');
  }

  return successResponse(res, StatusCode.OK, "Products fetched successfully", product)
});


