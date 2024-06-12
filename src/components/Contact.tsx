import { FormContact } from "./FormContact";
import { Map } from "./Map";

import styles from '../style/Contact.module.css'

export function Contact() {
  return(
    <div  id="contact" className={styles.contactContainer}>
      <div>
        <h1>Contato</h1>
      </div>
      <div className={styles.contact}>
        <Map />
        <FormContact />
      </div>
    </div>
  )
}