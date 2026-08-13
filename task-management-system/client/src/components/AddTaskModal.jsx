import { useState } from "react"



function AddTaskModal({ onClose }) {
    const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "pending",
    priority: "Medium",
    dueDate: ""
    })

    function handleSubmit(event) {
            event.preventDefault()

            console.log(formData)
    }
    return (
        <>
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

            <div className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

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
                     <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                        <div >
                            <label className="mb-2 block text-sm text-zinc-400">
                                Title
                            </label>

                            <input
                                type="text"
                                value={formData.title}
                                onChange={function (event) {
                                    setFormData({
                                        ...formData,
                                        title: event.target.value
                                    })
                                }}
                                className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 outline-none focus:border-violet-500"
                            />
                        </div>
                        <div >
                            <label className="mb-2 block text-sm text-zinc-400">
                                Description
                            </label>

                            <textarea
                                value={formData.description}
                                onChange={function (event) {
                                    setFormData({
                                        ...formData,
                                        description: event.target.value
                                    })
                                }}
                                className="min-h-24 w-full resize-none rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 outline-none focus:border-violet-500"
                            />
                        </div>
                        <div>
                            <label className="mb-2 block text-sm text-zinc-400">
                                Status
                            </label>

                            <select
                                value={formData.status}
                                onChange={function (event) {
                                    setFormData({
                                        ...formData,
                                        status: event.target.value
                                    })
                                }}
                                className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-3 text-zinc-100 outline-none focus:border-violet-500"
                            >
                                <option className="bg-zinc-900 text-white" value="pending">
                                    Task Ready
                                </option>

                                <option className="bg-zinc-900 text-white" value="inprogress">
                                    In Progress
                                </option>

                                <option className="bg-zinc-900 text-white" value="review">
                                    Needs Review
                                </option>

                                <option className="bg-zinc-900 text-white" value="completed">
                                    Done
                                </option>
                            </select>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="mb-2 block text-sm text-zinc-400">
                                    Priority
                                </label>

                                <select
                                    value={formData.priority}
                                    onChange={function (event) {
                                        setFormData({
                                            ...formData,
                                            priority: event.target.value
                                        })
                                    }}
                                    className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-3 text-zinc-100 outline-none focus:border-violet-500"
                                >
                                    <option className="bg-zinc-900 text-white" value="Low">
                                        Low
                                    </option>

                                    <option className="bg-zinc-900 text-white" value="Medium">
                                        Medium
                                    </option>

                                    <option className="bg-zinc-900 text-white" value="High">
                                        High
                                    </option>
                                </select>
                            </div>
                            <div>
                                <label className="mb-2 block text-sm text-zinc-400">
                                    Due Date
                                </label>

                                <input
                                    type="date"
                                    value={formData.dueDate}
                                    onChange={function (event) {
                                        setFormData({
                                            ...formData,
                                            dueDate: event.target.value
                                        })
                                    }}
                                    className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-3 text-zinc-100 outline-none focus:border-violet-500"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-violet-500 py-3 font-medium text-white transition hover:bg-violet-600"
                        >
                            Create Task
                        </button>
                    </form>
                

            </div>

        </div>
        
    </>
    )
}

export default AddTaskModal