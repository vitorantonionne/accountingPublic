import styles from '../style/DigitalContact.module.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



export function DigitalContact() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  })
  return(
    <div className={styles.digitalContainer} >
      <div className={styles.digitalContact} data-aos= "fade-up">
        <h1>Contabilidade e <br /> Consultoria, Digital e <br /> Online</h1>
        <p>Ganhe tempo na gestão da sua empresa, conte <br /> com as nossas soluções.</p>
        <div className={styles.contactLinkContent}>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: "smooth"})
           }
          >
            CONTATO
          </button>
        </div>
      </div>
    </div>
  )
}