import styles from '../style/FormContact.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

export function FormContact() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  })

  // interface FormProps  {
  //   nome: string
  //   email: string
  //   menssagem: string
  // }

  type FormProps = zod.infer<typeof newFormValidationSchema>

  const newFormValidationSchema = zod.object({
    nome: zod.string().min(1, 'Escreva seu nome'),
    email: zod.string().min(1, 'Escreva seu Email'),
    menssagem: zod.string().min(1, 'Escreva o assunto da menssagem'),
  })

  const { register, handleSubmit, reset} = useForm<FormProps>({
    resolver: zodResolver(newFormValidationSchema),
    defaultValues: {
      nome: '',
      email: '',
      menssagem: ''
    }
  })

  const handleSubmitFormUser = (data: FormProps) => {

    const message = `Olá! Vim pelo site, sou ${data.nome} gostaria de mais informações. \n\nAssunto: \n${data.menssagem}`
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
          required
          placeholder="Nome"
          {...register('nome', { required: true}) }
            />

        <input
          id="email" 
          required
          placeholder="E-mail"
          {...register('email', { required: true})}
          />

        
        <textarea
          id="messagem"
          required
          placeholder="Menssagem"
          {...register('menssagem', { required: true})}
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