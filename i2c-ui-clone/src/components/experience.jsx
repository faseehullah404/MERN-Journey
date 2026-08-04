import { useEffect, useState } from "react"
import { ArrowUpRight, Circle, Play  } from "lucide-react"

import customerCentric from "../assets/Proven-Payments-Platform-Experience.webp"
import integratedPlatform from "../assets/Agile-Payment-Platform.webp"
import reliablePlatform from "../assets/Trusted-Banking-and-Payments-Platform.webp"
import overview1 from "../assets/overview7.png"
import overview2 from "../assets/overview8.png"
import overview3 from "../assets/overview9.png"
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
    image: customerCentric,
    title: "Comprehensive",
    metric: "1600+",
    description: [
      "Global Expert Supporting",
      "Client Worldwide"
    ],
  },
  {
    id: 2,
    image: integratedPlatform,
    title: "Configration",
    metric: "2x",
    description: [
      "Monthly Software",
      "Release for Rapid Market",
      "Delivery"
    ],
  },
  {
    id: 3,
    image: reliablePlatform,
    title: "Innovative",
    metric: "25+",
    description: [
      "Years of Operation in",
      "Banking and Payments",
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

function Experience() {
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
      px-[22px]

      md:w-[1230px]
      md:grid-cols-[430px_1fr]
      md:gap-x-[70px]
      md:gap-y-0
      md:px-0
    "
  >
    {/* ================================================= */}
    {/* TOP CONTENT                                      */}
    {/* Mobile: sabse pehle                              */}
    {/* Desktop: right column                            */}
    {/* ================================================= */}

    <div
      className="
        order-1 min-w-0
        translate-x-0

        md:col-start-2
        md:row-start-1
        md:translate-x-6
      "
    >
      {/* Main heading */}
      <h2
        className="
          max-w-[330px]
          font-['Inter']
          text-[31px] font-[400]
          leading-[1.01]
          tracking-[-2px]
          text-[#1B223A]

          md:max-w-none
          md:text-[48px]
          md:leading-[1.15]
          md:tracking-[-3px]
        "
      >
        Decades of experience drive

        <br className="hidden md:block" />

        innovation and speed to market

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

      {/* Benefit cards */}
      <div
        className="
          -mr-[22px] mt-[30px]
          flex gap-[13px]
          overflow-x-auto
          pb-[8px] pr-[22px]
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
                flex h-[175px]
                min-w-[185px]
                flex-col justify-between
                rounded-[9px]
                bg-[#F7FAFD]
                px-[22px] py-[20px]
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

      {/* Supporting copy */}
      <div className="mt-[28px] md:mt-[34px]">
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
          Responsive handling. Guided navigation.
        </h3>

        <p
          className="
            mt-[1px]
            max-w-[320px]
            font-['Inter']
            text-[15px] font-[300]
            leading-[19px]
            tracking-[-0.4px]
            text-[#1B223A]

            md:mt-0
            md:max-w-none
            md:text-[24px]
            md:leading-[24px]
            md:tracking-[-1px]
          "
        >
          Built on a foundation of stability and for what's next.
        </p>
      </div>

      {/* Learn More button */}
      <a
        href="#"
        className="
          group mt-[30px]
          flex h-[47px] w-[136px]
          items-center justify-center
          gap-[9px]
          rounded-[7px]
          border-2 border-[#1434CB]

          font-['Inter']
          text-[13px] font-[500]
          tracking-[-0.4px]
          text-[#1434CB]

          hover:bg-[#1434CB]
          hover:text-white

          md:mt-[32px]
          md:h-[58px]
          md:w-[170px]
          md:gap-[12px]
          md:text-[18px]
          md:tracking-[-1px]
        "
      >
        <span>Learn More</span>

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

    {/* ================================================= */}
    {/* TRIANGLE SLIDER                                  */}
    {/* Mobile: button ke baad                           */}
    {/* Desktop: left sticky column                      */}
    {/* ================================================= */}

    <aside
      className="
        order-2
        static mt-[8px]
        w-full self-start

        md:col-start-1
        md:row-start-1
        md:row-span-2
        md:sticky
        md:top-[80px]
        md:mt-7
      "
    >
      {/* Triangle */}
      <div
        className="
          mx-auto w-full
          max-w-[330px]

          md:mx-0
          md:max-w-none
        "
      >
        <div
          className="
            relative h-[315px]
            w-full

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
                  transition-opacity
                  duration-700 ease-in-out
                  ${slideStyle}
                `}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="
                    h-[285px] w-full
                    object-contain

                    md:h-[318px]
                    md:w-[383px]
                  "
                />

                <h3
                  className="
                    absolute bottom-[57px]
                    left-1/2
                    -translate-x-1/2
                    whitespace-nowrap

                    font-['Inter']
                    text-[25px] font-[500]
                    leading-[28px]
                    text-white

                    md:bottom-[73px]
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

      {/* Metrics */}
      <div
        className="
          relative mx-auto
          mt-[4px] w-[285px]
          pl-[28px]

          md:mx-0
          md:-translate-y-3
          md:w-auto
          md:translate-x-20
        "
      >
        {/* Moving dot */}
        <span
          aria-hidden="true"
          className="
            absolute left-0
            h-[9px] w-[9px]
            translate-y-10
            rounded-full
            bg-[#1434CB]
            transition-transform
            duration-500 ease-out
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
                border-0 bg-transparent
                p-0 text-left
              "
            >
              <span
                className={`
                  block font-['Inter']
                  text-[34px] font-[400]
                  leading-[40px]
                  tracking-[-4px]
                  transition-colors duration-300

                  md:text-[38px]
                  md:leading-[44px]
                  md:tracking-[-5px]

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
                className={`
                  mt-[5px] block
                  font-['Inter']
                  text-[17px] font-[300]
                  leading-[20px]
                  tracking-[-0.7px]
                  transition-colors duration-300

                  md:text-[20px]
                  md:leading-[23px]
                  md:tracking-[-1px]

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

    {/* ================================================= */}
    {/* LOWER STORY CONTENT                              */}
    {/* Mobile: triangle ke baad                         */}
    {/* Desktop: right column mein                      */}
    {/* ================================================= */}

    <div
      className="
        order-3 min-w-0

        md:col-start-2
        md:row-start-2
        md:mt-[63px]
        md:translate-x-6
      "
    >
      <h3
        className="
          font-['Inter']
          text-[27px] font-[400]
          leading-[31px]
          tracking-[-1px]
          text-[#1B223A]

          md:text-[32px]
          md:leading-[39px]
        "
      >
        Shift to the front of the pack.
      </h3>

      <p
        className="
          mt-[10px]
          max-w-[700px]
          font-['Inter']
          text-[15px] font-[300]
          leading-[19px]
          text-[#1B223A]

          md:mt-[12px]
          md:text-[20px]
          md:leading-[23px]
        "
      >
        Watch how i2c helps these visionaries outmaneuver competitors in an
        increasingly crowded banking and payments race.
      </p>

      {/* Story cards */}
      <div
        className="
          -mr-[22px] mt-[28px]
          flex gap-[13px]
          overflow-x-auto
          pb-[8px] pr-[22px]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden

          md:mr-0
          md:mt-[34px]
          md:grid
          md:grid-cols-[1fr_1fr_1fr]
          md:gap-[18px]
          md:overflow-visible
          md:pb-0
          md:pr-0
        "
      >
        {storyCards.map((card) => {
          return (
            <div
              key={card.id}
              className="
                flex h-[250px]
                min-w-[250px]
                flex-col justify-between
                rounded-[18px]
                px-[24px] py-[25px]

                md:h-[277px]
                md:min-w-0
              "
              style={{
                backgroundColor: card.background,
              }}
            >
              <p
                className="
                  font-['Inter']
                  text-[18px] font-[300]
                  leading-[24px]
                  text-[#1B223A]
                "
              >
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
        <div
          className="
            relative h-[250px]
            min-w-[250px]
            overflow-hidden
            rounded-[18px]
            bg-[#1B223A]

            md:h-[277px]
            md:min-w-0
          "
        >
          <img
            src={testimonialImage}
            alt="Customer testimonial"
            className="
              absolute inset-0
              h-full w-full
              object-cover
            "
          />

          <div
            className="
              absolute inset-x-0
              bottom-0 h-[46%]
              bg-gradient-to-t
              from-black
              via-black/70
              to-transparent
            "
          />

          <img
            src={testimonialLogo}
            alt=""
            className="
              absolute left-[16px] top-[16px]
              h-[42px] w-[78px]
              rounded-[7px]
              bg-white
              object-contain p-[7px]
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute bottom-[86px] left-[16px]
              flex h-[40px] w-[40px]
              items-center justify-center
              rounded-full
              bg-[#FF7900]
              text-white
            "
          >
            <Play
              className="ml-[2px] h-[16px] w-[16px]"
              fill="currentColor"
              strokeWidth={0}
            />
          </div>

          <div
            className="
              absolute bottom-[16px]
              left-[16px]
              text-white
            "
          >
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
</section>
    )
    
  
}

export default Experience