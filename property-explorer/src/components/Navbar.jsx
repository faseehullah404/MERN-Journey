import crm from "../assets/crm.png"
function Navbar(){
    return(

    <nav className="bg-white mt-10 mb-15 flex flex-row justify-between max-w-[1100px] mx-auto w-full text-xl">
        <div className="flex flex-row gap-2 item-center">
            <h1 className="text-black font-bold">Property</h1>
            <img src={crm} alt="crm" className="h-12 w-auto -translate-y-[15px]"/>
        </div>
        <div className="flex flex row text-lg text-gray-500 gap-6 justify-center font-bold">
            <a href="#" class=" hover:text-black transition">
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
    </nav>
    )
}
export default Navbar