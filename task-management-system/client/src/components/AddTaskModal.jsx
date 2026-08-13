function AddTaskModal({ onClose }) {
    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

            <div className="w-full max-w-lg rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

                <div className="flex items-center justify-between">

                    <h2 className="text-xl font-semibold">
                        Create New Task
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-zinc-500 hover:text-white"
                    >
                        ✕
                    </button>

                </div>

            </div>

        </div>
    )
}

export default AddTaskModal