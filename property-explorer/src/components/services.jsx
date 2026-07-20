
import Card_service from "./card_services"
import icon1 from "../assets/icon1.png"
import icon3 from "../assets/icon3.png"
import icon2 from "../assets/icon2.png"
function Services(){
    return(
        <div className=" bg-cyan-50  pb-20">
            <h1 className="text-black  pt-10 text-3xl md:text-5xl font-extrabold text-center">
                Real Estate CRM in UAE For Property
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto pt-10 px-5">
            <Card_service
            icon={icon1}
            title={"Property Listing"}
            description={"Use real-time updates to stay on top of your real estate listings. You can efficiently and effectively manage, maintain, and display your properties using the font-bold Best Real Estate Software in UAE"}
            />
            <Card_service
            icon={icon2}
            title={"Sale funnel"}
            description={"Easily refine and narrow your search with customizable filters, making it simple to find properties that align with your preferences. With Real Estate Property Management Software, the entire process becomes more efficient and user-friendly."}
            />
            <Card_service
            icon={icon3}
            title={"Multi projectsProperty Listing"}
            description={"Empowers users to efficiently manage multiple projects, enhancing productivity and organization. With CRM property management, streamlining workflows becomes seamless and highly effective."}
            />
            <Card_service
            icon={icon1}
            title={"Property Listing"}
            description={"Use real-time updates to stay on top of your real estate listings. You can efficiently and effectively manage, maintain, and display your properties using the font-bold Best Real Estate Software in UAE"}
            />
            <Card_service
            icon={icon2}
            title={"Sale funnel"}
            description={"Easily refine and narrow your search with customizable filters, making it simple to find properties that align with your preferences. With Real Estate Property Management Software, the entire process becomes more efficient and user-friendly."}
            />
            <Card_service
            icon={icon3}
            title={"Multi projectsProperty Listing"}
            description={"Empowers users to efficiently manage multiple projects, enhancing productivity and organization. With CRM property management, streamlining workflows becomes seamless and highly effective."}
            />




            </div>
        </div>
    )
}
export default Services