import TaskCard from "./TaskCard.jsx"
function TaskCol({ title, tasks }) {
    return (
        <section>
            <h2>{title}</h2>
            <div className="space-y-3">
                {tasks.map(function (task) {
                    return (
                        <TaskCard
                            key={task._id}
                            task={task}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default TaskCol