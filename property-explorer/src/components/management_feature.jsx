import { useState } from "react"
import Generate from "../assets/generate.png"
import Organize from "../assets/organize.png"

const featureTabs = [
  "GENERATE MORE SALES",
  "ORGANIZE SALE ACTIVITIES",
  "TRACK SALE CAMPAIGNS",
  "PROPERTY LISTING",
  "MANAGE TEAMS",
]
function Feature(){
    const [activeTab, setActiveTab] = useState(0)
    return(
        <div className="mt-4 bg-white pt-6 text-center">
            <h1 className="text-4xl text-black font-bold ">CRM Property Management Features Overview</h1>
            <p className="text-black text-sm font-medium pt-8">Streamline your property business and increase your sales with the power of CRM software</p>
            <div className="flex flex-row justify-center gap-4 pt-14 font-semibold">
                {featureTabs.map((tab,index)=>(
                    <button key={tab} className="border border-gray-200 bg-gray-100 shadow-2xl pt-2 pb-4 px-2 text-green-700 hover:text-black">
                        {tab}
                    </button>
                ))}
                
            </div>
        </div>

    )
}
export default Feature 