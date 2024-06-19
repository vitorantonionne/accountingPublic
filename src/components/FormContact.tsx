import { FormEvent, useState } from "react"

import styles from '../style/FormContact.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export function FormContact() {
  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  })

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const message = `Olá , vim do site , quero mais informaçoes \nAssunto: \n${subject}`
    const encodedMessage = encodeURIComponent(message)
    const phoneNumber = '5585991795541'

    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`

    window.open(whatsappURL, '_blank')

    setName('')
    setEmail('')
    setSubject('')
  }
  
  return(
    <div className={styles.formContent} data-aos="fade-up">
      <h4>Fale Conosco</h4>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => 
              setName(e.target.value) } 
              required
              placeholder="Nome"
              />
        </label>

        <label>
          <input 
            type="text" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
            placeholder="E-mail"
            />
        </label>
        
        <textarea
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Menssagem"
          required
          />

        <footer className={styles.footer}>
          <button type="submit">
            Enviar
          </button>
        </footer>
      </form>
    </div>
  )
}