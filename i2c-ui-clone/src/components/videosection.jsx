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
                    <div className="absolute inset-y-100 inset-x-0">
                        <div className="relative mx-auto h-full w-[1227px]">
                            <h1 className="font-[300] font-['Inter'] text-[40px] text-white leading-12 tracking-[-4px]"> Deliver your program faster, more profitably and <br/> ensure a superior customer experience.</h1>
                        </div>
                    </div>
            </section>
            
        )

}
export default Video