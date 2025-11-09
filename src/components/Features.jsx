import { Sparkles, Palette, Layers, Zap } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'AI-assisted flow',
    desc: 'From idea to polished sections with smart defaults and clean structure.'
  },
  {
    icon: Palette,
    title: 'Beautiful by default',
    desc: 'Thoughtful spacing, cohesive colors, and refined typography out of the box.'
  },
  {
    icon: Layers,
    title: 'Composable blocks',
    desc: 'Mix and match focused components to ship new sections in seconds.'
  },
  {
    icon: Zap,
    title: 'Fast & responsive',
    desc: 'Optimized for performance with a smooth experience on every device.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Everything you need to impress</h2>
          <p className="mt-3 text-gray-600">Carefully crafted building blocks that look great and work beautifully together.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
