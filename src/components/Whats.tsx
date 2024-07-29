import { WhatsappLogo } from '@phosphor-icons/react'
import styles from '../style/Whats.module.css'
import { FormEvent } from 'react'

export function Whats() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const phoneNumber = '5585999856813'
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}`

    window.open(whatsappURL, '_blanck')
  }

  return(
    <div className={styles.whatsButton}>
      <form onSubmit={handleSubmit} className="styles">
        <button type="submit">
          <WhatsappLogo size={48} color='#fff'/>
        </button>
      </form>
    </div>
  )
}