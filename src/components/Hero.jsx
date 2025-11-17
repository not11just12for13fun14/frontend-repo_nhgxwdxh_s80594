import React from 'react'

export default function Hero() {
  return (
    <section id="hero" className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-40" aria-hidden>
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-cyan-500 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-blue-600 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              B Fitness Club Spor Salonu
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-xl">
              Modern ekipman, uzman eğitmenler ve motive edici atmosfer ile hedeflerine daha hızlı ulaş.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3">
                Ücretsiz Deneme Dersi – Book Now
              </a>
              <a href="#membership" className="inline-flex items-center justify-center rounded-md border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3">
                Üyelik Seçenekleri
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-cyan-400"></span>
                Profesyonel Eğitmenler
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-500"></span>
                Esnek Üyelik
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop"
                alt="Gym hero"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white text-black rounded-xl p-4 shadow-xl">
              <p className="text-sm font-semibold">5000+ Mutlu Üye</p>
              <p className="text-xs text-black/70">Sana uygun planı seç</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
