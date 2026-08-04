import { useEffect, useState } from "react"
import { ArrowUpRight, Circle, Play  } from "lucide-react"

import customerCentric from "../assets/Configurable-Payments-Platform.webp"
import integratedPlatform from "../assets/Integrated-Financial-Platform.webp"
import reliablePlatform from "../assets/Innovative-Financial-Platform.webp"
import overview1 from "../assets/overview4.png"
import overview2 from "../assets/overview5.png"
import overview3 from "../assets/overview6.png"
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
    title: "Comprehensive",
    metric: "300+",
    description: [
      "Integrated Banking and",
      "Payments APIs"
    ],
  },
  {
    id: 2,
    image: customerCentric,
    title: "Configration",
    metric: "100k",
    description: [
      "Pre-coded Composible",
      "Building Block Solutions",
    ],
  },
  {
    id: 3,
    image: integratedPlatform,
    title: "Innovative",
    metric: "1.5 Million",
    description: [
      "Research Hours/Year",
      "30% Dedicated to R&D",
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

function Comprehensive() {
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
    
    
    <section
  className="
    mt-[22px] w-full
    overflow-x-hidden
    bg-white pb-[100px]

    md:mt-11
    md:pb-[120px]
  "
>
  <div
    className="
      mx-auto grid w-full
      grid-cols-1
      items-start gap-y-[55px]
      px-[29px]

      md:w-[1230px]
      md:grid-cols-[1fr_430px]
      md:gap-x-[70px]
      md:gap-y-0
      md:px-0
    "
  >
    {/* ================================================= */}
    {/* TOP CONTENT                                      */}
    {/* Mobile: first section                            */}
    {/* Desktop: left column                             */}
    {/* ================================================= */}

    <div
      className="
        order-1 min-w-0
        translate-x-0

        md:col-start-1
        md:row-start-1
        md:translate-x-[24px]
      "
    >
      {/* Main heading */}
      <div className="min-w-0">
        <h2
          className="
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
          Comprehensive, composable
          <br className="hidden md:block" />{" "}
          solutions that quickly respond to the
          <br className="hidden md:block" />{" "}
          unexpected
          <Circle
            aria-hidden="true"
            className="
              mb-[3px] ml-[2px]
              inline-block
              h-[5px] w-[5px]
              fill-[#FF7200]
              text-[#FF7200]

              md:mb-[5px]
              md:ml-[5px]
              md:h-[7px]
              md:w-[7px]
            "
            strokeWidth={0}
          />
        </h2>
      </div>

      {/* Benefit cards */}
      <div
        className="
          -mr-[29px] mt-[29px]
          flex gap-[13px]
          overflow-x-auto
          pb-[8px] pr-[29px]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden

          md:mr-0
          md:mt-[35px]
          md:grid
          md:grid-cols-3
          md:gap-[18px]
          md:overflow-visible
          md:pb-0
          md:pr-0
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
                rounded-[8px]
                bg-[#F7FAFD]
                px-[22px] py-[19px]
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
                  h-[35px] w-[35px]
                  object-contain

                  md:h-[45px]
                  md:w-[45px]
                "
              />

              <p
                className="
                  font-['Inter']
                  text-[14px] font-[400]
                  leading-[17px]
                  text-[#1B223A]

                  md:-translate-y-4
                  md:text-[20px]
                  md:leading-[23px]
                "
              >
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

      {/* All speed text */}
      <div className="mt-[27px] md:mt-[34px]">
        <h3
          className="
            font-['Inter']
            text-[17px] font-[500]
            leading-[21px]
            text-[#1B223A]

            md:text-[24px]
            md:leading-[28px]
          "
        >
          All speed. No limits.
        </h3>

        <p
          className="
            mt-[1px]
            font-['Inter']
            text-[15px] font-[300]
            leading-[18px]
            tracking-[-0.4px]
            text-[#1B223A]

            md:mt-0
            md:text-[24px]
            md:leading-[24px]
            md:tracking-[-1px]
          "
        >
          Fuel faster outcomes with the platform built for nonstop innovation
          and guaranteed reliability.
        </p>
      </div>

      {/* See How It Works button */}
      <a
        href="#"
        className="
          group mt-[31px]
          flex h-[47px] w-[171px]
          items-center justify-center
          gap-[10px]
          rounded-[7px]
          border-2 border-[#1434CB]
          px-2

          font-['Inter']
          text-[13px] font-[500]
          tracking-[-0.5px]
          text-[#1434CB]

          hover:bg-[#1434CB]
          hover:text-white

          md:mt-[32px]
          md:h-[58px]
          md:w-[210px]
          md:gap-[12px]
          md:text-[18px]
          md:tracking-[-1px]
        "
      >
        <span>See How It Works</span>

        <span
          className="
            relative h-[16px] w-[16px]
            overflow-hidden

            md:h-[19px]
            md:w-[19px]
          "
        >
          <ArrowUpRight
            className="
              absolute left-0 top-0
              h-[16px] w-[16px]
              transition-transform duration-300
              group-hover:-translate-y-full

              md:h-[19px]
              md:w-[19px]
            "
            strokeWidth={1.5}
          />

          <ArrowUpRight
            className="
              absolute left-0 top-full
              h-[16px] w-[16px]
              transition-transform duration-300
              group-hover:-translate-y-full

              md:h-[19px]
              md:w-[19px]
            "
            strokeWidth={1.5}
          />
        </span>
      </a>
    </div>

            <aside className="sticky top-[80px] self-start mt-10">
            <div className="translate-x-25">
            <div className="relative h-[372px] w-[390px] ">

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
                        className="h-[318px] w-[383px] object-contain"
                    />

                    <h3
                        className="
                        absolute bottom-[73px] left-1/2
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
        <div className="relative -translate-y-3 pl-[28px] translate-x-45 ">

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
    </div>
    </section>
    )
    
  
}

export default Comprehensive