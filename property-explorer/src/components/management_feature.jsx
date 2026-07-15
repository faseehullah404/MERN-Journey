import track from "../assets/track.png"
import property from "../assets/property.png"
import manage from "../assets/manage.png"
import Content from "./feature_content"
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
  {
  id: 3,
  buttonText: "TRACK SALE CAMPAIGNS",
  label: "EFFORTS LESS WORK",
  heading: "Tracking of your Campaigns",
  highlightedHeading: "& Sales Queries",
  description:
    "Simplify your marketing campaigns with CRM by automating email, text, and social media outreach.",
  image: track,
  imageLeft: true,
},
  {
    id: 4,
    buttonText: "PROPERTY LISTING",
    label: "",
    heading: "Manage property",
    highlightedHeading: "Listing",
    description:
      "Input all of your real estate assets into Property CRM system, including property information.",
    image: property,
    imageLeft: false,
  },
   {
    id: 5,
    buttonText: "MANAGE TEAMS",
    label: "",
    heading: "Smoothly Manage",
    highlightedHeading: "Teams",
    description: "",
    image: manage,
    imageLeft: true,
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
            <Content feature={selectedFeature} />
        </div>

    )
}
export default Feature 