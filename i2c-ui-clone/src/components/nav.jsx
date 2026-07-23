import i2c_logo from "../assets/i2c-logo.svg"
import { useEffect, useState } from "react"
import MegaMenu from "./MegaMenu"
import { VolumeX, Menu, Search, ArrowRight } from "lucide-react"
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
            ],
          },

          {
            title: "Developers",
            links: ["API Library"],
          },
        ],
      },
    ],

    promo: {
      description:
        "We help financial leaders move fast and stay ahead.",
      linkText: "Fuel your future",
      image: null,
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
      image: null,
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
    linkText: "Reimagine what's possible",
    image: null,
  },
}
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
    image: null,
  },
}
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
},
  ],

  promo: {
    description:
      'i2c Named “Overall FinTech Company of the Year” in 2026 FinTech Breakthrough Awards',
    linkText: "Outperform industry standards",
    image: null,
  },
}
]


function Nav(){
    const [openMenu, setOpenMenu] = useState(null)
    const [isScrolled, setIsScrolled] = useState(false)
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

        
    return(
  <header className="w-full bg-white">
    <nav className="mx-auto grid h-[84px] w-[1230px] grid-cols-[1fr_auto] items-center gap-[70px]">

  {/* Left column */}
  <div className="flex min-w-0 items-center gap-[28px]">
    <img
      src={i2c_logo}
      alt="i2c logo"
      className="h-[52px] w-[52px] shrink-0 object-contain"
    />

    {navMenus.map((menu) => {
      

      return (
        <button
          key={menu.id}
          type="button"
          onClick={() => handleMenuClick(menu.id)}
          className="m-0 whitespace-nowrap border-0 bg-transparent p-0 font-['Inter'] text-[16px] font-[500] leading-[22px] text-[#1B223A]"
        >
          {menu.label}
        </button>
      )
    })}
  </div>

  {/* Right column */}
  <div className="flex items-center justify-end gap-[28px]">

    {/* Icons */}
    <div className="flex items-center gap-[22px]">
      <button
        type="button"
        aria-label="Mute sound"
        className="m-0 border-0 bg-transparent p-0 text-[#1B223A]"
      >
        <VolumeX
          className="h-[18px] w-[18px]"
          strokeWidth={1.7}
        />
      </button>

      <button
        type="button"
        aria-label="Open menu"
        className="m-0 border-0 bg-transparent p-0 text-[#1B223A]"
      >
        <Menu
          className="h-[27px] w-[27px]"
          strokeWidth={1.4}
        />
      </button>

      <button
        type="button"
        aria-label="Search"
        className="m-0 border-0 bg-transparent p-0 text-[#1B223A]"
      >
        <Search
          className="h-[23px] w-[23px]"
          strokeWidth={1.5}
        />
      </button>
    </div>

    {/* Login and contact buttons */}
    <div className="flex items-center gap-[10px]">
      <a
        href="#"
        className="flex h-[36px] items-center justify-center whitespace-nowrap rounded-[7px] border border-[#1B223A] px-[16px] font-['Inter'] text-[14px] font-[300] leading-none text-[#1B223A]"
      >
        Client Login
      </a>

      <a
        href="#"
        className="flex h-[36px] items-center justify-center gap-[6px] whitespace-nowrap rounded-[7px] bg-[#061447] px-[16px] font-['Inter'] text-[14px] font-[300] leading-none text-white"
      >
        Contact Us

        <ArrowRight
          className="h-[15px] w-[15px]"
          strokeWidth={1.8}
        />
      </a>
    </div>

  </div>
</nav>
    

    {selectedMenu && (
      <MegaMenu menu={selectedMenu} />
    )}
  </header>
    )
}
export default Nav