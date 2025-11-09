import { useState } from 'react'
import { Rocket, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur border-b border-gray-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 text-white">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="text-lg font-semibold tracking-tight text-gray-900">
              Cre8 Studio
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#showcase" className="hover:text-gray-900 transition-colors">Showcase</a>
            <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#cta" className="rounded-full bg-gray-900 text-white px-4 py-2 hover:bg-gray-800 transition-colors">Get Started</a>
          </nav>

          <button aria-label="Toggle Menu" onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 text-sm font-medium text-gray-700">
              <a href="#features" className="rounded-md px-3 py-2 hover:bg-gray-100">Features</a>
              <a href="#showcase" className="rounded-md px-3 py-2 hover:bg-gray-100">Showcase</a>
              <a href="#pricing" className="rounded-md px-3 py-2 hover:bg-gray-100">Pricing</a>
              <a href="#cta" className="rounded-md px-3 py-2 bg-gray-900 text-white hover:bg-gray-800">Get Started</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
