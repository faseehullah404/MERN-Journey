function Card_service({icon,title,description}){
    return(
        <div className="bg-white p-10 rounded-xl ">
            <div>
            <img src={icon} className="h-18 w-17"/>
            </div>
            <div>
            <h2 className="mt-8 text-2xl font-bold text-blue-950">
                {title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
                {description}
            </p>
            </div>
        </div>
    )
}
export default Card_service 