import { useState } from "react";
import { Menu, X } from "lucide-react";
import crm from "../assets/crm.png";
function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return(

    <nav className="bg-white flex items-center justify-between max-w-[1100px] mx-auto w-full px-5 py-4 md:mt-10 md:mb-15 text-xl">
        <div className="flex flex-row gap-2 md:-translate-0 translate-y-[15px]">
            <h1 className="text-black font-bold">Property</h1>
            <img src={crm} alt="crm" className="h-12 w-auto -translate-y-[15px]"/>
        </div>
        <div className="hidden md:flex flex row text-lg text-gray-500 gap-6 justify-center font-bold">
            <a href="#" className=" hover:text-black transition">
            Home
            </a>
            <a href="#" className=" hover:text-black transition">
            Features
            </a>
            <a href="#" className=" hover:text-black transition">
            About
            </a>
            <a href="#" className=" hover:text-black transition">
            Contact Us
            </a>
            <a href="#" className=" hover:text-black transition">
            03000000
            </a>
            
            <a href="#" className="hover:bg-black text-white transition inline-flex rounded-4xl px-6 py-3 bg-green-800  -translate-y-2.5">AI powered CRM</a>
            
        </div>
        <button
    onClick={() => setIsMenuOpen(true)}
    className="md:hidden flex items-center justify-center bg-green-700 text-white w-10 h-10 rounded-full"
    aria-label="Open menu"
    >
    <Menu size={24} />
    </button>
    </nav>
    )
}
export default Navbar