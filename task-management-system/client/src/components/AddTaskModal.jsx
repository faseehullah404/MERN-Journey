import { useState } from "react"

const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "pending",
    priority: "Medium",
    dueDate: ""
})

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
                    <div className="mt-6">
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
                    <div className="mt-4">
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
                    <select
                        value={formData.status}
                        onChange={function (event) {
                            setFormData({
                                ...formData,
                                status: event.target.value
                            })
                        }}
                        className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2"
                    >
                        <option value="pending">Task Ready</option>
                        <option value="inprogress">In Progress</option>
                        <option value="review">Needs Review</option>
                        <option value="completed">Done</option>
                    </select>
                    
                </div>

            </div>

        </div>
    )
}

export default AddTaskModal