import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setStatus(null)
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to send')
      setStatus({ type: 'success', message: 'Thanks! We will get back to you shortly.' })
      setForm({ name: '', email: '', message: '' })
    } catch (e) {
      setStatus({ type: 'error', message: e.message })
    }
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">Contact Us</h2>
        <p className="mt-2 text-slate-600">We’d love to hear from you.</p>

        <form onSubmit={submit} className="mt-8 grid gap-4 bg-slate-50 p-6 rounded-xl border border-slate-200">
          {status && (
            <div className={`${status.type === 'success' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'} border px-4 py-3 rounded`}>{status.message}</div>
          )}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-700">Name</label>
              <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" />
            </div>
            <div>
              <label className="block text-sm text-slate-700">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-slate-700">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} rows="4" required className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" />
          </div>
          <div className="flex justify-end">
            <button className="px-6 py-3 rounded-md bg-sky-600 text-white hover:bg-sky-700">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  )
}
