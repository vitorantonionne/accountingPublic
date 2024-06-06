import styles  from '../style/Header.module.css'
import logoTipo from '../assets/logoOsmar.png'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.contentLogoAndNav}>
        <a href='#'><img src={logoTipo} alt="logotipo Osmar Contabilidade" /></a>

        <div className={styles.navigationContent}>
          <div className={styles.navigation}>
            <a href="#">Home</a>
            <a href="#">Sobre nós</a>
            <a href="#">Serviços</a>
            <a className={styles.LinkBackGround} href="#">Contato</a>
          </div>
        </div>      

      </div>

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
    </header>
  )
}