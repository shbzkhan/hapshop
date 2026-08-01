import dotenv from "dotenv"
import { connectDB } from "./db/index.ts"
import { app } from "./app.ts"
import dns from "dns"

//change dns
dns.setServers(["1.1.1.1", "8.8.8.8"])


dotenv.config({
    path:"./env"
})




app.listen(process.env.PORT || 5000, () => {
            console.log("Server run on port: ", process.env.PORT || 5000);
})