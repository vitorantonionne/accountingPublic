import styles  from '../style/Header.module.css'
import logoTipo from '../assets/logoOsmar.png'
import videoBg from '../assets/videoHeaderBG.mp4'

export function Header() {
  return (
    <header className={styles.header}>
      <video  autoPlay loop muted className={styles.videoBG} >
        <source src={videoBg} type='video/mp4'/>
      </video>

      <div className={styles.contentHeader}>
        <div className={styles.contentLogoAndNav}>
          <a href='#'><img src={logoTipo} alt="logotipo Osmar Contabilidade" /></a>
          <div className={styles.navigationContent}>
            <div className={styles.navigation}>
              <a href="#">Home</a>
              <button 
                onClick={() => 
                  document.getElementById('about')?.scrollIntoView()}
              >
                Sobre nós
              </button>
              <button 
                onClick={() =>
                  document.getElementById('services')?.scrollIntoView()
                }
                >
                Serviços
              </button>
              <button 
                onClick={() => 
                  document.getElementById('contact')?.scrollIntoView()
                }>
                  Contato
              </button>
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
      </div>
    </header>
  )
}