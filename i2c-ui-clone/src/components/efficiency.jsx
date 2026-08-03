import img1 from "../assets/i2c-Digital-Banking-and-Payments-Platform.webp"
import img2 from "../assets/Customer-Centric-Banking-Solutions.webp"
import img3 from "../assets/Integrated-Financial-Platform.webp"
import img4 from "../assets/Reliable-Payment-Platform.webp"
import { Circle } from "lucide-react"
import { useEffect, useRef, useState } from "react"
const efficiencyNavItems = [
  "News",
  "Events",
  "Awards",
  "Insights",
]


function Efficiency() {
    const [isBottomNavVisible, setIsBottomNavVisible] = useState(false)
    const [textProgress, setTextProgress] = useState(0)
    const cardRef = useRef(null)
    

    useEffect(() => {
        const cardElement = cardRef.current

        if (!cardElement) {
            return
        }

        let animationFrameId = null

        function updateTextAnimation() {
            const cardPosition = cardElement.getBoundingClientRect()
            const viewportHeight = window.innerHeight

            const animationStart = viewportHeight * 0.48
            const animationEnd = viewportHeight * 0.08

            let progress =
            (animationStart - cardPosition.top) /
            (animationStart - animationEnd)

            progress = Math.min(Math.max(progress, 0), 1)

            const easedProgress =
            progress * progress * (3 - 2 * progress)

            setTextProgress(easedProgress)

            animationFrameId = null
        }

        function handleScroll() {
            if (animationFrameId !== null) {
            return
            }

            animationFrameId = requestAnimationFrame(
            updateTextAnimation
            )
        }

        updateTextAnimation()

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        })

        window.addEventListener("resize", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("resize", handleScroll)

            if (animationFrameId !== null) {
            cancelAnimationFrame(animationFrameId)
            }
        }
        }, [])

        useEffect(() => {
        const cardElement = cardRef.current

        if (!cardElement) {
            return
        }

        let animationFrameId = null

        function updateBottomNav() {
            const startPosition =
                cardElement.getBoundingClientRect()

            const endElement =
                document.getElementById("differentiation-nav-start")

            if (!endElement) {
                animationFrameId = null
                return
            }

            const endPosition =
                endElement.getBoundingClientRect()

            const viewportHeight = window.innerHeight

            // Efficiency card required position tak aaye
            const hasReachedStart =
                startPosition.top <= viewportHeight * 0.32

            const hasNotReachedDifferentiation =
                endPosition.top > viewportHeight

            const shouldShowNav =
                hasReachedStart && hasNotReachedDifferentiation

            setIsBottomNavVisible(shouldShowNav)

            animationFrameId = null
            }
        function handleScroll() {
            if (animationFrameId !== null) {
            return
            }

            animationFrameId = requestAnimationFrame(
            updateBottomNav
            )
        }

        updateBottomNav()

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        })

        window.addEventListener("resize", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("resize", handleScroll)

            if (animationFrameId !== null) {
            cancelAnimationFrame(animationFrameId)
            }
        }
        }, [])
  return (
    <section className="w-full py-[14px] md:py-[80px]">
        <div
        ref={cardRef}
        className="
            relative mx-[23px]
            h-[505px] w-auto
            overflow-hidden rounded-[16px]

            md:mx-auto
            md:h-[565px] md:w-[1230px]
            md:rounded-[26px]
        "
        >
            <img
                src={img1}
                alt="Customer holding a payment card"
                className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div
                className="
                    absolute inset-0
                    flex items-end justify-center
                    pb-[72px]

                    md:items-center
                    md:pb-0
                "
                >
                    <div   className="text-center will-change-transform"
                            style={{
                                opacity: textProgress,
                                transform: `translateY(${
                                (1 - textProgress) * 110
                                }px)`,
                            }}>
                        <div className="flex items-end justify-center ">
                            <h2
                            className="
                                max-w-[280px]
                                whitespace-normal
                                text-center
                                font-['Inter']
                                text-[40px] font-[200]
                                leading-[1.05]
                                tracking-[-2.4px]
                                text-white

                                md:max-w-none
                                md:whitespace-nowrap
                                md:text-[90px]
                                md:leading-[0.98]
                                md:tracking-[-9px]
                            "
                            >
                                Engineered for efficiency
                            </h2>

                            <Circle
                                aria-hidden="true"
                                className="
                                mb-[4px] ml-[3px]
                                h-[7px] w-[7px]
                                shrink-0
                                fill-[#FF7200] text-[#FF7200]

                                md:mb-[7px] md:ml-[7px]
                                md:h-[13px] md:w-[13px]
                                md:-translate-x-2
                                "
                                strokeWidth={0}
                            />
                            
                        </div>
                        <div className="mt-[6px] flex items-end justify-center md:mt-[10px]">
                                <h2
                                className="
                                    max-w-[290px]
                                    whitespace-normal
                                    text-center
                                    font-['Inter']
                                    text-[40px] font-[200]
                                    leading-[1.05]
                                    tracking-[-2.4px]
                                    text-white

                                    md:max-w-none
                                    md:whitespace-nowrap
                                    md:text-[90px]
                                    md:leading-[0.98]
                                    md:tracking-[-6px]
                                "
                                >
                                    Streamlined for scalability
                                </h2>

                                <Circle
                                    aria-hidden="true"
                                    className="
                                    mb-[4px] ml-[3px]
                                    h-[7px] w-[7px]
                                    shrink-0
                                    fill-[#FF7200] text-[#FF7200]

                                    md:mb-[7px] md:ml-[7px]
                                    md:h-[11px] md:w-[11px]
                                    md:-translate-x-2
                                    "
                                    strokeWidth={0}
                                />
                        </div>
                    </div>
                </div>
 
        </div>
            <div
            className={`
                fixed bottom-[15px] left-1/2 z-40
                md:bottom-[18px]
                -translate-x-1/2
                transition-all duration-500 ease-out
                ${
                isBottomNavVisible
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-[110px] opacity-0"
                }
            `}
            >
            <nav
                aria-label="Efficiency section navigation"
                className="
                flex h-[52px]
                w-[calc(100vw-32px)]
                items-center justify-between
                gap-0
                rounded-full
                border-[2px] border-[#4A426D]
                bg-[#202B59]
                px-[7px]
                shadow-[0_10px_24px_rgba(27,34,58,0.25)]

                md:h-[56px] md:w-[479px]
                md:justify-start
                md:gap-[28px]
                md:border-[3px]
                md:px-[20px]
                "
            >
                {efficiencyNavItems.map((item) => {
                return (
                    <a
                    key={item}
                    href="#"
                    className="
                        font-['Inter']
                        text-[20px] font-[300] leading-[22px]
                        text-white tracking-[-1.5px]
                        transition-colors duration-200
                         rounded-full  hover:bg-[#041145] py-2 px-4 hover:font-400
                    "
                    >
                    {item}
                    </a>
                )
                })}
            </nav>
        </div>
        
    </section>
  )
}

export default Efficiency

