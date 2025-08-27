import { SITE } from '../config'

export default function HeroArt(){
  return (
    <div className="art" role="img" aria-label="Raviteja profile">
      <span className="ring dotted r3"></span>
      <span className="ring dotted r2"></span>
      <span className="ring dotted r1"></span>
      <img src={SITE.PROFILE_IMG} className="photo-circle" alt="Raviteja Buchaiahgari" />
      <span className="chip chip-eat">EAT</span>
      <span className="chip chip-code">CODE</span>
      <span className="chip chip-sleep">SLEEP</span>
    </div>
  )
}
