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
            <section
            className="
                relative mt-[35px]
                h-[388px] w-full
                overflow-hidden bg-[#1B223A]

                md:h-[564px]
            "
            >
                <video
                    ref={mainVideoRef}
                    src={vid}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="absolute inset-0 h-full w-full object-cover object-center"/>
                    <div className="absolute inset-0 bg-black/25 md:bg-black/30" />
                    <div className="absolute inset-0">

                        <div
                            className="
                            relative mx-auto h-full w-full
                            px-[22px]

                            md:w-[1227px]
                            md:px-0
                            "
                        >
                            {/* Main video text */}
                            <h1
                            className="
                                absolute bottom-[38px] left-[22px] z-10
                                max-w-[250px]

                                font-['Inter']
                                text-[25px] font-[300]
                                leading-[31px]
                                tracking-[-1.7px]
                                text-white

                                md:bottom-[65px]
                                md:left-0
                                md:max-w-[900px]
                                md:text-[40px]
                                md:leading-[48px]
                                md:tracking-[-4px]
                            "
                            >
                            Deliver your program faster, more profitably and{" "}

                            <br className="hidden md:block" />

                            ensure a superior customer experience.
                            </h1>

                            {/* Desktop preview card */}
                            <div
                            className="
                                absolute inset-x-0 inset-y-24
                                hidden h-[95px] w-[225px]
                                rounded-[14px]
                                bg-white p-[6px]
                                shadow-[0_8px_24px_rgba(0,0,0,0.18)]

                                md:flex
                            "
                            >
                            <video
                                ref={previewVideoRef}
                                src={vid}
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="auto"
                                className="
                                mx-auto h-[90px] w-[144px]
                                -translate-x-1.25 -translate-y-0.5
                                rounded-[10px] object-cover
                                "
                            />

                            <div
                                className="
                                flex flex-1 flex-col
                                justify-between
                                py-[7px] pl-[11px] pr-[7px]
                                "
                            >
                                <p
                                className="
                                    -translate-y-2
                                    font-['Inter']
                                    text-[14px] font-[400]
                                    leading-[18px]
                                    tracking-[-1.2px]
                                    text-[#1B223A]
                                "
                                >
                                See Us
                                <br />
                                in Action
                                </p>

                                <div
                                aria-hidden="true"
                                className="
                                    flex h-[34px] w-[34px]
                                    translate-y-1.25
                                    items-center justify-center
                                    self-end rounded-full
                                    bg-[#061447] text-white
                                    hover:bg-[#F97C00]
                                "
                                >
                                <Play
                                    className="ml-[2px] h-[14px] w-[14px]"
                                    fill="currentColor"
                                    strokeWidth={0}
                                />
                                </div>
                            </div>
                            </div>

                            {/* Mobile circular play design */}
                            <div
                            aria-hidden="true"
                            className="
                                absolute bottom-[36px] right-[16px] z-10
                                flex h-[66px] w-[66px]
                                items-center justify-center
                                rounded-full
                                border border-white/40
                                bg-white/15
                                backdrop-blur-[2px]

                                md:hidden
                            "
                            >
                            <div
                                className="
                                flex h-[48px] w-[48px]
                                items-center justify-center
                                rounded-full
                                bg-[#1434CB]
                                text-white
                                "
                            >
                                <Play
                                className="ml-[3px] h-[17px] w-[17px]"
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