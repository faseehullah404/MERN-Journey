import TaskCol from "./TaskCol.jsx"
function TaskBoard(){
    return (
        <div className="grid grid-cols-3 gap-4">

            <TaskCol title="Task Ready" />

            <TaskCol title="In Progress" />

            <TaskCol title="Done" />

        </div>
    )
}
export default TaskBoard
