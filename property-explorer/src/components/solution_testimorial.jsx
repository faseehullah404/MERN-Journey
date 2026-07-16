import {
  Cloud,
  Map,
  MessageCircle,
  Building2
} from "lucide-react"
import Sol from "../assets/Solution.png"
const solutionItems = [
  {
    id: 1,
    title: "Cloud enabled",
    icon: Cloud,
  },
  {
    id: 2,
    title: "Maps",
    icon: Map,
  },
  {
    id: 3,
    title: "Social media and web lead",
    icon: MessageCircle,
  },
  {
    id: 4,
    title: "Build in FMS",
    icon: Building2,
  },
]
function Solution(){
    return(
        <div className="max-w-[1100px] mx-auto ">
            <div className="border border-gray-50 rounded-2xl w-fit px-4 bg-gray-50 text-green-700 font-sans mt-6">
                <i>Property CRM</i>
            </div>
            <div className="grid grid-cols-[600px_500px] gap-10 mt-6">
                <div>
                    <h1 className="font-bold text-black text-4xl">One Window 
                        <span className=" text-green-700 text-4xl"> Solution</span>
                    </h1>
                    <p className="text-gray-600 font-light mt-6">
                        Property CRM a cloud enabled solution will manage Sales Team, Leads Conversion, assign leads to the team, stages of leads, Activity log, Contact List with detail, Dashboard and reports.
                    </p>
                    <div className="mt-5 space-y-3">
                        {solutionItems.map((item) => {
                            const Icon = item.icon

                            return (
                            <div
                                key={item.id}
                                className="flex items-center gap-3"
                            >
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-green-700 text-white">
                                <Icon size={20} strokeWidth={1.8} />
                                </div>

                                <p className="text-sm text-blue-950 ">
                                {item.title}
                                </p>
                            </div>
                            )
                        })}
                        </div>
                </div>
                <div>
                    <img src={Sol} />
                </div>

            </div>
        </div>
    )
}
export default Solution