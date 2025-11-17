import React from 'react'

export function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-extrabold text-gray-900">Hakkımızda</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              B Fitness Club, şehrin kalbinde yer alan modern bir spor salonudur. Kardiyodan ağırlık antrenmanına, grup derslerinden kişisel eğitime kadar geniş bir yelpazede hizmet sunar. Amacımız, her üyemize kaliteli deneyim ve sürdürülebilir sonuçlar sağlamaktır.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Premium ekipman ve hijyenik ortam</li>
              <li>• Bilimsel temelli antrenman programları</li>
              <li>• Samimi, motive eden topluluk</li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <img className="rounded-xl shadow-lg border border-gray-200" src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1600&auto=format&fit=crop" alt="About gym" />
          </div>
        </div>
      </div>
    </section>
  )
}

export function Services() {
  const services = [
    { title: 'Kişisel Antrenman', desc: 'Hedeflerine özel birebir çalışma', icon: '💪' },
    { title: 'Grup Dersleri', desc: 'Spinning, HIIT, Yoga ve daha fazlası', icon: '👥' },
    { title: 'Kardiyo Bölümü', desc: 'Koşu bantları, eliptik ve bisikletler', icon: '🏃' },
    { title: 'Ağırlık Antrenmanı', desc: 'Serbest ağırlıklar ve makineler', icon: '🏋️' },
  ]
  return (
    <section id="services" className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold">Hizmetler</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-white/10 p-6 bg-white/5">
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-3 font-semibold text-lg">{s.title}</h3>
              <p className="mt-1 text-white/70 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Membership() {
  const options = [
    { title: 'Aylık', perks: ['Sınırsız giriş', 'Tüm ekipman erişimi', 'Grup dersleri'], price: '1.200₺' },
    { title: '3 Aylık', perks: ['Sınırsız giriş', 'Vücut analizi', 'Beslenme önerileri'], price: '3.200₺' },
    { title: 'Yıllık', perks: ['Sınırsız giriş', 'Kişisel program', 'Öncelikli rezervasyon'], price: '10.500₺', popular: true },
  ]
  return (
    <section id="membership" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Üyelik Seçenekleri</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {options.map((o) => (
            <div key={o.title} className={`rounded-2xl border ${o.popular ? 'border-cyan-500 shadow-xl' : 'border-gray-200'} p-6`}>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">{o.title}</h3>
                {o.popular && <span className="text-xs font-semibold text-black bg-cyan-400 px-2 py-1 rounded">EN POPÜLER</span>}
              </div>
              <p className="mt-4 text-3xl font-extrabold text-gray-900">{o.price}</p>
              <ul className="mt-4 space-y-2 text-gray-700">
                {o.perks.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-black text-white hover:bg-gray-900 px-4 py-2 font-semibold">Hemen Başla</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Trainers() {
  const trainers = [
    { name: 'Ali Demir', role: 'Kişisel Antrenör', img: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Ece Yıldız', role: 'Grup Dersleri', img: 'https://images.unsplash.com/photo-1594737625785-c6683fc6f79e?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Mert Kaya', role: 'Kuvvet Koçu', img: 'https://images.unsplash.com/photo-1605296866985-34ba3c0bcb9b?q=80&w=1200&auto=format&fit=crop' },
  ]
  return (
    <section id="trainers" className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold">Eğitmenlerimiz</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainers.map((t) => (
            <div key={t.name} className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <img src={t.img} alt={t.name} className="h-64 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{t.name}</h3>
                <p className="text-white/70 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Gallery() {
  const imgs = [
    'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517341724275-b6b8e68e68a9?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1541534401786-2077eed87a57?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1571907480495-bb2f73665a2c?q=80&w=1200&auto=format&fit=crop',
  ]
  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Foto Galeri</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
          {imgs.map((src, i) => (
            <img key={i} src={src} alt={`gallery-${i}`} className="rounded-lg border border-gray-200 object-cover h-40 w-full" />
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  const items = [
    { name: 'Seda K.', text: 'Temiz, profesyonel ve motive edici bir ortam. Sonuçlarımı kısa sürede gördüm!' },
    { name: 'Burak A.', text: 'Eğitmenler harika, ekipmanlar yeni. Grup dersleri çok eğlenceli.' },
    { name: 'Nil Y.', text: 'Esnek üyelik seçenekleri ve güler yüzlü ekip. Kesinlikle tavsiye ederim.' },
  ]
  return (
    <section id="testimonials" className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold">Üye Yorumları</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.name} className="rounded-xl border border-white/10 p-6 bg-white/5">
              <p className="text-white/80">“{it.text}”</p>
              <p className="mt-3 font-semibold">{it.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Pricing() {
  const plans = [
    { name: 'Basic', price: '800₺/ay', features: ['Salon Kullanımı', 'Grup Derslerine Erişim'] },
    { name: 'Plus', price: '1.200₺/ay', features: ['Tüm Alanlar', 'Sınırsız Grup Dersi', '1 PT/ay'] },
    { name: 'Pro', price: '1.800₺/ay', features: ['Tüm Alanlar', 'Sınırsız Grup Dersi', '4 PT/ay', 'Vücut Analizi'] },
  ]
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Fiyatlandırma</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900">{p.name}</h3>
              <p className="mt-2 text-3xl font-extrabold text-gray-900">{p.price}</p>
              <ul className="mt-4 space-y-2 text-gray-700">
                {p.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-black text-white hover:bg-gray-900 px-4 py-2 font-semibold">Kaydol</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Hours() {
  return (
    <section id="hours" className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold">Çalışma Saatleri</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-xl border border-white/10 p-6 bg-white/5">
            <p className="font-semibold">Hafta İçi</p>
            <p className="text-white/70">06:00 - 23:00</p>
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-white/5">
            <p className="font-semibold">Cumartesi</p>
            <p className="text-white/70">08:00 - 22:00</p>
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-white/5">
            <p className="font-semibold">Pazar</p>
            <p className="text-white/70">09:00 - 21:00</p>
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-white/5">
            <p className="font-semibold">Resmi Tatiller</p>
            <p className="text-white/70">Duyurular için bizi takip edin</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function MapAndContact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">İletişim</h2>
            <p className="mt-4 text-gray-600">Adres: İnönü Cd. No:12, Kadıköy / İstanbul</p>
            <p className="text-gray-600">Telefon: 0 (532) 123 45 67</p>
            <a href="https://wa.me/905321234567" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-6 rounded-md bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-5 py-3">
              WhatsApp ile İletişim
            </a>
            <div className="mt-6">
              <h3 className="font-semibold text-gray-900">Hızlı İletişim Formu</h3>
              <form className="mt-3 space-y-3">
                <input className="w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Ad Soyad" />
                <input className="w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Telefon/E-posta" />
                <textarea className="w-full border border-gray-300 rounded-md px-3 py-2" rows="4" placeholder="Mesajınız"></textarea>
                <button type="button" className="inline-flex items-center justify-center rounded-md bg-black text-white hover:bg-gray-900 px-4 py-2 font-semibold">Gönder</button>
              </form>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow">
            <iframe
              title="Google Map"
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12039.159739196895!2d29.0221708!3d41.0227414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7c7c7c7c7c7%3A0x0!2sKad%C4%B1k%C3%B6y!5e0!3m2!1str!2str!4v1680000000000"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/70">© {new Date().getFullYear()} B Fitness Club Spor Salonu. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-4">
            <a href="#hero" className="text-white/80 hover:text-white">Yukarı Çık</a>
            <a href="tel:+905321234567" className="text-white/80 hover:text-white">Ara: 0 (532) 123 45 67</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
