import { CalendarDots, CalendarX, Envelope, MapPin, Phone } from '@phosphor-icons/react'
import logoTipo from '../assets/logoOsmar.png'

import styles from '../style/Footer.module.css'


export function Footer() {
  return(
    <div className={styles.footerContainer}>

      <ul className={styles.footerImg}>
        <a href="#"><img src={logoTipo} alt="Logotipo osmar contabilidade" /></a>
        <p>CNPJ: 05.789.851/0001-89</p>
      </ul>

      <ul className={styles.footerContactContainer}>
        <h3>Dados de Contato</h3>
        <li><span><MapPin size={22} color='#FFEF37'/></span>R.Pereira Filgueiras, 1310 - Sala 103 - Aldeota</li>
        <li><span><Phone size={22}color='#FFEF37'/></span>(99)-9999999</li>
        <li><span><Envelope size={22}color='#FFEF37'/></span>e-mail</li>
      </ul>

      <ul className={styles.footerContactCalendary}>
        <h3>Horários</h3>
        <li><span><CalendarDots size={22} color='#FFEF37'/></span>Segunda à Sexta-Feira das 09h00 às 17h00.</li>
        <li><span><CalendarX size={22} color='#FFEF37'/></span>Sábados, Domingos e Feriados Fechado.</li>
      </ul>

    </div>
  )
}