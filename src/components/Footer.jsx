export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <p>© <span id="year">{new Date().getFullYear()}</span> Raviteja Buchaiahgari — All rights reserved.</p>
      </div>
    </footer>
  )
}
