import { useEffect, useState } from "react"

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
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}

export default Dashboard