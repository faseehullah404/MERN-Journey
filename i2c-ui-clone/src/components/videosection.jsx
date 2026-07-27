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

}
export default Video