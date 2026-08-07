import "dotenv/config"
import app from "./app.js"
import connectDB from "./config/db.js"
import task from "./model/task.js"

const PORT = process.env.PORT || 5000

async function startServer() {
    await connectDB()

    app.listen(PORT, function () {
      console.log(`Server running on http://localhost:${PORT}`)
    })
}

startServer()