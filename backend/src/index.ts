import dotenv from "dotenv";
import { app } from "./app.ts";
import { prisma } from "./db/prisma.ts";

dotenv.config({
  path: "./env",
});

app.get("/",async(req, res)=>{
  const users = await prisma.user.findMany({})
  return res.status(200).send("hello")
})

app.listen(process.env.PORT || 5000, () => {
  console.log("Server run on port: ", process.env.PORT || 5000);
});
