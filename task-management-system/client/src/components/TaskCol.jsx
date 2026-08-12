function TaskColumn({ title }) {

    return (
        <section>

            <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-semibold text-zinc-300">
                    {title}
                </h2>

                <button className="text-zinc-500">
                    •••
                </button>
            </div>

            <div className="space-y-3">
                
            </div>

        </section>
    )
}

export default TaskColumn