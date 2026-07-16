import Navbar from "./components/Navbar"
import Hero from "./components/hero"
import Service from "./components/services"
import Feature from "./components/management_feature"
import Solution from "./components/solution_testimorial"
import Faq from "./components/faq_form"
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Feature />
      <Solution />
      <Faq/>
    </>
  )
}

export default App