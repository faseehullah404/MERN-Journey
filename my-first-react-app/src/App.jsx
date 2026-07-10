import { useState } from "react";

const properties = [
  {
    id: 1,
    title: "Modern Family House",
    location: "DHA Phase 6, Lahore",
    price: "PKR 4.5 Crore",
    type: "House",
    beds: 5,
    baths: 6,
  },
  {
    id: 2,
    title: "Luxury City Apartment",
    location: "Gulberg, Lahore",
    price: "PKR 2.2 Crore",
    type: "Apartment",
    beds: 3,
    baths: 3,
  },
  {
    id: 3,
    title: "Commercial Office Space",
    location: "Blue Area, Islamabad",
    price: "PKR 3.8 Crore",
    type: "Commercial",
    beds: 0,
    baths: 2,
  },
];

function Navbar() {
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <h1 className="text-2xl font-bold text-emerald-600">
          Property<span className="text-slate-900">Hub</span>
        </h1>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="font-medium text-slate-600 transition hover:text-emerald-600"
          >
            Home
          </a>

          <a
            href="#properties"
            className="font-medium text-slate-600 transition hover:text-emerald-600"
          >
            Properties
          </a>

          <a
            href="#about"
            className="font-medium text-slate-600 transition hover:text-emerald-600"
          >
            About
          </a>
        </div>

        <button className="rounded-lg bg-emerald-600 px-5 py-2.5 font-semibold text-white transition hover:bg-emerald-700">
          Contact Us
        </button>
      </div>
    </nav>
  );
}

function PropertyCard({ property }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-52 items-center justify-center bg-gradient-to-br from-emerald-100 to-slate-200">
        <span className="text-6xl">🏠</span>
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
            {property.type}
          </span>

          <span className="font-bold text-emerald-600">
            {property.price}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900">
          {property.title}
        </h3>

        <p className="mt-2 text-slate-500">
          📍 {property.location}
        </p>

        <div className="mt-5 flex gap-5 border-t border-slate-100 pt-4 text-sm text-slate-600">
          {property.beds > 0 && <span>🛏 {property.beds} Beds</span>}
          <span>🚿 {property.baths} Baths</span>
        </div>
      </div>
    </article>
  );
}

function App() {
  const [showProperties, setShowProperties] = useState(true);

  function handlePropertyVisibility() {
    setShowProperties(!showProperties);
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main>
        <section
          id="home"
          className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
            <div>
              <span className="inline-block rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
                Find your perfect property
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Your dream property is only a{" "}
                <span className="text-emerald-400">click away.</span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Discover houses, apartments and commercial spaces from trusted
                property agents across Pakistan.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#properties"
                  className="rounded-xl bg-emerald-500 px-7 py-3.5 text-center font-bold text-white transition hover:bg-emerald-400"
                >
                  Explore Properties
                </a>

                <button className="rounded-xl border border-slate-600 px-7 py-3.5 font-bold text-white transition hover:border-white hover:bg-white hover:text-slate-900">
                  List Your Property
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
              <div className="rounded-2xl bg-white p-7 shadow-2xl">
                <h3 className="text-xl font-bold text-slate-900">
                  Search Properties
                </h3>

                <div className="mt-6 space-y-4">
                  <input
                    type="text"
                    placeholder="Enter location..."
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  />

                  <select className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-emerald-500">
                    <option>Property type</option>
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Commercial</option>
                  </select>

                  <button className="w-full rounded-xl bg-emerald-600 px-5 py-3 font-bold text-white transition hover:bg-emerald-700">
                    Search Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="properties"
          className="mx-auto max-w-7xl px-6 py-20"
        >
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="font-bold uppercase tracking-wider text-emerald-600">
                Featured listings
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                Explore our latest properties
              </h2>

              <p className="mt-3 text-slate-600">
                Carefully selected properties from popular locations.
              </p>
            </div>

            <button
              onClick={handlePropertyVisibility}
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-emerald-600 hover:text-emerald-600"
            >
              {showProperties ? "Hide Properties" : "Show Properties"}
            </button>
          </div>

          {showProperties ? (
            <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {properties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
              <p className="text-lg font-medium text-slate-600">
                Properties are currently hidden.
              </p>
            </div>
          )}
        </section>
      </main>

      <footer className="bg-slate-950 px-6 py-8 text-center text-slate-400">
        <p>© 2026 PropertyHub. Built with React and Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;
