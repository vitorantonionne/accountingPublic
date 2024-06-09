import { About } from "./components/About.tsx"
import { Header } from "./components/Header.tsx"
import { Servicos } from "./components/Servicos.js"
import { Utilities } from "./components/Utilities.tsx"
import { NosEscolher } from "./components/NosEscolher.tsx"
import { Contact } from "./components/Contact.tsx"

import './global.css'
import { Footer } from "./components/Footer.tsx"
import { DigitalContact } from "./components/DigitalContact.tsx"

export function App() {
  return (
    <div>
      <Header />
      <DigitalContact />
      <About />
      <NosEscolher />
      <Utilities />
      <article>
        <Servicos />
        <Contact />
      </article>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
