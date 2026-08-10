import task from "../model/task.js"

async function getalltasks(req,res){
    const tasks=await task.find()
    res.status(200).json(tasks)

}

async function createTask(req, res) {
    const Task = await task.create(req.body)
    res.status(201).json(Task)
}

export {getalltasks, createTask}
