import { Router } from "express";
import { register } from "../controllers/user.controller.ts";

const router = Router();

router.route("/register").post(register)



export default router