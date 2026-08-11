import task from "../model/task.js"

async function getalltasks(req,res){
    const tasks=await task.find()
    res.status(200).json(tasks)

}

async function createTask(req, res) {
    try{
        const Task = await task.create(req.body)
        res.status(201).json(Task)
    }
    catch (error){
        res.status(400).json({message:"wrong input"})
    }
}

async function getTask(req,res){
    try{
        const Task=await task.findById(req.params.id)
        if(!Task){
            return res.status(404).json({message:"task not found"})
        }
        res.status(200).json(Task)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

async function updateTask(req,res){
    const Task=await task.findByIdAndUpdate(req.params.id,req.body,{new:true,runvalidators:true})
    res.status(200).json(Task)
}

async function deleteTask(req,res){
    try{
        const Task=await task.findByIdAndDelete(req.params.id)
        if(!Task){
            return res.status(404).json({message:"task not found"})
        }
        res.status(200).json( {
            id: req.params.id,
            message:" :Task Deleted Successfully"
        
        })
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
export {getalltasks, createTask, getTask, updateTask,deleteTask}
