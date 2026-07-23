import { ArrowRight, ArrowUpRight } from "lucide-react"
function Megamenu({menu}){
    return (
    <div className="absolute left-0 top-full z-40 h-[448px] w-full overflow-hidden rounded-b-[28px] border-t border-[#D9DEE8] bg-white shadow-[0_10px_24px_rgba(27,34,58,0.10)]">
      <div className="mx-auto h-full w-[1230px] pt-[42px]">
        <a
        href="#"
        className="mb-[42px]
            flex w-fit items-center gap-[9px]
            font-['Inter']
            text-[24px] font-[400] leading-[29px]
            text-[#1434CB]">
        {menu.heading}

        <ArrowUpRight
            className="h-[18px] w-[18px]"
            strokeWidth={1.5}
          />
        </a>
        <div className="grid grid-cols-[1fr_525px] gap-[80px]">
            <div>
                <div className="flex gap-[72px]">
                    {menu.columns.map((column, columnIndex) => {
                        return (
                        <div
                            key={columnIndex}
                            className="min-w-[160px]"
                        >
                            {column.sections.map((section, sectionIndex) => {
                            return (
                                <div
                                key={sectionIndex}
                                className="mb-[22px]"
                                >
                                    {section.title && (
                                    <a
                                        href="#"
                                        className="mb-[12px] block whitespace-nowrap font-['Inter'] text-[23px] font-[300] leading-[28px] text-[#1B223A]"
                                    >
                                        {section.title}
                                    </a>
                                    )}
                                    <div className="flex flex-col gap-[12px]">
                                        {section.links.map((link) => {
                                            return (
                                                <a
                                                    key={link}
                                                    href="#"
                                                    className={
                                                    section.title === null
                                                    ? "whitespace-nowrap font-['Inter'] text-[23px] font-[300] leading-[32px] text-[#1B223A]"
                                                    : "whitespace-nowrap font-['Inter'] text-[17px] font-[300] leading-[22px] text-[#1B223A]"
                                                    }
                                                    >
                                                    {link}
                                                </a>
                                                )
                                            })}
                                    </div>
                                </div>
                            )
                            })}
                        </div>
                        )
                    })}
                </div>
            </div>

            <div>
                {menu.promo && (
                <div className="grid h-[162px] grid-cols-[1fr_180px] gap-[18px] rounded-[16px] bg-[#E4F3FF] p-[28px]">

                    <div className="flex flex-col justify-between">
                    <p className="font-['Inter'] text-[16px] font-[300] leading-[24px] text-[#1B223A]">
                        {menu.promo.description}
                    </p>

                    <a
                        href="#"
                        className="flex items-center gap-[8px] font-['Inter'] text-[16px] font-[400] leading-[20px] text-[#003BFF]"
                    >
                        {menu.promo.linkText}

                        <ArrowRight
                        className="h-[17px] w-[17px]"
                        strokeWidth={1.5}
                        />
                    </a>
                    </div>

                    <div className="h-full overflow-hidden rounded-[10px] bg-white">
                    {menu.promo.image && (
                        <img
                        src={menu.promo.image}
                        alt=""
                        className="h-full w-full object-cover"
                        />
                    )}
                    </div>

                </div>
                )}
            </div>
        </div>
    </div>
    </div>
    )
}
export default Megamenu