import vid from "../assets/video.mp4"
import { useEffect, useRef } from "react"
import { Play } from "lucide-react"
function Video(){
    const mainVideoRef = useRef(null)
    const previewVideoRef = useRef(null)

    useEffect(() => {
        const mainVideo = mainVideoRef.current
        const previewVideo = previewVideoRef.current

        if (!mainVideo || !previewVideo) {
            return
        }
        function startVideos() {
            if (!mainVideo.duration || !previewVideo.duration) {
            return
            }

            mainVideo.currentTime = 0
            previewVideo.currentTime = 4

            mainVideo.play().catch(() => {})
            previewVideo.play().catch(() => {})
        }

        mainVideo.addEventListener("loadedmetadata", startVideos)
        previewVideo.addEventListener("loadedmetadata", startVideos)

        startVideos()

        return () => {
            mainVideo.removeEventListener("loadedmetadata", startVideos)
            previewVideo.removeEventListener("loadedmetadata", startVideos)
        }
        }, [])
        return(
            <section className="relative mt-[35px] h-[564px] w-full overflow-hidden bg-[#1B223A]">
                <video
                    ref={mainVideoRef}
                    src={vid}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="absolute inset-0 h-full w-full object-cover"/>
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute  inset-x-0">
                        <div className="inset-y-100 relative mx-auto h-full w-[1227px]">
                            <h1 className="font-[300] font-['Inter'] text-[40px] text-white leading-12 tracking-[-4px]"> Deliver your program faster, more profitably and <br/> ensure a superior customer experience.</h1>
                        </div>
                        <div className="absolute inset-y-24 inset-x-36 flex h-[95px] w-[225px] rounded-[14px] bg-white p-[6px] shadow-[0_8px_24px_rgba(0,0,0,0.18)]">

                            <video
                                ref={previewVideoRef}
                                src={vid}
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="auto"
                                className="mx-auto h-[90px] w-[144px] rounded-[10px] object-cover -translate-y-0.5 -translate-x-1.25"
                            />

                            <div className="flex flex-1 flex-col justify-between py-[7px] pl-[11px] pr-[7px]">
                                <p className="font-['Inter'] text-[14px] font-[400] leading-[18px] tracking-[-1.2px] text-[#1B223A] font-[Arial] -translate-y-2">
                                See Us
                                <br />
                                in Action
                                </p>

                                <div
                                aria-hidden="true"
                                className="hover:bg-[#F97C00] flex h-[34px] w-[34px] self-end items-center justify-center rounded-full bg-[#061447] text-white translate-y-1.25"
                                >
                                <Play
                                    className="ml-[2px] h-[14px] w-[14px] "
                                    fill="currentColor"
                                    strokeWidth={0}
                                />
                                </div>
                            </div>

                        </div>
                    </div>
            </section>
            
        )

}
export default Video