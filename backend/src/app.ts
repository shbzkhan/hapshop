import express from "express"
import cors from "cors"
import type {Express} from "express"
const app:Express = express()


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());


//import statement
import userRouter from "./routes/user.route.ts";

// rotuer declaration
app.use("/api/v1/users", userRouter)

export { app }