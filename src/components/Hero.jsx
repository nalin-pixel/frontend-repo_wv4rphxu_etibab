import { motion } from 'framer-motion'

const FlameButton = ({ children, onClick, outline }) => (
  <button
    onClick={onClick}
    className={
      outline
        ? 'px-5 py-3 rounded-xl border border-[#0B63D1] text-[#0B63D1] hover:bg-[#0B63D1]/10 transition-colors'
        : 'px-5 py-3 rounded-xl text-white bg-gradient-to-r from-[#ff6a00] via-[#ff8a3d] to-[#ffd36b] hover:opacity-95 shadow-[0_6px_18px_rgba(255,106,0,0.35)] transition-opacity'
    }
  >
    {children}
  </button>
)

export default function Hero({ onOpenMission }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0B63D1]" />
      <div className="absolute inset-0 opacity-[0.08] bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'120\' height=\'120\' viewBox=\'0 0 120 120\'><path d=\'M0 60h120M60 0v120\' stroke=\'%23ffffff\' stroke-opacity=\'0.5\' stroke-width=\'0.5\'/></svg>')]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-white">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Revive & Scale Local Handcraft — Connect, Learn, Sell.
          </h1>
          <p className="mt-4 text-blue-100 max-w-xl">
            A hopeful, community-first initiative helping artisans access markets, skill development and financing.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <FlameButton onClick={() => document.getElementById('register').scrollIntoView({ behavior: 'smooth' })}>
              Register an Artisan
            </FlameButton>
            <FlameButton outline onClick={() => window.location.href = '#marketplace'}>
              Explore Marketplace
            </FlameButton>
          </div>

          <div className="mt-8">
            <button onClick={onOpenMission} className="text-blue-100 underline underline-offset-4 hover:text-white">
              Read our problem statement
            </button>
          </div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative p-3 rounded-2xl bg-white/10 backdrop-blur border border-white/20"
          >
            <div className="absolute -left-2 top-8 w-3 h-3 rounded-full bg-gradient-to-b from-[#ff6a00] to-[#ffd36b] animate-ping" />
            <img src="/mission.png" alt="Problem statement: challenges artisans face and how the initiative helps" className="rounded-xl w-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
