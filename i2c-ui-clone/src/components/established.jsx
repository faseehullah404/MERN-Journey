import img1 from "../assets/i2c-Digital-Banking-Platform-Excellence-and-Agility.webp"
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


function Established() {
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

            const endElement = document.getElementById(
                "innovation-banner-start"
            )

            if (!cardElement || !endElement) {
                return
            }

            let animationFrameId = null

            function updateBottomNav() {
                const cardPosition =
                cardElement.getBoundingClientRect()

                const endPosition =
                endElement.getBoundingClientRect()

                const viewportHeight = window.innerHeight

                // Established banner required position par aa gaya
                const hasReachedTrigger =
                cardPosition.top <= viewportHeight * 0.27

                // Nav tab tak visible rahe jab tak blue
                // Innovation banner screen ke bottom par na aa jaye
                const hasNotReachedInnovationBanner =
                endPosition.top > viewportHeight * 0.7

                const shouldShowNav =
                hasReachedTrigger &&
                hasNotReachedInnovationBanner

                setIsBottomNavVisible(shouldShowNav)

                animationFrameId = null
            }

            function handleScroll() {
                if (animationFrameId !== null) {
                return
                }

                animationFrameId =
                requestAnimationFrame(updateBottomNav)
            }

            updateBottomNav()

            window.addEventListener("scroll", handleScroll, {
                passive: true,
            })

            window.addEventListener("resize", handleScroll)

            return () => {
                window.removeEventListener(
                "scroll",
                handleScroll
                )

                window.removeEventListener(
                "resize",
                handleScroll
                )

                if (animationFrameId !== null) {
                cancelAnimationFrame(animationFrameId)
                }
            }
        }, [])
  return (
<section className="w-full py-[14px] md:py-[80px]">

  {/* Main established banner */}
  <div
    id="established-nav-start"
    ref={cardRef}
    className="
      relative mx-[24px]
      h-[505px] w-auto
      overflow-hidden rounded-[15px]

      md:mx-auto
      md:h-[565px] md:w-[1230px]
      md:rounded-[26px]
    "
  >
    <img
      src={img1}
      alt="Digital banking platform excellence and agility"
      className="
        absolute inset-0
        h-full w-full
        object-cover object-center
      "
    />

    {/* Animated text overlay */}
    <div
      className="
        absolute inset-0
        flex items-end justify-center
        pb-[68px]

        md:items-center
        md:pb-0
      "
    >
      <div
        className="
          w-full px-[14px]
          text-center
          will-change-transform

          md:px-0
        "
        style={{
          opacity: textProgress,
          transform: `translateY(${(1 - textProgress) * 110}px)`,
        }}
      >
        {/* First heading */}
        <h2
          className="
            mx-auto max-w-[290px]
            whitespace-normal
            text-center
            font-['Inter']
            text-[40px] font-[200]
            leading-[1.03]
            tracking-[-2.7px]
            text-white

            md:max-w-none
            md:whitespace-nowrap
            md:text-[90px]
            md:leading-[0.98]
            md:tracking-[-9px]
          "
        >
          Established for excellence
          <Circle
            aria-hidden="true"
            className="
              mb-[3px] ml-[2px]
              inline-block
              h-[7px] w-[7px]
              fill-[#FF7200]
              text-[#FF7200]

              md:mb-[8px]
              md:ml-[6px]
              md:h-[13px]
              md:w-[13px]
            "
            strokeWidth={0}
          />
        </h2>

        {/* Second heading */}
        <h2
          className="
            mx-auto mt-[7px]
            max-w-[270px]
            whitespace-normal
            text-center
            font-['Inter']
            text-[40px] font-[200]
            leading-[1.03]
            tracking-[-2.7px]
            text-white

            md:mt-[10px]
            md:max-w-none
            md:whitespace-nowrap
            md:text-[90px]
            md:leading-[0.98]
            md:tracking-[-6px]
          "
        >
          Adapted for agility
          <Circle
            aria-hidden="true"
            className="
              mb-[3px] ml-[2px]
              inline-block
              h-[7px] w-[7px]
              fill-[#FF7200]
              text-[#FF7200]

              md:mb-[8px]
              md:ml-[6px]
              md:h-[13px]
              md:w-[13px]
            "
            strokeWidth={0}
          />
        </h2>
      </div>
    </div>
  </div>

  {/* Fixed bottom navigation */}
  <div
    className={`
      fixed bottom-[15px] left-1/2 z-40
      -translate-x-1/2
      transition-all duration-500 ease-out

      md:bottom-[18px]

      ${
        isBottomNavVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-[110px] opacity-0"
      }
    `}
  >
    <nav
      aria-label="Established section navigation"
      className="
        flex h-[52px]
        w-[calc(100vw-34px)]
        items-center justify-between
        gap-0
        rounded-full
        border-[2px] border-[#4A426D]
        bg-[#202B59]
        px-[7px]
        shadow-[0_10px_24px_rgba(27,34,58,0.25)]

        md:h-[56px]
        md:w-[479px]
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
              flex flex-1
              items-center justify-center
              rounded-full
              px-[3px] py-[7px]

              font-['Inter']
              text-[14px] font-[300]
              leading-[18px]
              tracking-[-0.6px]
              text-white

              transition-colors duration-200
              hover:bg-[#041145]
              hover:font-[400]

              md:flex-none
              md:px-4 md:py-2
              md:text-[20px]
              md:leading-[22px]
              md:tracking-[-1.5px]
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

export default Established

