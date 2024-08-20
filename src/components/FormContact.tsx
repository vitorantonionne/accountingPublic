import styles from '../style/FormContact.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { useForm } from "react-hook-form"

export function FormContact() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  })

  interface FormProps  {
    nome: string
    email: string
    menssagem: string
  }

  const { register, handleSubmit, reset} = useForm<FormProps>()

  const handleSubmitFormUser = (data: FormProps) => {

    const message = `Olá, vim do site, sou ${data.nome} gostaria de mais informações. \nAssunto: \n${data.menssagem}`
    const encodedMessage = encodeURIComponent(message)
    const phoneNumber = '5585999856813'

    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`

    window.open(whatsappURL, '_blank')

   reset() 
  }
  
  return(
    <div className={styles.formContent} data-aos="fade-left">
      <h4>Fale Conosco</h4>
      <form onSubmit={handleSubmit(handleSubmitFormUser)} className={styles.form}>

        <input 
          id="nome"
          placeholder="Nome"
          {...register('nome') }
            />

        <input
          id="email" 
          required
          placeholder="E-mail"
          {...register('email')}
          />

        
        <textarea
          id="messagem"
          placeholder="Menssagem"
          required
          {...register('menssagem')}
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