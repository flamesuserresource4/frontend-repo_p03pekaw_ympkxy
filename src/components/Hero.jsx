export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-b from-sky-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Gentle, modern dental care for brighter, healthier smiles
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            From routine cleanings to cosmetic treatments, our friendly team makes every visit comfortable and stress-free.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a href="#appointments" className="inline-flex items-center px-6 py-3 rounded-md bg-sky-600 text-white hover:bg-sky-700 transition-colors">Book an Appointment</a>
            <a href="#services" className="inline-flex items-center px-6 py-3 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50">View Services</a>
          </div>
          <div className="mt-6 text-slate-500 text-sm">
            Open Mon–Fri 8:00–18:00 • Emergency care available
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-sky-200 via-white to-cyan-100 shadow-inner border border-sky-100" />
          <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-2xl bg-white/70 backdrop-blur border border-slate-200 shadow" />
          <div className="absolute -top-6 -right-8 w-40 h-40 rounded-full bg-sky-100 border border-sky-200" />
        </div>
      </div>
    </section>
  )
}
