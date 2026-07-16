import { useState } from "react"
import { CircleHelp } from "lucide-react"
import FaqContent from "./FaqContent"

const faqData = [
  {
    id: 1,
    question: "What is Property CRM software?",
    answer:
      "Property CRM software helps real estate businesses manage leads, properties, customer interactions, sales activities, and reports from one centralized system.",
  },
  {
    id: 2,
    question: "How can Sales CRM improve Property productivity?",
    answer:
      "Sales CRM improves productivity by organizing leads, automating repetitive tasks, tracking communication, and helping sales teams focus on high-priority opportunities.",
  },
  {
    id: 3,
    question: "What are the key features of a good Property CRM system?",
    answer:
      "A good Property CRM system includes lead management, task automation, property listings, communication tracking, reports, team management, and campaign monitoring.",
  },
  {
    id: 4,
    question: "Is Property CRM software suitable for small businesses?",
    answer:
      "Yes. Small real estate businesses can use Property CRM to organize customer records, reduce manual work, track leads, and manage sales activities efficiently.",
  },
  {
    id: 5,
    question: "How does Sales CRM support customer retention?",
    answer:
      "Property CRM systems support customer retention by tracking customer interactions, providing insights into their preferences and behaviors, automating follow-up and outreach, and helping businesses deliver personalized and timely customer service.",
  },
]
function FaqForm() {
  const [activeFaqId, setActiveFaqId] = useState(null)

  function handleFaqClick(clickedId) {
    if (activeFaqId === clickedId) {
      setActiveFaqId(null)
    } else {
      setActiveFaqId(clickedId)
    }
  }
    return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1500px] px-8">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1.2fr_0.9fr]">
          
          <div>
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-700 text-white">
                <CircleHelp size={36} />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-950">
                  F.A.Qs
                </h2>

                <p className="mt-1 text-lg text-blue-950">
                  Frequently asked questions
                </p>
              </div>
            </div>

            <div className="mt-14 space-y-5">
              {faqData.map((faq) => {
                let isOpen = false

                if (activeFaqId === faq.id) {
                  isOpen = true
                } else {
                  isOpen = false
                }

                return (
                  <FaqContent
                    key={faq.id}
                    faq={faq}
                    isOpen={isOpen}
                    onToggle={handleFaqClick}
                  />
                )
              })}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-950">
              Get In
              <span className="text-green-700"> Touch</span>
            </h2>

            <div className="relative mt-7 bg-white p-8 pr-14 shadow-2xl">
              <div className="absolute inset-y-0 right-0 w-7 bg-green-700"></div>

              <form className="shadow-xl p-6 ">
                    <div >
                        <input className="mt-4 border w-full border-gray-100 rounded-4xl p-4" placeholder="Name" />
                        <input className="mt-4 border w-full border-gray-100 rounded-4xl p-4" placeholder="Phone Number" />
                        <input className="mt-4 border w-full border-gray-100 rounded-4xl p-4" placeholder="Email" />
                        <input className="mt-4 border w-full border-gray-100 rounded-4xl p-4" placeholder="Describe Your Requirement" />
                        <a href="#" className="mt-6 mb-16 inline-flex rounded-2xl bg-green-700 text-white hover:bg-yellow-400 hover:text-black py-3 px-8 shadow-[0_0_30px_rgba(56,189,248,0.25)] text-center ">
                        Submit
                    </a>
                    </div>
                </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default FaqForm