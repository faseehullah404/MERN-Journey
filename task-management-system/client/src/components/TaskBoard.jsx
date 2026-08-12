import TaskCol from "./TaskCol.jsx"
function TaskBoard(){
    return (
        <div className="grid grid-cols-4 gap-4">

            <TaskColumn title="Task Ready" />

            <TaskColumn title="In Progress" />

            <TaskColumn title="Needs Review" />

            <TaskColumn title="Done" />

        </div>
    )
}
export default TaskBoard
