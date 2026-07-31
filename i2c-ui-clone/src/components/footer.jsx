import { ArrowUpRight } from "lucide-react";
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
        </div>
    </section>
  )
}
export default Footer
