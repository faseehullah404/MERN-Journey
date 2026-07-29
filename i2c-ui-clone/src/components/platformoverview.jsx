import { useEffect, useState } from "react"
import { ArrowUpRight, Circle, Play  } from "lucide-react"

import customerCentric from "../assets/Customer-Centric-Banking-Solutions.webp"
import integratedPlatform from "../assets/Integrated-Financial-Platform.webp"
import reliablePlatform from "../assets/Reliable-Payment-Platform.webp"
import overview1 from "../assets/overview1.png"
import overview2 from "../assets/overview2.png"
import overview3 from "../assets/overview3.png"
import testimonialImage from "../assets/Belize-bank-original-logo.png"
import testimonialLogo from "../assets/payactiv-logo.png"
const platformBenefits = [
  {
    id: 1,
    icon: overview1,
    text: [
      "Expand to new",
      "markets &",
      "products, faster.",
    ],
  },
  {
    id: 2,
    icon: overview2,
    text: [
      "Drive smarter",
      "customer",
      "experiences.",
    ],
  },
  {
    id: 3,
    icon: overview3,
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
    title: "integrated",
    metric: "1",
    description: [
      "Unified Global Platform",
      "and Technology Stack",
    ],
  },
]

const storyCards = [
  {
    id: 1,
    text: [
      "Bridging the gap",
      "between global",
      "payments and",
      "everyday banking.",
    ],
    background: "#E8E9FF",
  },
  {
    id: 2,
    text: [
      "Rapid, nearly",
      "frictionless",
      "integration and",
      "launch of credit",
      "self-service...",
    ],
    background: "#D5ECFF",
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
    
    
    <section className="w-full bg-white pb-[120px] mt-11">
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
                        absolute bottom-[44px] left-1/2
                        -translate-x-1/2 whitespace-nowrap
                        font-['Inter'] text-[32px]
                        font-[500] leading-[34px]
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
        <div className="relative mt-[1px] pl-[28px] translate-x-25 ">

        {/* Ek hi dot hai jo selected item tak move karega */}
        <span
            aria-hidden="true"
            className="
            absolute left-0 
            h-[9px] w-[9px]
            rounded-full bg-[#1434CB]
            transition-transform duration-500 ease-out
            translate-y-10
            "
            style={{
            transform: `translateY(${activeSlide * 113}px)`,
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
                className={` tracking-[-5px]
                    block font-['Inter']
                    text-[38px] font-[400]
                    leading-[44px]
                    transition-colors duration-300
                    ${
                    isActive
                        ? "text-[#0F299D]"
                        : "text-[#111111]"
                    }
                `}
                >
                {slide.metric}
                </span>

                <span
                className={` tracking-[-1px]
                    mt-[5px] block font-['Inter']
                    text-[20px] font-[300]
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
        <div>

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
                    justify-between
                    rounded-[18px]
                    bg-[#F7FAFD]
                    px-[24px] py-[24px]
                    shadow-[0_4px_12px_rgba(27,34,58,0.08)]
                    "
                >
                    <img
                    src={benefit.icon}
                    alt=""
                    className="h-[45px] w-[45px] object-contain"
                    />

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
        <div className="mt-[34px]">
            <h3 className="font-['Inter'] text-[22px] font-[500] leading-[28px] text-[#1B223A]">
                One engine. All power.
            </h3>

            <p className="font-['Inter'] text-[18px] font-[300] leading-[24px] text-[#1B223A]">
                Infinite journeys without legacy limits or public cloud instability.
            </p>
        </div>
        <a
            href="#"
            className="
                group mt-[32px]
                flex h-[58px] w-[195px]
                items-center justify-center gap-[12px]
                rounded-[7px]
                border-2 border-[#1434CB]
                font-['Inter'] text-[17px] font-[400]
                text-[#1434CB]
            "
            >
            <span>Start Exploring</span>

            <span className="relative h-[19px] w-[19px] overflow-hidden">
                <ArrowUpRight
                className="
                    absolute left-0 top-0
                    h-[19px] w-[19px]
                    transition-transform duration-300
                    group-hover:-translate-y-full
                "
                strokeWidth={1.5}
                />

                <ArrowUpRight
                className="
                    absolute left-0 top-full
                    h-[19px] w-[19px]
                    transition-transform duration-300
                    group-hover:-translate-y-full
                "
                strokeWidth={1.5}
                />
            </span>
        </a>
        <div className="mt-[58px]">
            <h3
                className="
                font-['Inter']
                text-[32px] font-[400]
                leading-[39px]
                tracking-[-1px]
                text-[#1B223A]
                "
            >
                Shift the power differential.
            </h3>

            <p className="mt-[12px] max-w-[700px] font-['Inter'] text-[17px] font-[300] leading-[23px] text-[#1B223A]">
                Watch how i2c helps these visionaries outperform outdated banking and
                payments platforms to scale fast and modernize to last.
            </p>
            <div className="mt-[34px] grid grid-cols-[1fr_1fr_1fr] gap-[18px]">

                {storyCards.map((card) => {
                    return (
                    <div
                        key={card.id}
                        className="
                        flex h-[277px] flex-col
                        justify-between
                        rounded-[18px]
                        px-[24px] py-[25px]
                        "
                        style={{
                        backgroundColor: card.background,
                        }}
                    >
                        <p className="font-['Inter'] text-[18px] font-[300] leading-[24px] text-[#1B223A]">
                        {card.text.map((line) => {
                            return (
                            <span key={line} className="block">
                                {line}
                            </span>
                            )
                        })}
                        </p>

                        <div className="h-[44px] w-[85px] rounded-[8px] bg-white" />
                    </div>
                    )
                })}

                {/* Third image card */}
                <div className="relative h-[277px] overflow-hidden rounded-[18px] bg-[#1B223A]">
                    <img
                        src={testimonialImage}
                        alt="Customer testimonial"
                        className="absolute inset-0 h-full w-full object-cover"
                        />

                        <div className="absolute inset-x-0 bottom-0 h-[46%] bg-gradient-to-t from-black via-black/70 to-transparent" />

                    <img
                        src={testimonialLogo}
                        alt=""
                        className="
                            absolute left-[16px] top-[16px]
                            h-[42px] w-[78px]
                            rounded-[7px]
                            bg-white object-contain p-[7px]
                        "
                        />

                        <div
                        aria-hidden="true"
                        className="
                            absolute bottom-[86px] left-[16px]
                            flex h-[40px] w-[40px]
                            items-center justify-center
                            rounded-full bg-[#FF7900]
                            text-white
                        "
                        >
                        <Play
                            className="ml-[2px] h-[16px] w-[16px]"
                            fill="currentColor"
                            strokeWidth={0}
                        />
                        </div>

                        <div className="absolute bottom-[16px] left-[16px] text-white">
                        <p className="font-['Inter'] text-[17px] font-[400]">
                            Safwan Shah
                        </p>

                        <p className="mt-[2px] font-['Inter'] text-[14px] font-[300]">
                            CEO &amp; Founder | Payactiv
                        </p>
                        </div>
                </div>

            </div>
        </div>

    </div>
    </div>
    </section>
    )
    
  
}

export default PlatformOverview