import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [task, setTask] = useState([])
  useEffect (function(){
    async function getTask(){
      const response= await fetch("http://localhost:5000/api/tasks")
      const data= await response.json()
      console.log(data)
    }
    getTask()
  }, [])
  return (
    
    <>
      
    </>
  )
}

export default App
