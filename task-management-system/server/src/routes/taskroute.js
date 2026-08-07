import express from "express"
import {getalltasks} from "../controllers/taskcontrol.js"

const router = express.Router()

router.get("/", getalltasks)

export default router