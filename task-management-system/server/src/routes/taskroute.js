import express from "express"
import {getalltasks,createTask,getTask} from "../controllers/taskcontrol.js"

const router = express.Router()

router.get("/", getalltasks)
router.post("/",createTask)
router.get("/:id", getTask)
export default router