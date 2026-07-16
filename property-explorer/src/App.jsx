import Navbar from "./components/Navbar"
import Hero from "./components/hero"
import Service from "./components/services"
import Feature from "./components/management_feature"
import Solution from "./components/solution_testimorial"
import Faq from "./components/faq_form"
import Footer from "./components/Footer"
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Feature />
      <Solution />
      <Faq/>
      <Footer/>
    </>
  )
}

export default App