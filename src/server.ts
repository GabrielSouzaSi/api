import express from "express"

import { routes } from "./routes"
import { errorHandling } from "./middlewares/error-handling"

const app = express()

app.use(express.json())
app.use(routes)

app.use(errorHandling)

app.listen(process.env.PORT ? Number(process.env.PORT) : 3333, "0.0.0.0", () => {
    console.log("HTTP Server Running");
});
