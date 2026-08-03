import megamenu1 from "../assets/configurable-building-blocks.webp"
import megamenu2 from "../assets/Virtual-Event_PYMNTS_Emerging-Middle-Market.jpg"
import megamenu3 from "../assets/supercharge-banking-and-payments.png"
import megamenu4 from "../assets/Group-1171278021.png"
import megamenu5 from "../assets/image-8.png"
import i2c_logo from "../assets/i2c-logo.svg"
import { useEffect, useState } from "react"
import MegaMenu from "./Megamenu.jsx"
import { VolumeX, Menu, Search, ArrowRight, X } from "lucide-react"
const navMenus = [
  {
    id: "who-we-serve",
    label: "Who We Serve",
    heading: "Who We Serve",

    columns: [
      {
        sections: [
          {
            title: null,
            links: [
              "Banks",
              "Credit Unions",
              "Fintechs",
              "Governments",
              "Partners",
            ],
          },
        ],
      },

      {
        sections: [
          {
            title: "Our Clients",
            links: [
              "Client Map",
              "Client Testimonials",
              "Case Studies",
              "Client Login",
              "Developers",
              "API Library"
            ],
          },

          
        ],
      },
    ],

    promo: {
      description:
        "We help financial leaders move fast and stay ahead.",
      linkText: "Fuel your future",
      image: megamenu1,
    },
  },

  {
    id: "what-we-do",
    label: "What We Do",
    heading: "What We Do",

    columns: [
      {
        sections: [
          {
            title: "Issuer Processing",
            links: ["Credit", "Debit", "Prepaid"],
          },

          {
            title: "Core Banking",
            links: [],
          },

          {
            title: "Money Movement",
            links: [],
          },
        ],
      },

      {
        sections: [
          {
            title: "Value-Added Services",
            links: [
              "Implementation Management",
              "Customer Care",
              "Fraud Risk Management",
              "Dispute & Chargeback Resolution",
              "Program Management Support",
            ],
          },
        ],
      },

      {
        sections: [
          {
            title: null,
            links: [
              "Lifecycle Consultation",
              "Rewards & Loyalty Engagement",
              "Reporting & Analytics",
              "C-Applications",
            ],
          },
        ],
      },
    ],

    promo: {
      description:
        "Learn about the gap fast-growing companies are navigating and the opportunity it creates for those willing to rethink financial infrastructure for growth.",
      linkText: "Download Now",
      image: megamenu2,
    },
  },

{
  id: "how-were-different",
  label: "How We're Different",
  heading: "How We're Different",

  columns: [
    {
      sections: [
        {
          title: null,
          links: [
            "All-in-One Platform",
            "Composable Solutions",
            "Trusted Experience",
          ],
        },
      ],
    },
  ],

  promo: {
    description:
      "With i2c’s composable platform, choose what you need and launch at full speed.",
    linkText: "What's possible",
    image: megamenu3,
  },
},
{
  id: "who-we-are",
  label: "Who We Are",
  heading: "Who We Are",

  columns: [
    {
      sections: [
        {
          title: null,
          links: [
            "Our Story",
            "Meet Our Leaders",
            "Our Global Footprint",
            "Supercharge Your Career",
          ],
        },
      ],
    },
  ],

  promo: {
    description:
      "i2c actively positioning its leadership at the forefront of the conversation as Agentic AI rapidly moves from concept to tangible implementation.",
    linkText: "Read Now",
    image: megamenu4,
  },
},
{
  id: "in-the-know",
  label: "In The Know",
  heading: "In The Know",

  columns: [
    {
      sections: [
        {
          title: "Newsroom",
          links: ["News", "Awards"],
        },
      ],
    },

    {
      sections: [
        {
          title: "Insights",
          links: [
            "Blogs & Podcasts",
            "Research Reports",
            "Playbooks",
            "Newsletters",
          ],
        },
      ],
    },

    {
      sections: [
        {
          title: "Events",
          links: ["In-Person", "Virtual"],
        },
      ],
    },

  ],

  promo: {
    description:
      'i2c Named “Overall FinTech Company of the Year” in 2026 FinTech Breakthrough Awards',
    linkText: "Outperform industry standards",
    image: megamenu5,
  },
}
]


function Nav(){
    const [openMenu, setOpenMenu] = useState(null)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false)

    useEffect(() => {
  function handleScroll() {
    if (window.scrollY > 20) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

    handleScroll()

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
    useEffect(() => {
      if (!isMobileMenuOpen) {
        return
      }

      const previousOverflow =
        document.body.style.overflow

      document.body.style.overflow = "hidden"

      function handleEscape(event) {
        if (event.key === "Escape") {
          setIsMobileMenuOpen(false)
        }
      }

      window.addEventListener("keydown", handleEscape)

      return () => {
        document.body.style.overflow =
          previousOverflow

        window.removeEventListener(
          "keydown",
          handleEscape
        )
      }
    }, [isMobileMenuOpen])
    let headerStyle =
    "w-full border border-transparent shadow-none"

    if (isScrolled) {
      headerStyle = `
        w-full
        md:w-[84%]
        md:max-w-[1430px]
        md:rounded-b-[28px]
        md:border-x
        md:border-b
        md:border-[#E8EDF5]
        md:shadow-[0_10px_30px_rgba(27,34,58,0.10)]
      `
    }

    function handleMenuClick(menuId) {
        if (openMenu === menuId) {
            setOpenMenu(null)
        } else {
            setOpenMenu(menuId)
        }
    }
    const selectedMenu = navMenus.find((menu) => {
        return menu.id === openMenu
    })
    function handleMobileMenuOpen() {
      setOpenMenu(null)
      setIsMobileMenuOpen(true)
    }
        
    return(
  <header
  className={`
    sticky top-0 z-50 mx-auto bg-white
    
    ${headerStyle}
  `}>
    <nav className="
        mx-auto flex h-[64px] w-full
        items-center justify-between
        px-[22px]

        md:grid md:h-[84px] md:w-[1230px]
        md:grid-cols-[1fr_auto]
        md:gap-[70px] md:px-0
      "
    >

  {/* Left column */}
  <div className="flex min-w-0 items-center gap-[28px]">
    <img
      src={i2c_logo}
      alt="i2c logo"
      className="h-[52px] w-[52px] shrink-0 object-contain"
    />
    <div className="hidden items-center gap-[28px] md:flex">
    {navMenus.map((menu) => {
      

      return (
        <button
          key={menu.id}
          type="button"
          onClick={() => handleMenuClick(menu.id)}
          className="m-0 whitespace-nowrap border-0 bg-transparent p-0 font-['Inter'] text-[16px] font-[500] leading-[22px] text-[#1B223A] "
        >
          {menu.label}
        </button>
      )
    })}
    </div>
  </div>

  {/* Right column */}
  {/* Right column */}
  <div className="flex items-center justify-end">

    {/* Desktop controls */}
    <div className="hidden items-center gap-[28px] md:flex">

      {/* Desktop icons */}
      <div className="flex items-center gap-[22px]">
        <button
          type="button"
          aria-label="Mute sound"
          className="
            m-0 border-0 bg-transparent p-0
            text-[#1B223A]
          "
        >
          <VolumeX
            className="h-[18px] w-[18px]"
            strokeWidth={1.7}
          />
        </button>

        <button
          type="button"
          aria-label="Open desktop menu"
          className="
            m-0 border-0 bg-transparent p-0
            text-[#1B223A]
          "
        >
          <Menu
            className="h-[27px] w-[27px]"
            strokeWidth={1.4}
          />
        </button>

        <button
          type="button"
          aria-label="Search"
          className="
            m-0 border-0 bg-transparent p-0
            text-[#1B223A]
          "
        >
          <Search
            className="h-[23px] w-[23px]"
            strokeWidth={1.5}
          />
        </button>
      </div>

      {/* Desktop buttons */}
      <div className="flex items-center gap-[10px]">
        <a
          href="#"
          className="
            flex h-[36px] items-center
            justify-center whitespace-nowrap
            rounded-[7px]
            border border-[#1B223A]
            px-[16px]
            font-['Inter']
            text-[14px] font-[400]
            leading-none text-[#1B223A]
          "
        >
          Client Login
        </a>

        <a
          href="#"
          className="
            flex h-[36px] items-center
            justify-center gap-[6px]
            whitespace-nowrap rounded-[7px]
            bg-[#061447] px-[16px]
            font-['Inter']
            text-[14px] font-[400]
            leading-none text-white
          "
        >
          Contact Us

          <ArrowRight
            className="h-[15px] w-[15px]"
            strokeWidth={1.8}
          />
        </a>
      </div>
    </div>

    {/* Mobile controls */}
    <div className="flex items-center gap-[21px] md:hidden">
      <button
        type="button"
        aria-label="Mute sound"
        className="
          border-0 bg-transparent p-0
          text-[#1B223A]
        "
      >
        <VolumeX
          className="h-[18px] w-[18px]"
          strokeWidth={1.8}
        />
      </button>

      <button
        type="button"
        aria-label="Search"
        className="
          border-0 bg-transparent p-0
          text-[#1B223A]
        "
      >
        <Search
          className="h-[22px] w-[22px]"
          strokeWidth={1.6}
        />
      </button>

      <button
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={isMobileMenuOpen}
        onClick={handleMobileMenuOpen}
        className="
          border-0 bg-transparent p-0
          text-[#1B223A]
        "
      >
        <Menu
          className="h-[27px] w-[27px]"
          strokeWidth={1.4}
        />
      </button>
    </div>

  </div>
</nav>
{isMobileMenuOpen && (
  <div
    className="
      fixed inset-0 z-[100]
      flex h-[100dvh] flex-col
      bg-white
      md:hidden
    "
  >
    {/* Mobile menu top */}
    <div
      className="
        flex h-[64px] shrink-0
        items-center justify-between
        px-[22px]
      "
    >
      <img
        src={i2c_logo}
        alt="i2c logo"
        className="h-[46px] w-[46px] object-contain"
      />

      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={() => setIsMobileMenuOpen(false)}
        className="
          border-0 bg-transparent p-0
          text-[#1B223A]
        "
      >
        <X
          className="h-[25px] w-[25px]"
          strokeWidth={1.5}
        />
      </button>
    </div>

    {/* Mobile navigation links */}
    <div
      className="
        flex flex-col items-start
        gap-[21px]
        px-[27px] pt-[12px]
      "
    >
      {navMenus.map((menu) => {
        return (
          <button
            key={menu.id}
            type="button"
            onClick={() => {
              setIsMobileMenuOpen(false)
            }}
            className="
              border-0 bg-transparent p-0
              text-left
              font-['Inter']
              text-[23px] font-[400]
              leading-[25px]
              tracking-[-0.8px]
              text-[#1B223A]
            "
          >
            {menu.label}
          </button>
        )
      })}
    </div>

    {/* Mobile bottom contact area */}
    <div
      className="
        mt-auto shrink-0
        border-t border-[#E7ECF3]
        bg-white
        px-[22px] pb-[18px] pt-[14px]
      "
    >
      <a
        href="#"
        onClick={() => setIsMobileMenuOpen(false)}
        className="
          flex h-[45px] w-full
          items-center justify-center
          gap-[5px]
          rounded-[7px]
          bg-[#1434CB]
          font-['Inter']
          text-[14px] font-[400]
          text-white
        "
      >
        Contact Us

        <ArrowRight
          className="h-[14px] w-[14px]"
          strokeWidth={1.7}
        />
      </a>
    </div>
  </div>
)}    

    {selectedMenu && (
  <>
    <button
      type="button"
      aria-label="Close navigation menu"
      onClick={() => setOpenMenu(null)}
      className="
        fixed inset-x-0 bottom-0 top-[84px] z-30
        cursor-default
        border-0 bg-[#CCCED3]/20 p-0
      "
    />

    <MegaMenu menu={selectedMenu} />
  </>
)}
  </header>
    )
}
export default Nav