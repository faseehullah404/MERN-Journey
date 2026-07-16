import { Plus, Minus } from "lucide-react"

function FaqContent({ faq, isOpen, onToggle }) {
  let answerClasses =
    "grid transition-all duration-300 ease-in-out"

  let cardClasses =
    "overflow-hidden rounded-[28px] border border-sky-200 bg-white"

  let Icon = Plus

  if (isOpen === true) {
    answerClasses += " grid-rows-[1fr] opacity-100"
    cardClasses += " shadow-lg"
    Icon = Minus
  } else {
    answerClasses += " grid-rows-[0fr] opacity-0"
    Icon = Plus
  }

  return (
    <article className={cardClasses}>
      <button
        type="button"
        onClick={() => onToggle(faq.id)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 px-8 py-3 text-left"
      >
        <h3 className="text-sm font-extrabold text-blue-950">
          {faq.question}
        </h3>

        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-50 text-green-700">
          <Icon size={27} strokeWidth={2} />
        </span>
      </button>

      <div className={answerClasses}>
        <div className="overflow-hidden">
          <p className="px-8 pb-7 text-base leading-8 text-blue-950">
            {faq.answer}
          </p>
        </div>
      </div>
    </article>
  )
}

export default FaqContent
