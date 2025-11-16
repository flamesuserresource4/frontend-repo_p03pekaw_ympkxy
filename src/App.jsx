import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Booking from './components/Booking'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <section id="about" className="py-16 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">About Our Clinic</h2>
              <p className="mt-4 text-slate-600">
                We’re a patient-first dental practice focused on comfort and exceptional results. Our clinic uses modern technology, digital X‑rays, and gentle techniques to make every visit stress-free.
              </p>
              <ul className="mt-4 space-y-2 text-slate-700 list-disc list-inside">
                <li>Family-friendly care for all ages</li>
                <li>Emergency appointments available</li>
                <li>Transparent pricing with no surprises</li>
              </ul>
            </div>
            <div>
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-white to-sky-100 border border-sky-100 shadow-inner" />
            </div>
          </div>
        </section>
        <Booking />
        <Contact />
        <footer className="py-10 border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-600">© {new Date().getFullYear()} BlueSmile Dental. All rights reserved.</p>
            <a href="/test" className="text-slate-500 hover:text-slate-700">System status</a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
