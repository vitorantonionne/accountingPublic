import { CalendarDots, CalendarX, Envelope, MapPin, Phone } from '@phosphor-icons/react'
import logoTipo from '../assets/logoOsmar.png'

import styles from '../style/Footer.module.css'


export function Footer() {
  return(
    <div className={styles.footerContainer}>
      <div className={styles.imgContainer}>
        <img src={logoTipo} alt="LogoTIPO osmar" />
      </div>
      
      <div className={styles.locationContainer}>
        <ul>
          <li><span><MapPin size={22} color='#F2F4F7'/></span>R.Pereira Filgueiras, 1310 - Sala 101 - Aldeota</li>
          <li><span><Phone size={22}color='#F2F4F7'/></span>(85) 98816 - 4544 <br /> (85) 99985 - 6813</li>
          <li><span><Envelope size={22}color='#F2F4F7'/></span>oscrar1234@gmail.com <br /> ecmdsilveira@gmail.com</li>
          <li>CRC - CE 013079/02</li>
        </ul>
      </div>
      <div className={styles.openContainer}>
        <ul>
        <li><span><CalendarDots size={22} color='#F2F4F7'/></span>Segunda à Sexta-Feira <br /> das 09:00 às 12:00 e 14:00 às 16:00.</li>
        <li><span><CalendarX size={22} color='#F2F4F7'/></span>Sábados, Domingos e <br /> Feriados Fechado.</li>
        </ul>
      </div>

      <div className={styles.contactContainer}>
        <button
          onClick={() =>
            document.getElementById('menu')?.scrollIntoView({behavior: "smooth"})
          }
        >
          Menu
        </button>

        <button
          onClick={() => 
            document.getElementById('contact')?.scrollIntoView({behavior: "smooth"})
          }
        >
          Contato
        </button>

        <button
          onClick={() => 
            document.getElementById('about')?.scrollIntoView({behavior: "smooth"})
          }
        >
          Sobre nós
        </button>
        
        <button
          onClick={() => 
            document.getElementById('services')?.scrollIntoView({behavior: "smooth"})
          }
        >
          Serviços
        </button>
      </div>
    </div>
  )
}        