import {
  Cloud,
  Map,
  MessageCircle,
  Building2
} from "lucide-react"
import Sol from "../assets/Solution.png"
import test from "../assets/testimorial.png"
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
        <>
        <div className="md:max-w-[1100px] w-[90%] mx-auto flex flex-col items-center md:items-start">
            <div className="border border-gray-50 rounded-2xl w-fit px-4 bg-gray-50 text-green-700 font-sans mt-6 ">
                <i>Property CRM</i>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[600px_500px] gap-10 mt-6">
                <div>
                    <h1 className="font-bold text-black text-2xl text-center md:text-left md:text-4xl">One Window 
                        <span className=" text-green-700 text-2xl md:text-4xl"> Solution</span>
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
            <div className="md:max-w-[1200px] w-[90%] mx-auto mt-8 grid grid-cols-1 md:grid-cols-[600px_600px] gap-6">
                <div className="w-125">
                    <img src={test} />

                </div>
                <div className="md:mt-25 mt-10">
                    <h1 className="font-meduim text-green-700 translate-x-4">
                        <i>   Our Testimorial</i>
                    </h1>
                    <h1 className="text-black text-2xl md:text-4xl font-bold leading-relaxed md:leading-13">
                        What Our  
                        <span className="text-green-700"> Customer Said </span>
                        <br />About Us
                    </h1>

                </div>
            </div>
            <div className="mt-6 md:max-w-[1000px] w-[90%] gap-4 mx-auto grid grid-cols-1 md:grid-cols-2 text-gray-400 font-meduim text-sm leading-7">
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illum commodi, earum libero accusantium ratione laboriosam aperiam, eius expedita non architecto minima natus, quasi tenetur.</p>
                    <p className="mt-4 font-bold text-black text-meduim md:translate-x-16 translate-x-0">
                        Alex Andreson <br/> 
                        <span className="text-gray-400 font-meduim text-sm">
                            CEO Digital Startup
                        </span>
                    </p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, tempore incidunt. Ea voluptates maxime sed quibusdam totam placeat nobis, nihil, ratione sequi sapiente non dolor.</p>
                    <p className="mt-4 font-bold text-black text-meduim md:translate-x-16 translate-x-0">
                        Ali <br/> 
                        <span className="text-gray-400 font-meduim text-sm">
                            CEO Digital Startup
                        </span>
                    </p>

                </div>
            </div>

        </>
    )
}
export default Solution