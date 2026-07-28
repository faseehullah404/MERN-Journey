import img1 from "../assets/i2c-Digital-Banking-and-Payments-Platform.webp"
import img2 from "../assets/Customer-Centric-Banking-Solutions.webp"
import img3 from "../assets/Integrated-Financial-Platform.webp"
import img4 from "../assets/Reliable-Payment-Platform.webp"
import { Circle } from "lucide-react"

function Efficiency() {
  return (
    <section className="w-full py-[80px]">
        <div className="relative mx-auto h-[565px] w-[1230px] overflow-hidden rounded-[26px]">
            <img
                src={img1}
                alt="Customer holding a payment card"
                className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
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

