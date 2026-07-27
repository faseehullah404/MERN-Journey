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
                <div className="mx-auto grid min-h-[760px] w-[1230px] grid-cols-[642px_665px] gap-[32px]">

                {/* Left column */}
                    <div className="pt-[150px] relative z-10">
                       <div className="flex items-end">
                            <h1 className="whitespace-nowrap font-['Inter'] text-[72px] font-[500] leading-[0.98] tracking-[-3px] text-[#1B223A]">
                            Powered by innovation
                            </h1>

                            <Circle
                            aria-hidden="true"
                            className="mb-[8px] ml-[6px] h-[11px] w-[11px] shrink-0 fill-[#FF7200] text-[#FF7200] -translate-x-1"
                            strokeWidth={0}
                            />
                        </div>

                        <div className="mt-[5px] flex items-end">
                            <h1 className="whitespace-nowrap font-['Inter'] text-[72px] font-[500] leading-[0.98] tracking-[-3px] text-[#1B223A]">
                            Driven by trust
                            </h1>

                            <Circle
                            aria-hidden="true"
                            className="mb-[8px] ml-[6px] h-[11px] w-[11px] shrink-0 fill-[#FF7200] text-[#FF7200] -translate-x-2"
                            strokeWidth={0}
                            />
                        </div>
                        <div className="mt-[28px] flex items-center gap-[11px] font-['Inter'] text-[20px] font-[500] leading-[24px] text-[#1B223A]">
                            <span>Issuer Processing</span>

                            <Circle
                                aria-hidden="true"
                                className="h-[7px] w-[7px] fill-[#FF7200] text-[#FF7200]"
                                strokeWidth={0}
                            />

                            <span>Core Banking</span>

                            <Circle
                                aria-hidden="true"
                                className="h-[7px] w-[7px] fill-[#FF7200] text-[#FF7200]"
                                strokeWidth={0}
                            />

                            <span>Money Movement</span>
                        </div>
                        <p className="mt-[22px] max-w-[642px] font-['Inter'] text-[18px] font-[350] leading-[24px] text-[#1B223A]">
                            i2c delivers bold innovation with rock-solid reliability to supercharge
                            your banking and payments. Our unified global platform, composable
                            building-block solutions and trusted ingenuity help you ditch the legacy
                            dinosaurs and modern daredevils, scale steady and accelerate profits with
                            ease.
                        </p>
                        <a
                            href="#"
                            className="group mt-[34px] flex h-[58px] w-[168px] items-center justify-center gap-[12px] rounded-[7px] bg-[#1434CB] font-['Inter'] text-[18px] font-[400] text-white"
                            >
                            <span>Contact Us</span>

                            <span className="relative h-[20px] w-[20px] overflow-hidden">

                                {/* Pehla arrow: hover par upar chala jayega */}
                                <ArrowUpRight
                                className="absolute left-0 top-0 h-[20px] w-[20px] transition-transform duration-300 ease-out group-hover:-translate-y-full"
                                strokeWidth={1.5}
                                />

                                {/* Doosra arrow: neeche se enter karega */}
                                <ArrowUpRight
                                className="absolute left-0 top-full h-[20px] w-[20px] transition-transform duration-300 ease-out group-hover:-translate-y-full"
                                strokeWidth={1.5}
                                />

                            </span>
                        </a>
                </div>

                {/* Right column */}
                <div className="relative z-0 justify-self-end pt-[65px] pl-[16px]">
                   <div className="relative h-[553px] w-[665px] overflow-hidden bg-white">

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
                                    className="h-[490px] w-[596px] object-contain"
                                />

                                <h2 className="absolute bottom-[28px] left-1/2 -translate-x-1/2 whitespace-nowrap font-['Inter'] text-[28px] font-[400] leading-[34px] text-white">
                                    {slide.title}
                                </h2>
                            </div>
                        )
                    })}
                    </div>
                </div>

                </div>
        </section>
    )
}
export default Hero