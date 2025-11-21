import { useState } from 'react'
import { apiPost } from '../lib/api'

export default function RegisterForm() {
  const [form, setForm] = useState({ name: '', craft_type: '', location: '', phone: '', email: '', consent: false })
  const [img1, setImg1] = useState('')
  const [img2, setImg2] = useState('')
  const [status, setStatus] = useState(null)

  const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })

  const handleFile = async (e, which) => {
    const file = e.target.files?.[0]
    if (!file) return
    const b64 = await toBase64(file)
    which === 1 ? setImg1(b64) : setImg2(b64)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const payload = { ...form, image1_base64: img1 || undefined, image2_base64: img2 || undefined, consent: !!form.consent }
      const res = await apiPost('/api/register', payload)
      setStatus(`Thanks! Your ID: ${res.id}${res.forwarded ? ' • synced to Google Sheets' : ''}`)
    } catch (err) {
      setStatus(`Submission failed: ${err.message}`)
    }
  }

  const shareWhatsApp = () => {
    const text = encodeURIComponent('Join our Handcraft Bridge initiative. Register here: ' + window.location.href)
    window.open('https://wa.me/?text=' + text, '_blank')
  }

  return (
    <section id="register" className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Register an Artisan</h2>
      <form onSubmit={onSubmit} className="bg-white rounded-2xl border p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="mt-1 w-full border rounded-lg p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Craft Type</label>
          <input required value={form.craft_type} onChange={(e)=>setForm({...form, craft_type:e.target.value})} className="mt-1 w-full border rounded-lg p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input required value={form.location} onChange={(e)=>setForm({...form, location:e.target.value})} className="mt-1 w-full border rounded-lg p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone / WhatsApp</label>
          <input required value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} className="mt-1 w-full border rounded-lg p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email (optional)</label>
          <input value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} className="mt-1 w-full border rounded-lg p-2" />
        </div>
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Sample Image 1</label>
            <input type="file" accept="image/*" onChange={(e)=>handleFile(e,1)} className="mt-1 w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Sample Image 2</label>
            <input type="file" accept="image/*" onChange={(e)=>handleFile(e,2)} className="mt-1 w-full" />
          </div>
        </div>
        <div className="md:col-span-2 flex items-center gap-2">
          <input id="consent" type="checkbox" checked={!!form.consent} onChange={(e)=>setForm({...form, consent:e.target.checked})} />
          <label htmlFor="consent" className="text-sm text-gray-700">I consent to be contacted and for my details to be stored for program outreach.</label>
        </div>
        <div className="md:col-span-2 flex items-center gap-3">
          <button className="px-5 py-3 rounded-xl text-white bg-gradient-to-r from-[#ff6a00] via-[#ff8a3d] to-[#ffd36b]">Submit</button>
          <button type="button" onClick={shareWhatsApp} className="px-5 py-3 rounded-xl border border-[#0B63D1] text-[#0B63D1]">Share via WhatsApp</button>
        </div>
      </form>
      {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
    </section>
  )
}
