import { useEffect, useRef, useState } from 'react'

export default function Reveal({ children, className='' }){
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(()=>{
    const node = ref.current
    if(!node) return
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting) setVisible(true) })
    }, { threshold: 0.2 })
    io.observe(node)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal ${visible ? 'in-view' : ''} ${className}`.trim()}>
      {children}
    </div>
  )
}
