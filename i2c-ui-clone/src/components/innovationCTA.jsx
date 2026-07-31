import { ArrowUpRight, Circle } from "lucide-react"

import bannerBg from "../assets/awards-bg-md1.webp"
import awardImage from "../assets/award-leading-vendor-1920.webp"

function InnovationCTA(){
    return(
        <section className="w-full bg-white pb-[100px] pt-[130px]">
            <div className="mx-auto w-[1230px]">

                <div className="relative h-[150px] w-full">

                    {/* Sirf background clipped hoga */}
                    <div className="absolute inset-0 overflow-hidden rounded-[24px]">
                        <img
                        src={bannerBg}
                        alt=""
                        className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Award banner se bahar nikal sakta hai */}
                    <img
                        src={awardImage}
                        alt="Celent leading vendor award"
                        className="
                        absolute bottom-0 left-[3px] z-20
                        h-[170px] w-[205px]
                        object-contain
                        "
                    />

                    {/* Existing text */}
                    <p className="absolute left-[210px] top-1/2 z-10 -translate-y-1/2 text-white text-[32px] font-['Inter'] font-extralight leading-[35px] tracking-[-2px]">
                        i2c named "Leading Vendor" in Celent Card Issuing
                        <br />
                        and Processing Solutions Report
                        <span className="text-[#FF7200]">.</span>
                    </p>

                    <a
                        href="#"
                        className="
                            group absolute right-[42px] top-1/2 z-10
                            flex h-[63px] w-[180px]
                            -translate-y-1/2 items-center justify-center
                            gap-[14px] rounded-[9px]
                            border-2 border-white
                            font-['Inter'] text-[18px] font-[500]
                            text-white
                            transition-colors duration-300
                            hover:bg-white hover:text-black
                        "
                        >
                        <span>Read More</span>

                        <span className="relative h-[19px] w-[19px] overflow-hidden">
                            <ArrowUpRight
                            className="
                                absolute left-0 top-0
                                h-[19px] w-[19px]
                                hover:bg-black
                               
                            "
                            strokeWidth={1.5}
                            />

                            
                        </span>
                    </a>
                </div>
                <div className="flex min-h-[520px] flex-col items-center pt-[135px] text-center">

                {/* Main heading */}
                <div className="flex items-end justify-center">
                    <h2
                    className="
                        whitespace-nowrap
                        font-['Inter']
                        text-[68px] font-[500]
                        leading-[1]
                        tracking-[-5.5px]
                        text-[#1B223A]
                    "
                    >
                    Let's power innovation together
                    </h2>

                    <Circle
                    aria-hidden="true"
                    className="
                        mb-[8px] 
                        h-[12px] w-[12px]
                        shrink-0
                        fill-[#FF7200]
                        text-[#FF7200]
                        left-0
                    "
                    strokeWidth={0}
                    />
                </div>

                {/* Supporting text */}
                <p
                    className="
                    mt-[55px]
                    max-w-[790px]
                    font-['Inter']
                    text-[28px] font-[400]
                    leading-[31px]
                    tracking-[-2.0px]
                    text-[#1B223A]
                    "
                >
                    Say goodbye to outdated systems and risky leaps and move to a
                    <br />
                    powerful platform and best-in-class solutions today.
                </p>

                {/* Button */}
                <a
                    href="#"
                    className="
                    group mt-[65px]
                    flex h-[60px] w-[177px]
                    items-center justify-center
                    gap-[14px]
                    rounded-[8px]
                    bg-[#1434CB]
                    font-['Inter']
                    text-[18px] font-[500]
                    text-white
                    tracking-[-1px]
                    "
                >
                    <span>Get Started</span>

                    <span className="relative h-[20px] w-[20px] overflow-hidden">
                    <ArrowUpRight
                        className="
                        absolute left-0 top-0
                        h-[20px] w-[20px]
                        transition-transform duration-300 ease-out
                        group-hover:-translate-y-full
                        "
                        strokeWidth={1.5}
                    />

                    <ArrowUpRight
                        className="
                        absolute left-0 top-full
                        h-[20px] w-[20px]
                        transition-transform duration-300 ease-out
                        group-hover:-translate-y-full
                        "
                        strokeWidth={1.5}
                    />
                    </span>
                </a>

                </div>
            </div>            
        </section>
    )
}

export default InnovationCTA