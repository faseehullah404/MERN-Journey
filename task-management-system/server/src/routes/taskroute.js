import express from "express"
import {getalltasks,createTask} from "../controllers/taskcontrol.js"

const router = express.Router()

router.get("/", getalltasks)
router.post("/",createTask)
export default router