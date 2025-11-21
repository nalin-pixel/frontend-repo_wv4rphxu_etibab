export default function Nav({ onRegisterClick }) {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur bg-white/70 border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-r from-[#ff6a00] via-[#ff8a3d] to-[#ffd36b]" />
          <span className="font-semibold text-[#0B63D1]">Handcraft Bridge</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#mission" className="hover:text-[#0B63D1]">Mission</a>
          <a href="#marketplace" className="hover:text-[#0B63D1]">Marketplace</a>
          <a href="#programs" className="hover:text-[#0B63D1]">Programs</a>
          <a href="#blog" className="hover:text-[#0B63D1]">Resources</a>
          <button onClick={onRegisterClick} className="px-4 py-2 rounded-xl text-white bg-gradient-to-r from-[#ff6a00] via-[#ff8a3d] to-[#ffd36b] shadow-[0_6px_18px_rgba(255,106,0,0.35)]">
            Register
          </button>
        </nav>
      </div>
    </header>
  )
}
