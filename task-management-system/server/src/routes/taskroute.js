import express from "express"
import {getalltasks,createTask,getTask,updateTask,deleteTask} from "../controllers/taskcontrol.js"

const router = express.Router()

router.get("/", getalltasks)
router.post("/",createTask)
router.get("/:id", getTask)
router.patch("/:id",updateTask)
router.delete("/:id",deleteTask)
export default router