import { useEffect, useState } from "react"
import Topbar from "../components/topbar.jsx"
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

        <main>
            {/* Board later */}
        </main>

    </div>
    )
}

export default Dashboard