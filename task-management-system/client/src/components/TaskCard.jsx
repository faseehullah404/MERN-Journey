function TaskCard({ task }) {
    return (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 ">

            <h3 className="font-semibold text-zinc-100">
                {task.title}
            </h3>

            <p className="mt-2 text-sm text-zinc-400">
                {task.description}
            </p>

            <div className="mt-4 text-xs text-zinc-500">
                Priority: {task.priority}
            </div>

        </div>
    )
}

export default TaskCard