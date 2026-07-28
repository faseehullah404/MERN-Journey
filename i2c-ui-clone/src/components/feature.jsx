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
const [isBottomNavVisible, setIsBottomNavVisible] = useState(false)

function Efficiency() {

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
            const cardPosition = cardElement.getBoundingClientRect()
            const viewportHeight = window.innerHeight

            const hasReachedTrigger =
            cardPosition.top <= viewportHeight * 0.32

            const hasNotCrossedCardEnd =
            cardPosition.bottom >= viewportHeight * 0.18

            const shouldShowNav =
            hasReachedTrigger && hasNotCrossedCardEnd

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
    <section className="w-full py-[80px]">
        <div  ref={cardRef}
            className="relative mx-auto h-[565px] w-[1230px] overflow-hidden rounded-[26px]">
            <img
                src={img1}
                alt="Customer holding a payment card"
                className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div   className="text-center will-change-transform"
                            style={{
                                opacity: textProgress,
                                transform: `translateY(${
                                (1 - textProgress) * 110
                                }px)`,
                            }}>
                        <div className="flex items-end justify-center ">
                            <h2 className="whitespace-nowrap font-['Inter'] text-[90px] font-[200] leading-[0.98] text-white tracking-[-9px] ">
                                Engineered for efficiency
                            </h2>

                            <Circle
                                aria-hidden="true"
                                className="mb-[7px] ml-[7px] h-[13px] w-[13px] shrink-0 fill-[#FF7200] text-[#FF7200] -translate-x-2"
                                strokeWidth={0}
                            />
                            
                        </div>
                        <div className="mt-[10px] flex items-end justify-center">
                                <h2
                                    className="whitespace-nowrap font-['Inter'] text-[90px] font-[200] leading-[0.98] text-white tracking-[-6px]">
                                    Streamlined for scalability
                                </h2>

                                <Circle
                                    aria-hidden="true"
                                    className="mb-[7px] ml-[7px] h-[11px] w-[11px] shrink-0 fill-[#FF7200] text-[#FF7200] -translate-x-2"
                                    strokeWidth={0}
                                />
                        </div>
                    </div>
                </div>
 
        </div>

    </section>
  )
}

export default Efficiency

