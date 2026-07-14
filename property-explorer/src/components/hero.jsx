function hero(){
    return(
        <div class = "grid grid-cols-[700px_580px] max-w-full  ">
            <div >
                <h1 className="text-5xl font-bold text-blue-950 leading-12">
                    Enhance Your Sales
                    <br />Funnel with Real Estate
                    <br />
                    Estate CRM in UAE
                </h1>
                <div className="mt-4 leading-8 text-lg translate-x-1">
                    <p>
                        Empower developers and real estate brokers by using cutting-edge tools to automate and streamline property management. By leveraging cutting-edge technologies like
                    <span className="font-bold"> Real Estate CRM in UAE</span>
                    , you can enhance efficiency, improve workflow, and elevate customer experiences. From tracking leads to managing properties, automation simplifies your operations, giving you more time to focus on growth and success.
                    </p>
                </div>
                <div className="mt-4 flex flex-row gap-4 translate-x-1">
                    <a href="#" className="inline-flex rounded-2xl bg-green-700 text-white hover:bg-white hover:text-black py-3 px-5 shadow-[0_0_30px_rgba(56,189,248,0.25)] text-center ">
                        Start free Trial
                    </a>
                    <a href="#" className="inline-flex rounded-2xl bg-white text-green-700 border border-green-700 py-3 px-5 shadow-[0_0_30px_rgba(56,189,248,0.25)] text-center ">
                        Book Free Demo
                    </a>
                    
                </div>
            </div>
            <div>
                <form className="shadow-xl p-6 ">
                    <div >
                        <input className="mt-4 border w-full border-gray-100 rounded-4xl p-4" placeholder="Name" />
                        <input className="mt-4 border w-full border-gray-100 rounded-4xl p-4" placeholder="Phone Number" />
                        <input className="mt-4 border w-full border-gray-100 rounded-4xl p-4" placeholder="Email" />
                        <input className="mt-4 border w-full border-gray-100 rounded-4xl p-4" placeholder="Describe Your Requirement" />
                        <a href="#" className="mt-6 mb-16 inline-flex rounded-2xl bg-green-700 text-white hover:bg-yellow-400 hover:text-black py-3 px-8 shadow-[0_0_30px_rgba(56,189,248,0.25)] text-center ">
                        Submit
                    </a>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default hero