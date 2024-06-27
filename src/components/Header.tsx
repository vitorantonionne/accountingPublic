import styles  from '../style/Header.module.css'
import videoBg from '../assets/videoHeaderBG.mp4'
import { Menu } from './Menu'



export function Header() {
  return (
    <header className={styles.header}>
      <video  autoPlay loop muted className={styles.videoBG} >
        <source src={videoBg} type='video/mp4'/>
      </video>

      <div className={styles.contentHeader}>
        <Menu />
        <div className={styles.home}>
          <div className={styles.homeContent}>
            <p>CONTÁBIL</p>
            <span></span>
            <p>FISCAL</p>
            <span></span>
            <p>TRABALHISTA</p>
          </div>
          <p>OSMAR CONTABILIDADE</p>
        </div>
      </div>
    </header>
  )
}