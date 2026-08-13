function TaskCard({ task }) {
    let priorityStyle = ""

    if (task.priority === "High") {
        priorityStyle = "bg-rose-500/15 text-rose-400"
    } else if (task.priority === "Medium") {
        priorityStyle = "bg-amber-500/15 text-amber-400"
    } else {
        priorityStyle = "bg-emerald-500/15 text-emerald-400"
    }
    const formattedDate = task.dueDate
        ? new Date(task.dueDate).toLocaleDateString()
        : "No due date"
    return (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 transition hover:border-zinc-700 ">
            <div className="flex items-center justify-between">
                <span
                    className={`rounded-full px-2 py-1 text-xs ${priorityStyle}`}>
                    {task.priority}
                </span>
                <button className="text-zinc-500 hover:text-zinc-200">
                    •••
                </button>

            </div>
            <h3 className="mt-3 font-semibold text-zinc-100">
                {task.title}
            </h3>

            <p className="mt-2 text-sm leading-5 text-zinc-400">
                {task.description || "No description"}
            </p>
            
            <p className="text-xs text-zinc-500">
                {formattedDate}
            </p>
            

        </div>
    )
}

export default TaskCard