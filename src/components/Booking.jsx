import { useState } from 'react'

export default function Booking() {
  const [form, setForm] = useState({ full_name: '', email: '', phone: '', preferred_date: '', service: '', notes: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          preferred_date: form.preferred_date ? new Date(form.preferred_date).toISOString() : null,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to submit')
      setStatus({ type: 'success', message: 'Appointment request sent! We will confirm shortly.' })
      setForm({ full_name: '', email: '', phone: '', preferred_date: '', service: '', notes: '' })
    } catch (e) {
      setStatus({ type: 'error', message: e.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="appointments" className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">Book an Appointment</h2>
        <p className="mt-2 text-slate-600">Tell us a bit about yourself and your preferred time.</p>

        <form onSubmit={submit} className="mt-8 grid gap-4 bg-white p-6 rounded-xl border border-slate-200">
          {status && (
            <div className={`${status.type === 'success' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'} border px-4 py-3 rounded`}>{status.message}</div>
          )}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-700">Full name</label>
              <input name="full_name" value={form.full_name} onChange={handleChange} required className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" />
            </div>
            <div>
              <label className="block text-sm text-slate-700">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-700">Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} required className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" />
            </div>
            <div>
              <label className="block text-sm text-slate-700">Preferred date & time</label>
              <input type="datetime-local" name="preferred_date" value={form.preferred_date} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-slate-700">Service</label>
            <select name="service" value={form.service} onChange={handleChange} required className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500">
              <option value="">Select a service</option>
              <option>Dental Cleaning</option>
              <option>Whitening</option>
              <option>Checkup & X‑Rays</option>
              <option>Fillings</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-slate-700">Notes</label>
            <textarea name="notes" value={form.notes} onChange={handleChange} rows="3" className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" />
          </div>
          <div className="flex justify-end">
            <button disabled={loading} className="px-6 py-3 rounded-md bg-sky-600 text-white hover:bg-sky-700 disabled:opacity-50">
              {loading ? 'Sending...' : 'Request Appointment'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
