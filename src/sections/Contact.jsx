import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { EMAILJS } from '../config'
import { MapPin, Mail, Phone, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('')

  useEffect(() => {
    try {
      emailjs.init(EMAILJS.PUBLIC_KEY)
    } catch (e) { console.warn('EmailJS init error', e) }
  }, [])

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('Sending...')
    const form = formRef.current
    if (!form) return
    if (form['_honey'] && form['_honey'].value) return

    const payload = {
      from_name: form.from_name.value,
      from_email: form.from_email.value,
      message: form.message.value,
      reply_to: form.from_email.value,
      page_url: document.referrer || window.location.href,
    }

    try {
      let ok = false; console.log('EmailJS: attempting send', payload)
      try {
        const r = await emailjs.send(EMAILJS.SERVICE_ID, EMAILJS.TEMPLATE_ID, payload)
        ok = (r && (r.status === 200 || r.text === 'OK'))
        if (!ok) throw new Error('Unexpected response from send')
      } catch (errSend) {
        console.warn('emailjs.send failed, falling back to sendForm:', errSend);
        const r2 = await emailjs.sendForm(EMAILJS.SERVICE_ID, EMAILJS.TEMPLATE_ID, form)
        ok = (r2 && (r2.status === 200 || r2.text === 'OK'))
      }
      if (ok) { setStatus('Thanks! Your message has been sent.'); form.reset() }
      else throw new Error('EmailJS did not confirm success.')
    } catch (err) {
      console.error(err)
      setStatus('Oops, something went wrong. You can email me at rbuchaia@asu.edu.')
    }
  }

  return (
    <section id="contact" className="section container">
      <h2 className="section-title">Contact</h2>
      <div className="contact-grid">
        <aside className="contact-side">
          <div className="card">
            <h3>Direct</h3>
            <ul className="contact-list modern">
              <li><MapPin size={18} className="cl-icon" /><span>Tempe, AZ</span></li>
              <li><Mail size={18} className="cl-icon" /><a href="mailto:rbuchaia@asu.edu">rbuchaia@asu.edu</a></li>
              <li><Phone size={18} className="cl-icon" /><a href="tel:+16024278809">(602)-427-8809</a></li>
              <li><Linkedin size={18} className="cl-icon" /><a href="https://www.linkedin.com/in/rteja-buchaiah/" target="_blank" rel="noopener">LinkedIn</a></li>
              <li><Github size={18} className="cl-icon" /><a href="https://github.com/raviteja-1301" target="_blank" rel="noopener">GitHub</a></li>
            </ul>
          </div>
        </aside>
        <div className="contact-card">
          <h3>Send me a message</h3>
          <p className="muted">I'll get back to you at the email you provide.</p>
          <form ref={formRef} className="form-grid" onSubmit={onSubmit}>
            <input type="text" name="from_name" placeholder="Your name" required />
            <input type="email" name="from_email" placeholder="Your email" required />
            <textarea name="message" rows="6" placeholder="Your message" required></textarea>
            <input type="text" name="_honey" style={{ display: 'none' }} readOnly />
            <button className="btn primary cta" type="submit">Send Message</button>
            <p className="muted" role="status" aria-live="polite">{status}</p>
          </form>
        </div>
      </div>
    </section>
  )
}