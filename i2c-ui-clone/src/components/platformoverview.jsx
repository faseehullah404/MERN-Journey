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
    
    
    <section   className="
            mt-[38px] w-full
            overflow-x-hidden
            bg-white pb-[90px]

            md:mt-11
            md:pb-[120px]"
    >
        <div
        className="
            mx-auto grid w-full
            grid-cols-1
            items-start gap-[58px]
            px-[22px]

            md:w-[1230px]
            md:grid-cols-[430px_1fr]
            md:gap-[70px]
            md:px-0
        "
        >
        {/* Left sticky column */}
        <aside
        className="
            order-2 static w-full self-start

            md:order-1
            md:sticky md:top-[115px]
        "
        >
            <div className="mx-auto w-full max-w-[330px] md:max-w-none">
            <div
            className="
                relative h-[315px] w-full

                md:h-[372px]
                md:w-[390px]
            "
            >

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
                        absolute bottom-[36px] left-1/2
                        -translate-x-1/2
                        whitespace-nowrap
                        font-['Inter']
                        text-[25px] font-[500]
                        leading-[28px]
                        text-white

                        md:bottom-[44px]
                        md:text-[32px]
                        md:leading-[34px]
                        "
                    >
                        {slide.title}
                    </h3>
                    </div>
                )
                })}

            </div>
        </div>
        <div
        className="
            relative mx-auto mt-[18px]
            w-[285px] pl-[28px]
            translate-x-0

            md:mx-0 md:mt-[1px]
            md:w-auto
            md:translate-x-25
        "
        >

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
        <div
        className="
            order-1 min-w-0 translate-x-0

            md:order-2
            md:translate-x-6
        "
        >

        <div className="flex items-end">
            <h2
            className="
            min-w-0 flex-1
            font-['Inter']
            text-[31px] font-[400]
            leading-[1.01]
            tracking-[-2px]
            text-[#1B223A]

            md:text-[48px]
            md:leading-[1.15]
            md:tracking-[-3px]
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
            mb-[3px] ml-[3px]
            h-[5px] w-[5px]
            shrink-0
            fill-[#FF7200]
            text-[#FF7200]

            md:mb-[9px] md:ml-[5px]
            md:h-[7px] md:w-[7px]
            "
            strokeWidth={0}
            />
        </div>

        <div
        className="
            mt-[28px]
            flex gap-[12px]
            overflow-x-auto pb-[8px]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden

            md:mt-[35px]
            md:grid md:grid-cols-3
            md:gap-[18px]
            md:overflow-visible
            md:pb-0
        "
        >
            {platformBenefits.map((benefit) => {
                return (
                <div
                    key={benefit.id}
                    className="
                    flex h-[155px]
                    min-w-[185px]
                    flex-col justify-between
                    rounded-[10px]
                    bg-[#F7FAFD]
                    px-[22px] py-[17px]
                    shadow-[0_4px_12px_rgba(27,34,58,0.08)]

                    md:h-[205px]
                    md:min-w-0
                    md:rounded-[18px]
                    md:px-[24px]
                    md:py-[14px]
                    "
                >
                    <img
                    src={benefit.icon}
                    alt=""
                    className="
                    h-[36px] w-[36px] object-contain
                    md:h-[45px] md:w-[45px]
                    "
                    />

                    <p
                    className="
                        font-['Inter']
                        text-[15px] font-[400]
                        leading-[17px]
                        text-[#1B223A]

                        md:-translate-y-4
                        md:text-[20px]
                        md:leading-[23px]
                    "
                    >
                    {benefit.text.map((line) => {
                        return (
                        <span key={line} className="block ">
                            {line}
                        </span>
                        )
                    })}
                    </p>
                </div>
                )
            })}

        </div>
        <div className="mt-[27px] md:mt-[34px]">
            <h3
            className="
                font-['Inter']
                text-[18px] font-[500]
                leading-[21px]
                text-[#1B223A]

                md:text-[24px]
                md:leading-[28px]
            "
            >
                One engine. All power.
            </h3>

            <p
            className="
                mt-[2px]
                font-['Inter']
                text-[16px] font-[300]
                leading-[18px]
                tracking-[-0.5px]
                text-[#1B223A]

                md:mt-0
                md:text-[24px]
                md:leading-[24px]
                md:tracking-[-1px]
            "
            >
                Infinite journeys without legacy limits or public cloud instability.
            </p>
        </div>
        <a
            href="#"
            className="
            group mt-[30px]
            flex h-[47px] w-[153px]
            items-center justify-center gap-[9px]
            rounded-[7px]
            border-2 border-[#1434CB]
            font-['Inter']
            text-[14px] font-[400]
            text-[#1434CB]
            hover:bg-[#1434CB]
            hover:text-white

            md:mt-[32px]
            md:h-[58px] md:w-[195px]
            md:gap-[12px]
            md:text-[17px]
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
        <div className="mt-[55px] md:mt-[63px]">
            <h3
                className="
                font-['Inter']
                md:text-[32px] font-[400]
                md:leading-[39px]
                text-[27px]
                leading-[31px]
                tracking-[-1px]
                text-[#1B223A]
                "
            >
                Shift the power differential.
            </h3>

            <p
            className="
                mt-[10px]
                max-w-[700px]
                font-['Inter']
                text-[16px] font-[300]
                leading-[19px]
                text-[#1B223A]

                md:mt-[12px]
                md:text-[20px]
                md:leading-[23px]
            "
            >
                Watch how i2c helps these visionaries outperform outdated banking and
                payments platforms to scale fast and modernize to last.
            </p>
            <div
            className="
            mt-[28px]
            flex gap-[12px]
            overflow-x-auto pb-[8px]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden

            md:mt-[34px]
            md:grid
            md:grid-cols-[1fr_1fr_1fr]
            md:gap-[18px]
            md:overflow-visible
            md:pb-0
            "
            >

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