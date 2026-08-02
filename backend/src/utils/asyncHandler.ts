import { type Request, type Response, type NextFunction} from "express";
import { StatusCode } from "../types";
type AsyncFn = (
  req: Request,
  res: Response,
  next?: NextFunction
) => Promise<unknown>;
const asyncHandler =(fn:AsyncFn)=>async(req:Request, res:Response, next?:NextFunction)=>{
    try {
        await fn(req, res, next)
    } catch (error: any) {
         res.status(error.code || StatusCode.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: error.message || "Internal Server Error",
        })
    }
};

export {asyncHandler}