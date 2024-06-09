import styles from '../style/DigitalContact.module.css'


export function DigitalContact() {
  return(
    <div className={styles.digitalContainer}>
      <div className={styles.digitalContact}>
        <h1>Contabilidade e <br /> Consultoria, Digital e <br /> Online</h1>
        <p>Ganhe tempo na gestão da sua empresa, conte <br /> com as nossas soluções.</p>
        <div className={styles.contactLinkContent}>
          <a href="#">CONTATO <span></span></a>
        </div>
      </div>
    </div>
  )
}