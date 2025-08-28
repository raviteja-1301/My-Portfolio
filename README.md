# My Portfolio + AI Chatbot (React + Vite)

A clean, fast portfolio site with a friendly chat bot. Click the chat button in the bottom‑right to ask about my **projects, skills, experience, education**, or how to **contact** me. The bot can also use Google **Gemini** (optional) for smarter answers.

---

## ✨ Features

- Modern single‑page design
- Floating **chat icon** (bottom‑right) with a short tip so visitors notice it
- The bot can:
  - list my **projects**
  - tell you my **skills** and **experience**
  - share my **education** and **graduation year**
  - add a **direct link** to a section (Projects/Skills/Experience/Contact) if you mention it at the end of your message

---

## 🛠 Tech

- **React 18** + **Vite 5**
- **Vanilla CSS** for the chat widget (lightweight)
- **Google Gemini** (optional; via API key)
- (Optional) **EmailJS** if you wire up the contact form

---

## 🚀 Run locally

```bash
npm install
npm run dev
```
Open the URL shown in the terminal (usually http://localhost:5173).

### (Optional) Turn on Gemini AI
1) Copy `.env.example` → `.env`  
2) Add your key:
```
VITE_GEMINI_API_KEY=YOUR_GOOGLE_AI_STUDIO_KEY
```
3) Restart `npm run dev`

> Without a key, the bot still answers common questions about the site.

---

## 📁 Project structure (short)

```
index.html
vite.config.js
src/
  App.jsx
  components/
    ChatbotWidget.jsx   # floating chat + Gemini integration
    chatbot.css         # widget styles + tip/beacon
  sections/             # About, Skills, Projects, Experience, Contact, etc.
```

---

## 💡 Notes

- A small **tip** appears ~1s after load to draw attention to the chat.
- If your message ends with a section name (e.g., “projects”), the bot adds a handy **anchor link** to jump there.

---

## 📬 Contact

- **Live site:** [_My Portfolio Link_](https://my-portfolio-nine-wine-44.vercel.app/)  

Thanks for visiting! If you like this, a ⭐ on the repo means a lot.
