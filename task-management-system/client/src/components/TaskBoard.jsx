import TaskCol from "./TaskCol.jsx"
function TaskBoard({tasks}){
    const readyTasks = tasks.filter(function (task) {
    return task.status === "pending"
    })
    const progressTasks = tasks.filter(function (task) {
    return task.status === "inprogress"
    })

    const reviewTasks = tasks.filter(function (task) {
        return task.status === "review"
    })

    const completedTasks = tasks.filter(function (task) {
        return task.status === "completed"
    })
    
    return (
        <div className="grid grid-cols-3 gap-4">

            <TaskCol title="Task Ready" tasks={readyTasks} />

            <TaskCol title="In Progress" tasks={progressTasks} />

            <TaskCol title="Need Review" tasks={reviewTasks} />

            <TaskCol title="Done" tasks={completedTasks} />

        </div>
    )
}
export default TaskBoard
