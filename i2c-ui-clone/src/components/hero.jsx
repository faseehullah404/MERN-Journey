import { useEffect, useState } from "react"
import { ArrowUpRight, Circle } from "lucide-react"

import heroSlide1 from "../assets/Composable-Solutions.webp"
import heroSlide2 from "../assets/All-in-One-Platform.webp"


import heroSlide3 from "../assets/Trusted-Experience.webp"

const heroSlides = [
  {
    id: 1,
    image: heroSlide1,
    title: "Composable Solutions",
  },
  {
    id: 2,
    image: heroSlide2,
    title: "All-in-One Platform",
  },
  {
    id: 3,
    image: heroSlide3,
    title: "Trusted Experience",
  },
]
function Hero(){
    const [activeSlide, setActiveSlide] = useState(0)
    useEffect(() => {
        const sliderInterval = setInterval(() => {
            setActiveSlide((currentSlide) => {
            return (currentSlide + 1) % heroSlides.length
            })
        }, 4000)

        return () => {
            clearInterval(sliderInterval)
        }
    }, [])
    return (
        <section className="w-full overflow-hidden bg-white">
                <div   className="
                    mx-auto grid w-full grid-cols-1
                    px-[28px] pb-[55px]

                    md:min-h-[760px]
                    md:w-[1230px]
                    md:grid-cols-[642px_665px]
                    md:gap-[10px]
                    md:px-0 md:pb-0
                "
                >

                {/* Left column */}
                    <div className="relative z-10 pt-[10px] md:pt-[150px]">
                       <div className="flex items-end">
                            <h1
                                className="
                                    max-w-[300px]
                                    whitespace-normal
                                    font-['Inter']
                                    text-[40px] font-[500]
                                    leading-[0.88]
                                    tracking-[-3.4px]
                                    text-[#1B223A]

                                    md:max-w-none
                                    md:whitespace-nowrap
                                    md:text-[72px]
                                    md:leading-[0.98]
                                    md:tracking-[-7px]
                                "
                                >
                            Powered by innovation
                            </h1>

                            <Circle
                            aria-hidden="true"
                            className="
                            mb-[4px] ml-[3px]
                            h-[7px] w-[7px]
                            shrink-0
                            fill-[#FF7200] text-[#FF7200]
                            -translate-x-34

                            md:mb-[8px] md:ml-[6px]
                            md:h-[11px] md:w-[11px]
                            md:-translate-x-1
                            "
                            strokeWidth={0}
                            />
                        </div>

                        <div className="mt-[2px] flex items-end md:mt-[5px]">
                            <h1
                                className="
                                    whitespace-nowrap
                                    font-['Inter']
                                    text-[40px] font-[500]
                                    leading-[0.88]
                                    tracking-[-3.4px]
                                    text-[#1B223A]

                                    md:text-[72px]
                                    md:leading-[0.98]
                                    md:tracking-[-7px]
                                "
                                >
                            Driven by trust
                            </h1>

                            <Circle
                            aria-hidden="true"
                            className="
                            mb-[4px] ml-[3px]
                            h-[7px] w-[7px]
                            shrink-0
                            fill-[#FF7200] text-[#FF7200]

                            md:mb-[8px] md:ml-[6px]
                            md:h-[11px] md:w-[11px]
                            md:-translate-x-2
                            "
                            strokeWidth={0}
                            />
                        </div>
                        <div
                        className="
                            mt-[16px]
                            flex flex-wrap items-center
                            gap-x-[5px] gap-y-[2px]
                            font-['Inter']
                            text-[14px] font-[500]
                            leading-[19px]
                            text-[#1B223A]

                            md:mt-[28px]
                            md:flex-nowrap
                            md:gap-[11px]
                            md:text-[20px]
                            md:leading-[24px]
                        "
                        >
                            <span>Issuer Processing</span>

                            <Circle
                                aria-hidden="true"
                                className="
                                h-[4px] w-[4px]
                                shrink-0
                                fill-[#FF7200] text-[#FF7200]
                                md:h-[7px] md:w-[7px]
                                "
                                strokeWidth={0}
                            />

                            <span>Core Banking</span>

                            <Circle
                                aria-hidden="true"
                                className="
                                h-[4px] w-[4px]
                                shrink-0
                                fill-[#FF7200] text-[#FF7200]
                                md:h-[7px] md:w-[7px]
                                "
                                strokeWidth={0}
                            />

                            <span>Money Movement</span>
                        </div>
                        <p
                        className="
                            mt-[15px] w-full
                            font-['Inter']
                            text-[14px] font-[350]
                            leading-[18px]
                            text-[#1B223A]

                            md:mt-[22px]
                            md:max-w-[642px]
                            md:text-[18px]
                            md:leading-[24px]
                        "
                        >
                            i2c delivers bold innovation with rock-solid reliability to supercharge
                            your banking and payments. Our unified global platform, composable
                            building-block solutions and trusted ingenuity help you ditch the legacy
                            dinosaurs and modern daredevils, scale steady and accelerate profits with
                            ease.
                        </p>
                        <a
                            href="#"
                            className="
                            group mt-[26px]
                            flex h-[47px] w-[136px]
                            items-center justify-center
                            gap-[10px]
                            rounded-[7px]
                            bg-[#1434CB]
                            font-['Inter']
                            text-[14px] font-[300]
                            text-white

                            md:mt-[34px]
                            md:h-[58px] md:w-[168px]
                            md:gap-[12px]
                            md:text-[18px]
                            "
                            >
                            <span>Contact Us</span>

                            <span className="relative h-[16px] w-[16px] overflow-hidden md:h-[20px] md:w-[20px]">

                                {/* Pehla arrow: hover par upar chala jayega */}
                                <ArrowUpRight
                                className="
                                absolute left-0 top-0
                                h-[16px] w-[16px]
                                transition-transform duration-300 ease-out
                                group-hover:-translate-y-full
                                md:h-[20px] md:w-[20px]
                                "
                                strokeWidth={1.5}
                                />

                                {/* Doosra arrow: neeche se enter karega */}
                                <ArrowUpRight
                                className="
                                absolute left-0 top-0
                                h-[16px] w-[16px]
                                transition-transform duration-300 ease-out
                                group-hover:-translate-y-full
                                md:h-[20px] md:w-[20px]
                                "
                                strokeWidth={1.5}
                                />

                            </span>
                        </a>
                </div>

                {/* Right column */}
                <div
                className="
                    relative z-0
                    justify-self-center
                    pt-[40px]

                    md:justify-self-end
                    md:pl-[1px]
                    md:pt-[65px]
                "
                >
                   <div
                    className="
                    relative
                    h-[330px] w-[350px]
                    max-w-[calc(100vw-24px)]
                    bg-white

                    md:h-[520px]
                    md:w-[590px]
                    md:max-w-none
                    "
                    >

                        {heroSlides.map((slide, index) => {
                        let slideVisibility =
                            "pointer-events-none opacity-0"

                        if (activeSlide === index) {
                            slideVisibility =
                            "pointer-events-auto opacity-100"
                        }
                        return(
                            <div
                                key={slide.id}
                                className={`
                                    absolute inset-0
                                    transition-opacity duration-700 ease-in-out
                                    ${slideVisibility}
                                `}
                                >
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="h-full w-full object-contain"
                                />

                                <h2
                                className="
                                    absolute bottom-[29px] left-1/2
                                    -translate-x-1/2
                                    whitespace-nowrap
                                    font-['Inter']
                                    text-[17px] font-[500]
                                    leading-[20px]
                                    tracking-[-1px]
                                    text-white

                                    md:bottom-[48px]
                                    md:text-[32px]
                                    md:leading-[34px]
                                    md:tracking-[-3px]
                                "
                                >
                                    {slide.title}
                                </h2>
                            </div>
                        )
                    })}
                    
                    </div>
                    <div className="flex items-center justify-center gap-[6px] pt-[7px] md:pt-1">
                        {heroSlides.map((slide, index) => {
                            let dotStyle =
                            "h-[7px] w-[7px] rounded-full bg-[#C9DDF4]"

                            if (activeSlide === index) {
                            dotStyle =
                                "h-[7px] w-[20px] rounded-full bg-[#1434CB]"
                            }

                            return (
                            <button
                                key={slide.id}
                                type="button"
                                aria-label={`Show ${slide.title}`}
                                onClick={() => setActiveSlide(index)}
                                className={`
                                ${dotStyle}
                                border-0 p-0
                                transition-all duration-300
                                `}
                            />
                            )
                        })}
                    </div>
                </div>

                </div>
        </section>
    )
}
export default Hero