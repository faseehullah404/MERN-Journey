import express from "express"
import cors from "cors"
import taskRoutes from "./routes/taskroute.js"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/api/health", function (req, res) {
  res.status(200).json({
    message: "Task API is running"
  })
  
})
app.use("/api/tasks", taskRoutes)


export default app