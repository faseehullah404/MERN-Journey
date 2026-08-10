import task from "../model/task.js"

async function getalltasks(req,res){
    const tasks=await task.find()
    res.status(200).json(tasks)

}

async function createTask(req, res) {
    console.log(req.body)
}

export {getalltasks, createTask}
