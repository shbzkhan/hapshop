import dotenv from "dotenv";
import { app } from "./app.ts";

dotenv.config({
  path: "./env",
});


app.listen(process.env.PORT || 5000, () => {
  console.log("Server run on port: ", process.env.PORT || 5000);
});
