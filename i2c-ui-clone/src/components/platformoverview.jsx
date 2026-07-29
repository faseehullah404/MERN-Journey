import { useEffect, useState } from "react"
import { Circle } from "lucide-react"

import customerCentric from "../assets/Customer-Centric-Banking-Solutions.webp"
import integratedPlatform from "../assets/Integrated-Financial-Platform.webp"
import reliablePlatform from "../assets/Reliable-Payment-Platform.webp"
import overview1 from "../assets/overview1.png"
import overview2 from "../assets/overview2.png"
import overview3 from "../assets/overview3.png"
const platformBenefits = [
  {
    id: 1,
    text: [
      "Expand to new",
      "markets &",
      "products, faster.",
    ],
  },
  {
    id: 2,
    text: [
      "Drive smarter",
      "customer",
      "experiences.",
    ],
  },
  {
    id: 3,
    text: [
      "Enjoy less than 5",
      "minutes downtime",
      "per year.",
    ],
  },
]

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
            <div>
            <div className="relative h-[372px] w-[390px]">

                {platformSlides.map((slide, index) => {
                let slideStyle =
                    "pointer-events-none opacity-0"

                if (activeSlide === index) {
                    slideStyle =
                    "pointer-events-auto opacity-100"
                }

                return (
                    <div
                    key={slide.id}
                    className={`
                        absolute inset-0
                        transition-opacity duration-700 ease-in-out
                        ${slideStyle}
                    `}
                    >
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-full w-full object-contain"
                    />

                    <h3
                        className="
                        absolute bottom-[26px] left-1/2
                        -translate-x-1/2 whitespace-nowrap
                        font-['Inter'] text-[28px]
                        font-[400] leading-[34px]
                        text-white
                        "
                    >
                        {slide.title}
                    </h3>
                    </div>
                )
                })}

            </div>
        </div>
        <div className="relative mt-[38px] pl-[38px]">

        {/* Ek hi dot hai jo selected item tak move karega */}
        <span
            aria-hidden="true"
            className="
            absolute left-0 top-[19px]
            h-[9px] w-[9px]
            rounded-full bg-[#1434CB]
            transition-transform duration-500 ease-out
            "
            style={{
            transform: `translateY(${activeSlide * 120}px)`,
            }}
        />

        {platformSlides.map((slide, index) => {
            const isActive = activeSlide === index

            return (
            <button
                key={slide.id}
                type="button"
                onClick={() => setActiveSlide(index)}
                className="
                block h-[120px] w-full
                border-0 bg-transparent p-0
                text-left
                "
            >
                <span
                className={`
                    block font-['Inter']
                    text-[38px] font-[300]
                    leading-[44px]
                    transition-colors duration-300
                    ${
                    isActive
                        ? "text-[#1434CB]"
                        : "text-[#111111]"
                    }
                `}
                >
                {slide.metric}
                </span>

                <span
                className={`
                    mt-[5px] block font-['Inter']
                    text-[18px] font-[300]
                    leading-[23px]
                    transition-colors duration-300
                    ${
                    isActive
                        ? "text-[#1434CB]"
                        : "text-[#111111]"
                    }
                `}
                >
                {slide.description.map((line) => {
                    return (
                    <span key={line} className="block">
                        {line}
                    </span>
                    )
                })}
                </span>
            </button>
            )
        })}

        </div>
        </aside>

        {/* Right scrolling column */}
        <div className="min-h-[1450px]">

        <div className="flex items-end">
            <h2
            className="
                font-['Inter']
                text-[48px] font-[300]
                leading-[1.15]
                tracking-[-2.4px]
                text-[#1B223A]
            "
            >
            Unified platform built upon
            <br />
            a customer-centric frame
            <br />
            to uncover growth and innovation
            </h2>

            <Circle
            aria-hidden="true"
            className="
                mb-[9px] ml-[7px]
                h-[9px] w-[9px]
                shrink-0 fill-[#FF7200]
                text-[#FF7200]
            "
            strokeWidth={0}
            />
        </div>

        <div className="mt-[38px] grid grid-cols-3 gap-[18px]">
        {platformBenefits.map((benefit) => {
            return (
            <div
                key={benefit.id}
                className="
                flex h-[205px] flex-col
                justify-end
                rounded-[18px]
                bg-[#F7FAFD]
                px-[24px] pb-[25px]
                shadow-[0_4px_12px_rgba(27,34,58,0.08)]
                "
            >
                <p className="font-['Inter'] text-[18px] font-[300] leading-[23px] text-[#1B223A]">
                {benefit.text.map((line) => {
                    return (
                    <span key={line} className="block">
                        {line}
                    </span>
                    )
                })}
                </p>
                </div>
            )
        })}
        </div>
    </div>
    </div>
    </section>
    )
    
  
}

export default PlatformOverview