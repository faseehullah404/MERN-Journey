import { useEffect, useState } from "react"
import { Circle } from "lucide-react"

import customerCentric from "../assets/Customer-Centric-Banking-Solutions.webp"
import integratedPlatform from "../assets/Integrated-Financial-Platform.webp"
import reliablePlatform from "../assets/Reliable-Payment-Platform.webp"

const platformSlides = [
  {
    id: 1,
    image: reliablePlatform,
    title: "Reliable",
    metric: "99.999%",
    description: [
      "Historical Availability",
    ],
  },
  {
    id: 2,
    image: customerCentric,
    title: "Customer-Centric",
    metric: "360°",
    description: [
      "Customer-Centric Data",
      "Service Architecture",
    ],
  },
  {
    id: 3,
    image: integratedPlatform,
    title: "Unified",
    metric: "1",
    description: [
      "Unified Global Platform",
      "and Technology Stack",
    ],
  },
]

function PlatformOverview() {
  const [activeSlide, setActiveSlide] = useState(0)

  const currentSlide = platformSlides[activeSlide]
  useEffect(() => {
    const sliderInterval = setInterval(() => {
        setActiveSlide((currentIndex) => {
        return (currentIndex + 1) % platformSlides.length
        })
    }, 4500)

    return () => {
        clearInterval(sliderInterval)
    }
  }, [])

  return (
    
    
    <section className="w-full bg-white pb-[120px] pt-[135px]">
        <div
        className="
            mx-auto grid w-[1230px]
            grid-cols-[430px_1fr]
            items-start gap-[70px]
        "
        >
        {/* Left sticky column */}
        <aside className="sticky top-[115px] self-start">
            Left slider
        </aside>
        
        {/* Right scrolling column */}
        </div>
    </section>
    )
    
  
}

export default PlatformOverview