export default function ClusterIcon({ size=36 }){
  const s = size
  return (
    <svg width={s} height={s} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="12" r="6" fill="#FF8C00"/>
      <circle cx="36" cy="12" r="6" fill="#FFB84D"/>
      <circle cx="12" cy="36" r="6" fill="#FFB84D"/>
      <circle cx="36" cy="36" r="6" fill="#FF8C00"/>
      <circle cx="24" cy="24" r="6" fill="#FFD27F"/>
      <path d="M18 12h12M12 18v12M36 18v12M18 36h12M16 16l8 8m-8 16l8-8m16-16l-8 8m8 16l-8-8" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}