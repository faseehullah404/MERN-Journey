import insideTrackLogo from "../assets/inside-track-logo-1.png"
import i2cLogo from "../assets/Powered-by-innovation-driven-by-trust.svg"
import { ArrowUpRight } from "lucide-react"

function Footer() {
  return (
    <section className="w-full bg-[#F4FAFF]">
        <div
            className="
            mx-auto grid w-[1230px]
            grid-cols-[210px_250px_220px_220px_190px]
            gap-[35px]
            pb-[72px] pt-[68px]
        "
        >
        {/* Five columns */}
        <div>
            <a
                href="#"
                className="
                flex w-fit items-center gap-[5px]
                font-['Inter'] text-[15px] font-[300]
                leading-[22px] tracking-[-0.4px]
                text-[#535D70]
                transition-colors duration-200
                hover:text-[#1434CB]
                "
            >
                Who We Serve
                <ArrowUpRight className="h-[14px] w-[14px]" strokeWidth={1.4} />
            </a>

            <div className="mt-[20px] flex flex-col items-start gap-[10px]">
                {["Banks", "Credit Unions", "Fintechs", "Governments", "Partners"].map(
                (item) => {
                    return (
                    <a
                        key={item}
                        href="#"
                        className="
                        font-['Inter'] text-[16px] font-[600]
                        leading-[22px] tracking-[-0.35px]
                        text-[#111522]
                        transition-colors duration-200
                        hover:text-[#1434CB]
                        "
                    >
                        {item}
                    </a>
                    )
                }
                )}
            </div>

            <div className="mt-[38px]">
                <h3 className="font-['Inter'] text-[16px] font-[600] leading-[22px] text-[#111522]">
                Our Clients
                </h3>

                <div className="mt-[10px] flex flex-col items-start">
                {[
                    "Client Map",
                    "Client Testimonials",
                    "Case Studies",
                    "Client Login",
                    "Developers",
                ].map((item) => {
                    return (
                    <a
                        key={item}
                        href="#"
                        className="
                        font-['Inter'] text-[16px] font-[300]
                        leading-[27px] tracking-[-0.35px]
                        text-[#263046]
                        transition-colors duration-200
                        hover:text-[#1434CB]
                        "
                    >
                        {item}
                    </a>
                    )
                })}

                <a
                    href="#"
                    className="
                    mt-[5px] font-['Inter']
                    text-[16px] font-[300] leading-[27px]
                    tracking-[-0.35px] text-[#263046]
                    transition-colors duration-200
                    hover:text-[#1434CB]
                    "
                >
                    → API Library
                </a>
                </div>
                </div>
                
            </div>
            <div>
                <a
                    href="#"
                    className="
                    flex w-fit items-center gap-[5px]
                    font-['Inter'] text-[15px] font-[300]
                    leading-[22px] tracking-[-0.4px]
                    text-[#535D70]
                    transition-colors duration-200
                    hover:text-[#1434CB]
                    "
                >
                    What We Do
                    <ArrowUpRight className="h-[14px] w-[14px]" strokeWidth={1.4} />
                </a>

                <div className="mt-[20px]">
                    <h3 className="font-['Inter'] text-[16px] font-[600] leading-[22px] text-[#111522]">
                    Issuer Processing
                    </h3>

                    <div className="mt-[6px] flex flex-col items-start">
                    {["Credit", "Debit", "Prepaid"].map((item) => {
                        return (
                        <a
                            key={item}
                            href="#"
                            className="
                            font-['Inter'] text-[16px] font-[300]
                            leading-[27px] tracking-[-0.35px]
                            text-[#263046] hover:text-[#1434CB]
                            "
                        >
                            {item}
                        </a>
                        )
                    })}
                    </div>
                </div>

                <a
                    href="#"
                    className="mt-[26px] block font-['Inter'] text-[16px] font-[600] leading-[22px] text-[#111522] hover:text-[#1434CB]"
                >
                    Core Banking
                </a>

                <a
                    href="#"
                    className="mt-[22px] block font-['Inter'] text-[16px] font-[600] leading-[22px] text-[#111522] hover:text-[#1434CB]"
                >
                    Money Movement
                </a>

                <div className="mt-[28px]">
                    <h3 className="font-['Inter'] text-[16px] font-[600] leading-[22px] text-[#111522]">
                    Value-Added Services
                    </h3>

                    <div className="mt-[7px] flex flex-col items-start">
                    {[
                        "Implementation Management",
                        "Program Management Support",
                        "Fraud Risk Management",
                        "Dispute & Chargeback Resolution",
                        "Lifecycle Consultation",
                        "Customer Care",
                        "Rewards & Loyalty Engagement",
                        "Reporting & Analytics",
                        "C-Applications",
                    ].map((item) => {
                        return (
                        <a
                            key={item}
                            href="#"
                            className="
                            font-['Inter'] text-[16px] font-[300]
                            leading-[27px] tracking-[-0.4px]
                            text-[#263046]
                            transition-colors duration-200
                            hover:text-[#1434CB]
                            "
                        >
                            {item}
                        </a>
                        )
                    })}
                    </div>
                </div>
                </div>
                <div>
                    <a
                        href="#"
                        className="
                        flex w-fit items-center gap-[5px]
                        font-['Inter'] text-[15px] font-[300]
                        leading-[22px] tracking-[-0.4px]
                        text-[#535D70]
                        transition-colors duration-200
                        hover:text-[#1434CB]
                        "
                    >
                        How We're Different
                        <ArrowUpRight className="h-[14px] w-[14px]" strokeWidth={1.4} />
                    </a>

                    <div className="mt-[20px] flex flex-col items-start gap-[14px]">
                        {[
                        "All-in-One Platform",
                        "Composable Solutions",
                        "Trusted Experience",
                        ].map((item) => {
                        return (
                            <a
                            key={item}
                            href="#"
                            className="
                                font-['Inter'] text-[16px] font-[600]
                                leading-[22px] tracking-[-0.35px]
                                text-[#111522]
                                transition-colors duration-200
                                hover:text-[#1434CB]
                            "
                            >
                            {item}
                            </a>
                        )
                        })}
                    </div>
                </div>
                <div>
                    <a
                        href="#"
                        className="
                        flex w-fit items-center gap-[5px]
                        font-['Inter'] text-[15px] font-[300]
                        leading-[22px] tracking-[-0.4px]
                        text-[#535D70]
                        transition-colors duration-200
                        hover:text-[#1434CB]
                        "
                    >
                        Who We Are
                        <ArrowUpRight className="h-[14px] w-[14px]" strokeWidth={1.4} />
                    </a>

                    <div className="mt-[20px] flex flex-col items-start gap-[14px]">
                        {[
                        "Our Story",
                        "Meet Our Leaders",
                        "Our Global Footprint",
                        "Supercharge Your Career",
                        ].map((item) => {
                        return (
                            <a
                            key={item}
                            href="#"
                            className="
                                font-['Inter'] text-[16px] font-[600]
                                leading-[22px] tracking-[-0.35px]
                                text-[#111522]
                                transition-colors duration-200
                                hover:text-[#1434CB]
                            "
                            >
                            {item}
                            </a>
                        )
                        })}
                    </div>
                </div>
                <div>
                    <p
                        className="
                        font-['Inter'] text-[15px] font-[300]
                        leading-[22px] tracking-[-0.4px]
                        text-[#535D70]
                        "
                    >
                        In The Know
                    </p>

                    <div className="mt-[20px]">
                        <h3 className="font-['Inter'] text-[16px] font-[600] leading-[22px] text-[#111522]">
                        Newsroom
                        </h3>

                        <div className="mt-[6px] flex flex-col items-start">
                        {["News", "Awards"].map((item) => {
                            return (
                            <a
                                key={item}
                                href="#"
                                className="
                                font-['Inter'] text-[16px] font-[300]
                                leading-[27px] tracking-[-0.35px]
                                text-[#263046] hover:text-[#1434CB]
                                "
                            >
                                {item}
                            </a>
                            )
                        })}
                        </div>
                    </div>

                    <div className="mt-[28px]">
                        <h3 className="font-['Inter'] text-[16px] font-[600] leading-[22px] text-[#111522]">
                        Insights
                        </h3>

                        <div className="mt-[6px] flex flex-col items-start">
                        {[
                            "Blogs & Podcasts",
                            "Research Reports",
                            "Playbooks",
                            "Newsletters",
                        ].map((item) => {
                            return (
                            <a
                                key={item}
                                href="#"
                                className="
                                font-['Inter'] text-[16px] font-[300]
                                leading-[27px] tracking-[-0.35px]
                                text-[#263046] hover:text-[#1434CB]
                                "
                            >
                                {item}
                            </a>
                            )
                        })}
                        </div>
                    </div>

                    <div className="mt-[28px]">
                        <h3 className="font-['Inter'] text-[16px] font-[600] leading-[22px] text-[#111522]">
                        Events
                        </h3>

                        <div className="mt-[6px] flex flex-col items-start">
                        {["In-Person", "Virtual"].map((item) => {
                            return (
                            <a
                                key={item}
                                href="#"
                                className="
                                font-['Inter'] text-[16px] font-[300]
                                leading-[27px] tracking-[-0.35px]
                                text-[#263046] hover:text-[#1434CB]
                                "
                            >
                                {item}
                            </a>
                            )
                        })}
                        </div>
                    </div>
                </div>
                </div>
                {/* Newsletter card */}
                <div
                className="
                    mx-auto grid h-[142px] w-[1230px]
                    grid-cols-[290px_1fr_330px]
                    items-center gap-[28px]
                    rounded-[20px]
                    bg-white
                    px-[38px]
                "
                >
                {/* Inside Track logo */}
                <img
                    src={insideTrackLogo}
                    alt="The Inside Track"
                    className="h-auto w-[255px] object-contain"
                />

                {/* Newsletter description */}
                <p
                    className="
                    font-['Inter']
                    text-[19px] font-[300]
                    leading-[26px]
                    tracking-[-0.7px]
                    text-[#1B223A]
                    "
                >
                    Your fast lane to banking and payments intelligence.
                </p>

                {/* Subscribe button */}
                <a
                    href="#"
                    className="
                    group flex h-[62px] w-full
                    items-center justify-center gap-[18px]
                    rounded-[8px]
                    bg-[#1434CB]
                    font-['Inter']
                    text-[18px] font-[300]
                    text-white
                    "
                >
                    <span>Subscribe to Our Newsletter</span>

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
            </div>
            
            {/* Footer bottom */}
            <div
            className="
                mx-auto mt-[62px] grid w-[1230px]
                grid-cols-[1fr_1fr]
                pb-[72px]
            "
            >
            {/* Left side */}
            <div>
                <div className="flex items-center gap-[14px]">
                <img
                    src={i2cLogo}
                    alt="i2c"
                    className="h-[62px] w-[88px] object-contain"
                />

                <div
                    className="
                    font-['Inter']
                    text-[16px] font-[600]
                    leading-[18px]
                    tracking-[-0.7px]
                    text-[#1B223A]
                    "
                >
                    <p>
                    Powered by innovation
                    <span className="text-[#FF7200]">.</span>
                    </p>

                    <p>
                    Driven by trust
                    <span className="text-[#FF7200]">.</span>
                    </p>
                </div>
                </div>

                <p
                className="
                    mt-[30px]
                    font-['Inter']
                    text-[16px] font-[300]
                    tracking-[-0.5px]
                    text-[#667080]
                "
                >
                Copyright © 2026 i2c Inc. All Rights Reserved.
                </p>
            </div>

            {/* Right side */}
            <div className="flex flex-col items-end">
                {/* Social links */}
                <div className="flex items-center gap-[25px]">
                <span
                    className="
                    font-['Inter']
                    text-[17px] font-[500]
                    text-[#10162B]
                    "
                >
                    Follow Us
                </span>

                <a
                    href="#"
                    aria-label="LinkedIn"
                    className="
                    font-['Inter']
                    text-[27px] font-[700]
                    leading-none
                    text-[#061447]
                    transition-colors duration-200
                    hover:text-[#1434CB]
                    "
                >
                    in
                </a>

                <a
  href="#"
  aria-label="Instagram"
  className="
    text-[#061447]
    transition-colors duration-200
    hover:text-[#1434CB]
  "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[25px] w-[25px]"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle
      cx="17.5"
      cy="6.5"
      r="1"
      fill="currentColor"
      stroke="none"
    />
  </svg>
</a>
                </div>

                {/* Policies */}
                <div
                className="
                    mt-[42px] flex items-center gap-[24px]
                    font-['Inter']
                    text-[16px] font-[300]
                    tracking-[-0.5px]
                    text-[#667080]
                "
                >
                <a
                    href="#"
                    className="transition-colors duration-200 hover:text-[#1434CB]"
                >
                    Privacy Policy
                </a>

                <span>·</span>

                <a
                    href="#"
                    className="transition-colors duration-200 hover:text-[#1434CB]"
                >
                    Contact Us
                </a>
                </div>
            </div>
            
        </div>
    </section>
  )
}
export default Footer
