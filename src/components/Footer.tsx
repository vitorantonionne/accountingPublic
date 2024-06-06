import { CalendarDots, CalendarX, Envelope, MapPin, Phone } from '@phosphor-icons/react'
import logoTipo from '../assets/logoOsmar.png'

import styles from '../style/Footer.module.css'


export function Footer() {
  return(
    <div className={styles.footerContainer}>
      <a href="#"><img src={logoTipo} alt="Logotipo osmar contabilidade" /></a>
      <div className={styles.footerContactContainer}>
        <h3>Dados de Contato</h3>
        <ul>
          <li><span><MapPin size={26} color='#FFEF37'/></span>R. Barão de aracati</li>
          <li><span><Phone size={26}color='#FFEF37'/></span>(99)-9999999</li>
          <li><span><Envelope size={26}color='#FFEF37'/></span>e-mail</li>
        </ul>
      </div>

      <div className={styles.footerContactCalendary}>
        <h3>Horários</h3>
        <ul>
          <li><span><CalendarDots size={26}/></span>Segunda à Sexta-Feira das 09h00 às 17h00.</li>
          <li><span><CalendarX size={26}/></span>Sábados,Domingos e Feriados:Fechado.</li>
        </ul>
      </div>
    </div>
  )
}