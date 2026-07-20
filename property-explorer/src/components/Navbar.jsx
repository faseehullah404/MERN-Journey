import { useState } from "react";
import { Menu, X } from "lucide-react";
import crm from "../assets/crm.png";
function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return(
    <>
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
    {isMenuOpen && (
  <div
    onClick={() => setIsMenuOpen(false)}
    className="fixed inset-0 z-40 bg-black/40 md:hidden"
    />
    )}
    <div
    className={`fixed top-0 left-0 z-50 h-screen w-[80%] bg-green-600/90 text-white
    transition-transform duration-300 md:hidden
    ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
    <div className="flex justify-end p-5">
        <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
        >
            <X size={28} />
        </button>
        </div>

        <div className="flex flex-col gap-6 px-6 text-base">
        <a
        href="#"
        onClick={() => setIsMenuOpen(false)}
        className="font-bold"
        >
        Home
        </a>

        <a href="#" onClick={() => setIsMenuOpen(false)}>
        Features
        </a>

        <a href="#" onClick={() => setIsMenuOpen(false)}>
        About
        </a>

        <a href="#" onClick={() => setIsMenuOpen(false)}>
        Contact Us
        </a>

        <a href="tel:03000000">
        03000000
        </a>

        <a
        href="#"
        onClick={() => setIsMenuOpen(false)}
        className="w-fit rounded-full bg-white px-5 py-3 text-green-700 font-semibold"
        >
        AI Powered CRM
        </a>
        </div>
    </div>

    </>
    )
}
export default Navbar