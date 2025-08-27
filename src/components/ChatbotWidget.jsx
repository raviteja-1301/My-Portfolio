import React, { useEffect, useRef, useState } from 'react'
import './chatbot.css'

const PROFILE = {
  education: "M.S. Information Technology, Arizona State University (Tempe)",
  graduation: "December 2025",
  portfolioTech: ["React 18", "Vite 5", "EmailJS", "lucide-react", "Vanilla CSS"],
}

function BotIcon(){ return (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a2 2 0 0 0-2 2v1H8a4 4 0 0 0-4 4v3a7 7 0 0 0 7 7h2a7 7 0 0 0 7-7V9a4 4 0 0 0-4-4h-2V4a2 2 0 0 0-2-2zm-1 6h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2zM7 11a1 1 1 1 1 0 2 1 1 0 0 1 0-2zm10 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>
)}

function renderText(t){
  if (!t) return null;
  const fixed = String(t).replace(/\\n/g, '\n');
  const parts = fixed.split('\n');
  return parts.map((part, i) => (
    <React.Fragment key={i}>{i>0 && <br/>}{part}</React.Fragment>
  ));
}

function detectSectionLink(q){
  const m = (q || '').trim().toLowerCase().replace(/[.!?]+$/,'')
  const map = {
    'home': { href:'#home', label:'Go to Home' },
    'about': { href:'#about', label:'Go to About' },
    'experience': { href:'#experience', label:'Go to Experience' },
    'skills': { href:'#skills', label:'Go to Skills' },
    'projects': { href:'#projects', label:'Go to Projects' },
    'project': { href:'#projects', label:'Go to Projects' },
    'contact': { href:'#contact', label:'Go to Contact' }
  }
  for (const key of Object.keys(map)){
    if (m.endsWith(key)) return map[key]
  }
  return null
}

const GEMINI_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent'

async function callGemini({ text, context }){
  const key = import.meta.env.VITE_GEMINI_API_KEY
  if (!key){
    return "Gemini API key is not set. Add VITE_GEMINI_API_KEY to your .env to enable AI answers. For now, ask me about Projects, Skills, Experience, or Contact. 🙂"
  }
  const prompt = [
    "You are a helpful assistant embedded in Ravi's portfolio website.",
    "Use the provided context (projects and visible sections) if relevant.",
    "Be concise and friendly. If the user asks about navigating, reference section IDs.",
    "",
    "Context:",
    context,
    "",
    "User:",
    text
  ].join("\\n")

  const body = { contents: [{ role: "user", parts: [{ text: prompt }] }] }
  const url = `${GEMINI_ENDPOINT}?key=${encodeURIComponent(key)}`
  const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
  if (!res.ok){
    const msg = await res.text().catch(()=>res.statusText)
    throw new Error(`Gemini error: ${res.status} ${msg}`)
  }
  const data = await res.json()
  const textOut = data?.candidates?.[0]?.content?.parts?.[0]?.text
  return textOut || "I couldn't generate a response right now. Please try again."
}

export default function ChatbotWidget(){
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [showTip, setShowTip] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hi! I'm your portfolio assistant. Ask me about projects, skills, experience, or how to contact me. 😊" }
  ])
  const bodyRef = useRef(null)
  const metaRef = useRef({ projects: [], sections: [] })

  useEffect(()=>{
    const t = setTimeout(()=> setShowTip(true), 1000)
    const hide = setTimeout(()=> setShowTip(false), 7000)
    return ()=>{ clearTimeout(t); clearTimeout(hide) }
  }, [])

  useEffect(()=>{
    const projectEls = Array.from(document.querySelectorAll('#projects h3'))
    metaRef.current.projects = projectEls.map(el => el.textContent.trim()).slice(0,8)
    metaRef.current.sections = Array.from(document.querySelectorAll('main section[id]')).map(el => el.id)
  }, [])

  useEffect(()=>{
    const el = bodyRef.current
    if (!el) return
    el.scrollTop = el.scrollHeight
  }, [messages, open])

  function reply(text, link){
    setMessages(m => [...m, { role: 'bot', text, link }])
  }

  async function handleSend(userText){
    const text = userText.trim()
    if (!text) return
    setMessages(m => [...m, { role: 'user', text }])
    setInput('')

    const t = text.toLowerCase()

    // Quick local intents
    if (/(hi|hello|hey|yo)\b/.test(t)){
      reply("Hello! You can ask things like ‘Show me your projects’, ‘What are your skills?’, or ‘How can I contact you?’. 🤖")
      return
    }
    if (t.includes('project')){
      const nav = detectSectionLink(text)
      const list = metaRef.current.projects
      if (list.length){
        reply("Here are a few highlighted projects:\\n• " + list.join("\\n• ") + "\\nYou can scroll to the Projects section or type a project name for details.", nav || { href:"#projects", label:"Go to Projects" })
      }else{
        reply("You can find my work in the Projects section of this page. 📁", nav || { href:"#projects", label:"Go to Projects" })
      }
      return
    }
    if (t.includes('skill')){
      const nav = detectSectionLink(text)
      reply("Top skills you’ll see here: React, JavaScript, Node.js, Python, Data Analytics, and Cloud basics. Check the Skills section for the full set. 🔧", nav || { href:"#skills", label:"Go to Skills" })
      return
    }
    if (t.includes('experience') || t.includes('work')){
      const nav = detectSectionLink(text)
      reply("I’ve included internships and campus roles in the Experience section with quantified impact. Ask about any role. 💼", nav || { href:"#experience", label:"Go to Experience" })
      return
    }
    if (t.includes('resume') || t.includes('cv')){
      const nav = detectSectionLink(text)
      reply("Use the Contact section to request my latest resume. I can add a direct link here if you’d like. 📄", nav || { href:"#contact", label:"Go to Contact" })
      return
    }
    if (t.includes('contact') || t.includes('email') || t.includes('connect')){
      const nav = detectSectionLink(text)
      reply("Head to the Contact section at the bottom or use the form on this page to reach me quickly. ✉️", nav || { href:"#contact", label:"Go to Contact" })
      return
    }
    if (t.includes('education') || t.includes('degree')){
      const nav = detectSectionLink(text)
      reply(`Education: ${PROFILE.education}\nGraduation: ${PROFILE.graduation}`, nav)
      return
    }
    if (t.includes('graduate') || t.includes('graduat') || t.includes('pass out') || t.includes('when are you done')){
      const nav = detectSectionLink(text)
      reply(`Expected graduation: ${PROFILE.graduation}`, nav)
      return
    }
    if (t.includes('tech') && (t.includes('stack') || t.includes('used') || t.includes('build') || t.includes('built') || t.includes('portfolio'))){
      const nav = detectSectionLink(text)
      reply("Tech used for this portfolio: " + PROFILE.portfolioTech.join(', '), nav || { href:"#projects", label:"Go to Projects" })
      return
    }
    if (t.includes('raviteja') || t.includes('ravi teja') || t.includes('about you') || t.includes('who are you')){
      reply("I’m Ravi’s portfolio assistant. I can summarize projects, skills, and help you navigate this page. 🙂")
      return
    }

    // Gemini fallback
    try{
      setMessages(m => [...m, { role: 'bot', text: "Thinking…"}])
      const context = [
        `Projects: ${metaRef.current.projects.join(', ') || 'N/A'}`,
        `Sections: ${metaRef.current.sections.join(', ') || 'N/A'}`
      ].join('\\n')
      const out = await callGemini({ text, context })
      const nav = detectSectionLink(text)
      setMessages(m => {
        const copy = [...m]
        for (let i = copy.length - 1; i >= 0; i--){
          if (copy[i].role === 'bot' && copy[i].text.startsWith('Thinking')){
            copy[i] = { role: 'bot', text: out, link: nav || undefined }
            break
          }
        }
        return copy
      })
    }catch(err){
      setMessages(m => {
        const copy = [...m]
        for (let i = copy.length - 1; i >= 0; i--){
          if (copy[i].role === 'bot' && copy[i].text.startsWith('Thinking')){
            copy[i] = { role: 'bot', text: "Oops—Gemini couldn’t respond. " + (err?.message || 'Please try again.') }
            break
          }
        }
        return copy
      })
    }
  }

  const suggestions = ['Projects', 'Skills', 'Experience', 'Contact', 'Who are you?']

  return (
    <div className="rtcb-widget">
      <button className={"rtcb-fab" + (showTip && !open ? " tip-visible" : "")} aria-label="Open chat" onClick={()=>{ setOpen(o=>!o); setShowTip(false) }}>
        <BotIcon/>
      </button>

      {showTip && !open && (<>
        <div className="rtcb-beacon" aria-hidden="true"></div>
        <div className="rtcb-tip" role="status" aria-live="polite" onClick={()=>{ setOpen(true); setShowTip(false) }}>
          <span className="rtcb-tip-emoji">🤖</span>
          <span className="rtcb-tip-text">Click here for assitance by my bot</span>
        </div>
      </>)}

      <div className={"rtcb-panel " + (open ? 'open' : '')} role="dialog" aria-label="Portfolio chat">
        <div className="rtcb-header">
          <div className="rtcb-avatar">R</div>
          <div>
            <div className="rtcb-title">Ravi • Assistant</div>
            <div className="rtcb-sub">Ask me about this portfolio</div>
          </div>
        </div>

        <div className="rtcb-suggestions">
          {suggestions.map(s => (
            <button key={s} className="rtcb-chip" onClick={()=>handleSend(s)}>{s}</button>
          ))}
        </div>

        <div className="rtcb-body" ref={bodyRef}>
          {messages.map((m, i)=>(
            <div key={i} className={"rtcb-msg " + (m.role==='user' ? 'user' : 'bot')}>
              <div className="rtcb-bubble">{renderText(m.text)}{m.link ? (<div className="rtcb-navlink"><a href={m.link.href}>{m.link.label}</a></div>) : null}</div>
            </div>
          ))}
        </div>

        <div className="rtcb-input">
          <div>
            <textarea
              rows={1}
              className="rtcb-textarea"
              placeholder="Type a message…"
              value={input}
              onChange={e=>setInput(e.target.value)}
              onKeyDown={e=>{ if(e.key==='Enter' && !e.shiftKey){ e.preventDefault(); handleSend(input) } }}
            />
            <div className="rtcb-actions">
              {["🙂","👍","🚀","🤖","💼","✨"].map(em => (
                <button key={em} className="rtcb-emoji" title="Insert emoji" onClick={()=>setInput(v=> (v + (v && !v.endsWith(' ') ? ' ' : '') + em + ' '))}>{em}</button>
              ))}
            </div>
          </div>
          <button className="rtcb-send" onClick={()=>handleSend(input)} aria-label="Send">Send</button>
        </div>

        <div className="rtcb-footerlink">
          Tip: You can navigate to sections via the top navbar — I’ll keep your questions short and helpful.
        </div>
      </div>
    </div>
  )
}