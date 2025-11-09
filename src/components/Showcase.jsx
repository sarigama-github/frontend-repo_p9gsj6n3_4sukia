import { useEffect, useState } from 'react'

const projects = [
  {
    title: 'Product Launch Site',
    img: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Portfolio Concept',
    img: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: '3D Experience',
    img: 'https://images.unsplash.com/photo-1497215728101-4950efc3a6f8?q=80&w=1400&auto=format&fit=crop',
  },
]

export default function Showcase() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section id="showcase" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Showcase</h2>
            <p className="text-gray-600 mt-2">A few examples of what you can build.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <img src={p.img} alt={p.title} className={`h-64 w-full object-cover transition-transform duration-500 ${mounted ? 'group-hover:scale-105' : ''}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-lg font-semibold">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
