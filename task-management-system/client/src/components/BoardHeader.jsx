function BoardHeader({onAddTask}){
    return(
        <div className="flex items-center justify-between mb-8">

            <div>
                <h1 className="text-3xl font-bold">
                    Task Dashboard
                </h1>

                <p className="text-sm text-zinc-400 mt-1">
                    Manage and track your tasks
                </p>
            </div>

            <button onClick={onAddTask} className="bg-violet-500 hover:bg-violet-600 px-4 py-2 rounded-lg text-sm font-medium"  >
                + Add Task
            </button>

        </div>
    )
}
export default BoardHeader