import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"

import authRoutes from "./routes/auth.route.js"
import userRoutes from "./routes/user.route.js"
import notificationRoutes from "./routes/notification.route.js"


import { connectDB } from "./lib/db.js"


dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

app.use(cors({
    origin: "https://localhost:5173",
    credentials: true,
})
)

app.use(express.json({ limit: "5mb" })) 
app.use(cookieParser())

app.use ("/api/v1/auth", authRoutes)
app.use ("/api/v1/users", userRoutes)
app.use ("/api/v1/notifications", notificationRoutes)




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    connectDB()
})
