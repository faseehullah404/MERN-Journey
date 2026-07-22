import i2c_logo from "../assets/i2c-logo.svg"
import { useEffect, useState } from "react"
function Nav(){
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        function handleScroll() {
        if (window.scrollY > 20) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
        window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    return(
        <nav className="w-[1230px] mx-auto grid grid-cols-[60%_40%] mt-4">
            <div className="flex flex-row justify-center">
                <img src={i2c_logo} className="h-13 w-13"></img>
            </div>
        </nav>

    )
}
export default Nav