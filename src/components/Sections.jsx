import { useEffect, useState } from 'react'
import { apiGet } from '../lib/api'

export function FeaturedArtisans() {
  const [items, setItems] = useState([])
  useEffect(() => {
    apiGet('/api/artisans?featured=true&limit=6').then(setItems).catch(() => setItems([]))
  }, [])
  return (
    <section id="marketplace" className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Featured Artisans</h2>
        <a href="#" className="text-[#0B63D1]">View all</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.length === 0 && (
          <p className="text-gray-500">Profiles will appear here as they get added.</p>
        )}
        {items.map((a) => (
          <article key={a.id || a._id} className="group bg-white rounded-2xl border shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="aspect-[4/3] bg-gray-100">
              {a.avatar_url ? (
                <img src={a.avatar_url} alt={`${a.name} artisan`} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-50 to-orange-50" />
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">{a.name}</h3>
              <p className="text-sm text-gray-600">{a.craft_type} • {a.region}</p>
              <div className="mt-3 flex items-center gap-2">
                <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-[#ff6a00]/10 to-[#ffd36b]/20 text-[#ff6a00]">Featured</span>
                {a.price_range && <span className="text-xs text-gray-500">{a.price_range}</span>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export function ImpactStats() {
  const stats = [
    { label: 'Artisans onboarded', value: '1,250+' },
    { label: 'Products listed', value: '8,400+' },
    { label: 'Avg. income uplift', value: '22%' },
    { label: 'Partner orgs', value: '35' },
  ]
  return (
    <section className="bg-[#0B63D1] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl font-bold">{s.value}</div>
            <div className="mt-1 text-blue-100">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
