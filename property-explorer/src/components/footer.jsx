import crm from "../assets/crm.png"
import {
  Phone,
  Mail,
  Building2,
  ChevronRight,
} from "lucide-react"

const featureLinks = [
  "Cloud Enabled",
  "Biggest Sale Assets",
  "Organize Sale Activities",
  "AI Tools",
]

const quickLinks = [
  "About Us",
  "Contact Us",
  "Features",
  "Blogs",
  "Sitemap",
]

const socialLinks = [
  {
    id: 1,
    name: "Facebook",
    symbol: "f",
  },
  {
    id: 2,
    name: "Pinterest",
    symbol: "p",
  },
  {
    id: 3,
    name: "X",
    symbol: "X",
  },
  {
    id: 4,
    name: "LinkedIn",
    symbol: "in",
  },
  {
    id: 5,
    name: "Instagram",
    symbol: "◎",
  },
]

function Footer() {
  return (
    <footer className="mt-1 bg-gray-50">
      <div className="mx-auto w-[85%] max-w-[1500px] pt-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">


          <div>
            <div className="flex items-center text-2xl font-bold text-blue-950">
              <span>Property</span>
            </div>
                <img src={crm} alt="crm" className="h-12 w-auto -translate-y-[40px] translate-x-[100px]"/>
            

            <div className=" space-y-3 text-sm text-gray-500">
              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  strokeWidth={1.7}
                  className="shrink-0 text-blue-950"
                />

                <span>+971 457 13703</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  strokeWidth={1.7}
                  className="shrink-0 text-blue-950"
                />

                <span>+92 300 1110365</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  strokeWidth={1.7}
                  className="shrink-0 text-blue-950"
                />

                <a
                  href="mailto:info@propertycrm.net"
                  className="transition hover:text-green-700"
                >
                  info@propertycrm.net
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Building2
                  size={18}
                  strokeWidth={1.7}
                  className="mt-1 shrink-0 text-blue-950"
                />

                <p className="leading-7">
                  Office #1904, Metropolis Tower Business Bay
                  <br />
                  Dubai, UAE
                </p>
              </div>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                return (
                  <a
                    key={social.id}
                    href="#"
                    aria-label={social.name}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white font-bold text-green-700 shadow-sm transition hover:bg-green-700 hover:text-white"
                  >
                    {social.symbol}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Second column */}
          <div>
            <h3 className="text-xl font-bold text-blue-950">
              Features & Benefits
            </h3>

            <div className="mt-9 space-y-5">
              {featureLinks.map((link) => {
                return (
                  <a
                    key={link}
                    href="#"
                    className="flex items-center gap-4 text-sm text-gray-500 transition hover:text-green-700"
                  >
                    <ChevronRight
                      size={17}
                      strokeWidth={1.8}
                      className="shrink-0 text-blue-950"
                    />

                    <span>{link}</span>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Third column */}
          <div>
            <h3 className="text-xl font-bold text-blue-950">
              Quick Links
            </h3>

            <div className="mt-9 space-y-5">
              {quickLinks.map((link) => {
                return (
                  <a
                    key={link}
                    href="#"
                    className="flex items-center gap-4 text-sm text-gray-500 transition hover:text-green-700"
                  >
                    <ChevronRight
                      size={17}
                      strokeWidth={1.8}
                      className="shrink-0 text-blue-950"
                    />

                    <span>{link}</span>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Fourth column */}
          <div>
            <h3 className="text-xl font-bold text-blue-950">
              Newsletter
            </h3>

            <p className="mt-9 text-sm leading-7 text-gray-500">
              Register now to avail discounts & latest updates.
            </p>

            <div className="mt-8 flex items-center rounded-full bg-white shadow-xl">
              <input
                type="email"
                placeholder="Email"
                className="min-w-0 flex-1 bg-transparent px-6 py-4 text-sm text-gray-600 outline-none"
              />

              <button
                type="button"
                className="shrink-0 rounded-full bg-green-700 px-7 py-4 text-sm font-semibold text-white transition hover:bg-green-800"
              >
                Join Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-16 border-t border-gray-200 py-7 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Property CRM | All Rights Reserved. Powered By Connect
            Solutions
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer