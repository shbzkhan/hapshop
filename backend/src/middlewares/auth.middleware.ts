import type { NextFunction, Request, Response } from "express";
import { prisma } from "../db/prisma.ts";
import { ApiError } from "../utils/ApiError.ts";
import { asyncHandler } from "../utils/asyncHandler.ts";
import jwt from "jsonwebtoken";
import { StatusCode } from "../types/index.ts";

const auth = asyncHandler(async (req:Request, res:Response, next:NextFunction) => {
  const token =
    req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    throw new ApiError(401, "Unauthorized, token not available");
  }

  const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!);

  if (!decoded) {
    throw new ApiError(401, "Unauthorized");
  }

  const user = await prisma.user.findUnique({
  where: {
    id: decoded?.id,
  },
  omit: {
    refreshToken: true,
  },
});

  if (!user) {
    throw new ApiError(StatusCode.UNAUTHORIZED, "Invalid Access Token");
  }

  req.user = user;
  next();
});

export { auth };