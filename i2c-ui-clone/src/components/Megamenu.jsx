import { ArrowRight, ArrowUpRight } from "lucide-react"
function Megamenu({menu}){
    return (
    <div className="absolute left-0 top-full z-40 w-full rounded-b-[28px] bg-white">
      <div className="mx-auto min-h-[430px] w-[1230px] py-[48px]">
        <a
        href="#"
        className="mb-[46px] flex w-fit items-center gap-[10px] font-['Inter'] text-[28px] font-[300] leading-[34px] text-[#1B223A]">
        {menu.heading}

        <ArrowUpRight
            className="h-[21px] w-[21px]"
            strokeWidth={1.5}
          />
        </a>
      </div>
    </div>
    )
}
export default Megamenu