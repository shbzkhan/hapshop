import express from "express"
import cors from "cors"
import type {Express} from "express"
const app:Express = express()


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
  })
);

export { app }