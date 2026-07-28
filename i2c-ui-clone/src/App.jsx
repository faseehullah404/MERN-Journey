import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Hero from "./components/hero.jsx"
import Nav from "./components/nav"
import Video from "./components/videosection.jsx"
import Feature from "./components/feature.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
    <Hero />
    <Video/>
    <Feature/>
    </>
  )
}

export default App
