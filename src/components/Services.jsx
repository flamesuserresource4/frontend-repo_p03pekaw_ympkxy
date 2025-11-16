import { useEffect, useState } from 'react'

export default function Services() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/services`)
        const data = await res.json()
        setServices(data.services || [])
      } catch (e) {
        setServices([
          { name: 'Dental Cleaning', price: 79, description: 'Routine prophylaxis and polishing' },
          { name: 'Whitening', price: 199, description: 'In-office whitening treatment' },
          { name: 'Checkup & X‑Rays', price: 129, description: 'Comprehensive exam with digital X‑rays' },
          { name: 'Fillings', price: 149, description: 'Tooth-colored composite fillings' },
        ])
      } finally {
        setLoading(false)
      }
    }
    fetchServices()
  }, [])

  return (
    <section id="services" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">Our Services</h2>
        <p className="mt-2 text-slate-600">Transparent pricing and gentle care.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(loading ? Array.from({ length: 4 }) : services).map((svc, i) => (
            <div key={i} className="rounded-xl border border-slate-200 p-5 hover:shadow-lg transition-shadow">
              {loading ? (
                <div className="animate-pulse space-y-3">
                  <div className="h-6 bg-slate-200 rounded w-2/3" />
                  <div className="h-4 bg-slate-200 rounded w-1/2" />
                  <div className="h-4 bg-slate-200 rounded w-full" />
                </div>
              ) : (
                <>
                  <h3 className="text-lg font-semibold text-slate-800">{svc.name}</h3>
                  <p className="text-sky-600 font-bold text-xl">${svc.price}</p>
                  <p className="text-slate-600 mt-1 text-sm">{svc.description}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
