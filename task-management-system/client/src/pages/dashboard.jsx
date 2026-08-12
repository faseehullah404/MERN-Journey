import { useEffect, useState } from "react"
import Topbar from "../components/topbar.jsx"
import BoardHeader from "../components/BoardHeader.jsx"
import TaskBoard from "../components/TaskBoard.jsx"
import TaskProgress from "../components/TaskProgress.jsx"
import TaskActivity from "../components/TaskActivity.jsx" 

function Dashboard() {

    const [tasks, setTasks] = useState([])

    useEffect(function () {

        async function getTasks() {

            const response = await fetch(
                "http://localhost:5000/api/tasks"
            )

            const data = await response.json()

            setTasks(data)
        }

        getTasks()

    }, [])

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100">

        <Topbar />

        <div className="flex">
                <main className="flex-1 p-6">
                    <BoardHeader />
                    <TaskBoard />
                </main>

                <aside className="w-80 border-l border-zinc-800 bg-zinc-900 p-6">
                    <TaskProgress />
                    <TaskActivity />
                </aside>
        </div>

    </div>
    )
}

export default Dashboard