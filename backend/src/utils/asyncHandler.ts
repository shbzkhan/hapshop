import { type Request, type Response, type NextFunction} from "express";
type AsyncFn = (
  req: Request,
  res: Response,
  next?: NextFunction
) => Promise<unknown>;
const asyncHandler =(fn:AsyncFn)=>async(req:Request, res:Response, next?:NextFunction)=>{
    try {
        await fn(req, res, next)
    } catch (error: any) {
        console.error(error)
        console.log(error)
         res.status(error.code || 500).json({
            success: false,
            message: error.message || "Internal Server Error",
        })
        console.log(error)
    }
};

export {asyncHandler}