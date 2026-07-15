function content_feature({feature}){
  let layoutClasses =
    "mx-auto mt-16 flex max-w-7xl items-center gap-16 px-8 text-left"

  let imageClasses =
    "w-full object-contain"

  let textContainerClasses =
    "w-1/2"

  let headingClasses =
    "font-bold text-blue-950"

  let descriptionClasses =
    "mt-5 text-lg leading-9 text-blue-950"

  let labelElement = null
    if (feature.imageLeft === true) {
    layoutClasses += " flex-row"
  } else {
    layoutClasses += " flex-row-reverse"
  }

if (feature.variant === "sales") {
    imageClasses += " max-h-[480px]"
    headingClasses += " mt-8 text-4xl"
    textContainerClasses += " pr-8"

    labelElement = (
      <span className="inline-block rounded-full bg-slate-100 px-8 py-3 tracking-widest text-green-700">
        {feature.label}
      </span>
    )
  } else if (feature.variant === "activities") {
    imageClasses += " max-h-[450px]"
    headingClasses += " mt-8 text-4xl"
    textContainerClasses += " pl-6"

    labelElement = (
      <span className="inline-block rounded-full bg-slate-100 px-8 py-3 tracking-widest text-green-700">
        {feature.label}
      </span>
    )
  } else if (feature.variant === "campaign") {
    imageClasses += " max-h-[520px]"
    headingClasses += " mt-7 text-4xl"
    descriptionClasses += " max-w-xl"
    textContainerClasses += " pr-4"

    labelElement = (
      <span className="inline-block rounded-full bg-slate-100 px-8 py-3 tracking-widest text-green-700">
        {feature.label}
      </span>
    )
  } else if (feature.variant === "listing") {
    imageClasses += " max-h-[500px]"
    headingClasses += " mt-0 text-5xl leading-tight"
    descriptionClasses += " max-w-lg"
    textContainerClasses += " pl-10"

    labelElement = null
  } else if (feature.variant === "teams") {
    imageClasses += " max-h-[540px]"
    headingClasses += " mt-0 text-5xl leading-tight"
    descriptionClasses += " max-w-lg"
    textContainerClasses += " pr-10"

    labelElement = null
  } else {
    headingClasses += " mt-8 text-4xl"
    labelElement = null
  }
  return(
  <div className={layoutClasses}>
      <div className="w-1/2">
        <img
          src={feature.image}
          alt={feature.heading}
          className={imageClasses}
        />
      </div>

            <div className={textContainerClasses}>
        {labelElement}

        <h2 className={headingClasses}>
          {feature.heading}
        </h2>

        <p className={descriptionClasses}>
          {feature.description}
        </p>
      </div>
    </div>
  )
}

export default content_feature

