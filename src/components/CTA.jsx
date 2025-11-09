import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-gray-200 bg-white px-6 py-10 sm:px-10 shadow-sm text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Ready to create something beautiful?</h2>
          <p className="mt-3 text-gray-600">Spin up a new project and launch a stunning website today.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#" className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 font-semibold text-white hover:bg-gray-800">
              Start Building
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-900 hover:bg-gray-50">
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
