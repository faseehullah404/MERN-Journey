import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/api/health", function (req, res) {
  res.status(200).json({
    message: "Task API is running"
  })
})

export default app