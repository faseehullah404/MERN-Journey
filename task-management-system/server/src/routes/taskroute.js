import express from "express"
import {getalltasks,createTask,getTask,updateTask} from "../controllers/taskcontrol.js"

const router = express.Router()

router.get("/", getalltasks)
router.post("/",createTask)
router.get("/:id", getTask)
router.patch("/:id",updateTask)
export default router