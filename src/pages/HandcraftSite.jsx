import React from "react";

// Handcraft Website - Single-file React component (Tailwind CSS required)
// Uses mission image from public assets at /mission.png

export default function HandcraftSite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500 text-gray-900">
      {/* NAV */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-yellow-300 flex items-center justify-center shadow-lg">🔥</div>
          <h1 className="text-white text-xl font-semibold">Flames.Blue Handcrafts</h1>
        </div>
        <nav className="space-x-4">
          <a href="#market" className="text-white hover:underline">Marketplace</a>
          <a href="#programs" className="text-white hover:underline">Programs</a>
          <a href="#register" className="bg-gradient-to-r from-orange-400 to-pink-400 text-blue-900 px-4 py-2 rounded-lg font-semibold shadow-md">Register</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
        <div className="text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">Revive & Scale Local Handcrafts</h2>
          <p className="mt-4 text-lg max-w-xl opacity-90">Support artisans who lack funding, skill development, and market access. Showcase crafts, enable registrations, and connect buyers directly.</p>

          <div className="mt-6 flex gap-3">
            <a href="#register" className="px-5 py-3 rounded-xl font-semibold bg-gradient-to-r from-orange-400 to-yellow-300 text-blue-900 transform hover:scale-105 transition inline-block">Register an Artisan</a>
            <a href="#market" className="px-5 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 transition">Explore Marketplace</a>
          </div>

          <div className="mt-6 flex gap-4">
            <div className="bg-white/10 px-3 py-2 rounded-lg">📈 Impact: 120 artisans</div>
            <div className="bg-white/10 px-3 py-2 rounded-lg">🌍 Regions: 18</div>
            <div className="bg-white/10 px-3 py-2 rounded-lg">🤝 Partners: 12</div>
          </div>
        </div>

        {/* Right visual: mission card with image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md">
            <div className="absolute -top-6 right-6 transform rotate-6 opacity-90 text-4xl">🔥</div>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <img src="/mission.png" alt="Problem statement - artisans" className="w-full h-auto object-cover" />
            </div>
            <div className="mt-3 text-sm text-white/90">Click to open full mission statement.</div>
          </div>
        </div>
      </section>

      {/* MARKETPLACE / ARTISANS */}
      <section id="market" className="max-w-6xl mx-auto px-6 py-12 bg-white rounded-t-3xl -mt-6">
        <h3 className="text-2xl font-bold text-blue-800">Featured Artisans</h3>
        <p className="mt-2 text-sm text-gray-600 max-w-2xl">Explore handcrafted products by region and category. Filter by craft type or price.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <article key={i} className="bg-white border rounded-xl p-4 shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="h-44 bg-gray-100 rounded-md mb-3 flex items-center justify-center text-gray-400">Product image</div>
              <h4 className="font-semibold text-blue-800">Artisan {i + 1} — Handloom Scarf</h4>
              <p className="text-sm text-gray-600 mt-1">Region: Andhra Pradesh</p>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-lg font-bold">₹1,200</div>
                <button className="px-3 py-1 rounded-lg bg-gradient-to-r from-orange-400 to-pink-400 text-blue-900 font-semibold">Buy</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold text-white">Growth Programs</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow">
            <h4 className="font-semibold text-blue-800">Training & Skill Development</h4>
            <p className="text-sm text-gray-600 mt-2">Hands-on workshops and online resources to improve product design and pricing.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <h4 className="font-semibold text-blue-800">Micro-Grants</h4>
            <p className="text-sm text-gray-600 mt-2">Small grants for tools, materials, and working capital.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <h4 className="font-semibold text-blue-800">Market Access</h4>
            <p className="text-sm text-gray-600 mt-2">Marketplace listings, pop-up events, and buyer matchmaking.</p>
          </div>
        </div>
      </section>

      {/* REGISTER FORM */}
      <section id="register" className="max-w-3xl mx-auto px-6 py-12 bg-white rounded-2xl shadow-lg mb-12">
        <h3 className="text-2xl font-bold text-blue-800">Artisan Registration</h3>
        <p className="text-sm text-gray-600 mt-2">Register to apply for programs or list your products. We save data to your configured backend (replace the submit handler).</p>

        <form className="mt-6 grid grid-cols-1 gap-4" onSubmit={(e) => e.preventDefault()}>
          <input className="border rounded-lg px-4 py-3" placeholder="Full name" />
          <input className="border rounded-lg px-4 py-3" placeholder="Craft type (e.g., weaving, pottery)" />
          <input className="border rounded-lg px-4 py-3" placeholder="Region / City" />
          <input className="border rounded-lg px-4 py-3" placeholder="WhatsApp number" />
          <label className="flex flex-col gap-2 text-sm text-gray-600">
            Upload sample images (2 max)
            <input type="file" accept="image/*" multiple className="mt-2" />
          </label>

          <div className="flex items-center gap-3">
            <input type="checkbox" id="consent" />
            <label htmlFor="consent" className="text-sm text-gray-600">I consent to share details with the Flames.Blue team.</label>
          </div>

          <div className="flex items-center gap-3">
            <button type="submit" className="px-5 py-3 rounded-xl bg-gradient-to-r from-orange-400 to-pink-400 text-blue-900 font-semibold">Submit</button>
            <button type="reset" className="px-4 py-2 rounded-xl border">Clear</button>
          </div>
        </form>
      </section>

      <footer className="bg-blue-800 text-white py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div>© {new Date().getFullYear()} Flames.Blue Handcrafts • Built for community impact</div>
          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="#" className="underline">Privacy</a>
            <a href="#" className="underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
