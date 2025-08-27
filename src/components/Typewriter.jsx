import { useEffect, useState } from 'react'

export default function Typewriter({ prefix="Hey There, I'm ", name='Raviteja', speed=95 }){
  const [p, setP] = useState('')
  const [n, setN] = useState('')
  useEffect(()=>{
    let i=0, j=0
    const t1 = setInterval(()=>{
      i++; setP(prefix.slice(0,i))
      if(i >= prefix.length){ clearInterval(t1)
        const t2 = setInterval(()=>{
          j++; setN(name.slice(0,j))
          if(j >= name.length){ clearInterval(t2) }
        }, speed)
      }
    }, speed)
    return ()=>{}
  }, [prefix, name, speed])
  return (
    <h1 className="hero-title">
      <span>{p}</span>
      <br className="hero-line-break" />
      <span className="gradient">{n}</span>
    </h1>
  )
}
