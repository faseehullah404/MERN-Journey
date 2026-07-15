import { useState } from "react"
import Generate from "../assets/generate.png"
import Organize from "../assets/organize.png"

const featureData = [
  {
  id:1,
  buttonText:"GENERATE MORE SALES",
  label:"faster than ever",
  heading: "Generating More Sales",
  description:
 "Supercharge your real estate sales pipeline with Property CRM, designed to capture and assign leads efficiently.",
  image: Generate,
  imageLeft: true,
  },
  {
    id: 2,
    buttonText: "ORGANIZE SALE ACTIVITIES",
    label: "TASKS & ACTIVITIES",
    heading: "Organize Your Activities & Tasks",
    description:
      "Increase efficiency with task automation, saving time and effort while maintaining a complete customer interaction record.",
    image: Organize,
    imageLeft: false,
  },
]

function Feature(){
    const [activeTab, setActiveTab] = useState(0)
    const selectedFeature=featureData[activeTab]
    return(
        <div className="mt-4 bg-white pt-6 text-center">
            <h1 className="text-4xl text-black font-bold ">CRM Property Management Features Overview</h1>
            <p className="text-black text-sm font-medium pt-8">Streamline your property business and increase your sales with the power of CRM software</p>
            <div className="flex flex-row justify-center gap-4 pt-14 font-semibold">
                {featureData.map((tab,index)=>{
                    let buttonClasses =
                    "border border-gray-200 shadow-2xl pt-2 pb-4 px-2 transition"

                    if (activeTab === index) {
                        buttonClasses += " bg-green-700 text-white"
                        } else {
                        buttonClasses += " bg-gray-100 text-green-700 hover:text-black"
                        }

                    return(
                    <button key={tab.id} className={buttonClasses}
                    onClick={()=>setActiveTab(index)}>
                        {tab.buttonText}
                    </button>
                    )
                })}

                
            </div>
            <div className="mt-16 flex items-center gap-16 text-left">
                <div className="w-1/2">
                    <img src={selectedFeature.image}
                    alt={selectedFeature.heading}
                    className="w-full object-contain"/>
                </div>
                <div className="w-1/2">
                    <span className="inline-block rounded-full bg-slate-100 px-8 py-3 text-green-700 tracking-widest">
                    {selectedFeature.label}
                    </span>
                    <h2 className="mt-8 text-4xl font-bold text-blue-950">
                      {selectedFeature.heading}
                    </h2>

                    <p className="mt-5 text-lg leading-9 text-blue-950">
                        {selectedFeature.description}
                    </p>
                </div>

            </div>
        </div>

    )
}
export default Feature 