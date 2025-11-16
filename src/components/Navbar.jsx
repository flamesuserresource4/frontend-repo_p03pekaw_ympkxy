import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#appointments', label: 'Book' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-2">
          <span className="inline-block w-9 h-9 rounded-full bg-gradient-to-tr from-sky-500 to-cyan-400" />
          <span className="font-semibold text-slate-800 text-lg">BlueSmile Dental</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8 text-slate-700">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-sky-600 transition-colors">{item.label}</a>
          ))}
          <a href="#appointments" className="px-4 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700 transition-colors">Book Now</a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          <Menu className="w-6 h-6 text-slate-700" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block py-2 text-slate-700" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#appointments" className="block px-4 py-2 rounded-md bg-sky-600 text-white text-center" onClick={() => setOpen(false)}>Book Now</a>
          </div>
        </div>
      )}
    </header>
  )
}
