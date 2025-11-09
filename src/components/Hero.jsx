import Spline from '@splinetool/react-spline'
import { Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-28" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4C9K7mQkzctK-3pI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,255,255,0.9),transparent)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[70vh]">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-xs font-medium text-gray-600 backdrop-blur">
                <Star className="h-3.5 w-3.5 text-yellow-500" />
                Introducing the fastest way to craft stunning web apps
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
                Build, launch, and iterate in minutes
              </h1>
              <p className="text-lg text-gray-600 max-w-xl">
                Create interactive experiences with 3D scenes, animations, and modern design without the heavy lifting. Perfect for startups, portfolios, and product demos.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#cta" className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 font-semibold text-white shadow hover:bg-gray-800">
                  Get Started Free
                </a>
                <a href="#showcase" className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-900 hover:bg-gray-50">
                  See Showcase
                </a>
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden border border-gray-200 bg-white/70 backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-blue-500/10" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="rounded-2xl bg-white/80 backdrop-blur border border-gray-200 p-4">
                  <p className="text-sm text-gray-600">
                    Drag, click, and explore the 3D scene in the background. It’s fully interactive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
