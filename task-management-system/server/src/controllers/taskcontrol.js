import task from "../model/task.js"

async function getalltasks(req,res){
    const tasks=await task.find()
    res.status(200).json(tasks)

}

async function createTask(req, res) {
    const Task = await task.create(req.body)
    res.status(201).json(Task)
}

async function getTask(req,res){
    const Task=await task.findById(req.params.id)
    res.status(200).json(Task)
}

async function updateTask(req,res){
    const Task=await task.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(Task)
}

export {getalltasks, createTask, getTask, updateTask}
