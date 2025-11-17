import React, { useState } from 'react'

const navItems = [
  { href: '#about', label: 'Hakkımızda' },
  { href: '#services', label: 'Hizmetler' },
  { href: '#membership', label: 'Üyelik' },
  { href: '#trainers', label: 'Eğitmenler' },
  { href: '#gallery', label: 'Galeri' },
  { href: '#testimonials', label: 'Yorumlar' },
  { href: '#pricing', label: 'Fiyatlar' },
  { href: '#hours', label: 'Çalışma Saatleri' },
  { href: '#contact', label: 'İletişim' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded bg-gradient-to-br from-cyan-400 to-blue-600 grid place-items-center font-extrabold text-black">B</div>
            <span className="text-white font-semibold">B Fitness Club</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 inline-flex items-center justify-center rounded-md bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-4 py-2 transition-colors"
            >
              Ücretsiz Deneme
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded border border-white/10 text-white"
            onClick={() => setOpen(!open)}
            aria-label="Menüyü Aç/Kapat"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-black/90 border-t border-white/10">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-white/80 hover:text-white py-2">
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block mt-2 text-center rounded-md bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-4 py-2"
            >
              Ücretsiz Deneme
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
