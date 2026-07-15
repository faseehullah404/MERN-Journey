function content_feature({feature}){
    let layoutClasses = "mt-16 flex items-center gap-16 text-left"

  if (feature.imageLeft === true) {
    layoutClasses += " flex-row"
  } else {
    layoutClasses += " flex-row-reverse"
  }
  return(
  <div className={layoutClasses}>
      <div className="w-1/2">
        <img
          src={feature.image}
          alt={feature.heading}
          className="w-full object-contain"
        />
      </div>

      <div className="w-1/2">
        <span className="inline-block rounded-full bg-slate-100 px-8 py-3 tracking-widest text-green-700">
          {feature.label}
        </span>

        <h2 className="mt-8 text-4xl font-bold text-blue-950">
          {feature.heading}
        </h2>

        <p className="mt-5 text-lg leading-9 text-blue-950">
          {feature.description}
        </p>
      </div>
    </div>
  )
}

export default FeatureContent

