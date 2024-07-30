import styles from '../style/Menu.module.css'
import logoTipo from '../assets/logoOsmar.png'

export function Menu() {
    return(
        <div className={styles.contentLogoAndNav} id='menu'>
          <a href='#'><img src={logoTipo} alt="logotipo Osmar Contabilidade" /></a>
          <div className={styles.navigationContent}>
            <div className={styles.navigation}>
              <a href="#">Home</a>
              <button 
                onClick={() => 
                  document.getElementById('about')?.scrollIntoView({behavior: "smooth"})
                }
              >
                Sobre
              </button>
              
              <button 
                onClick={() =>
                  document.getElementById('services')?.scrollIntoView({behavior: "smooth"})
                }
              >
                Serviços
              </button>

              <button 
                onClick={() => 
                  document.getElementById('contact')?.scrollIntoView({behavior: "smooth"})
                }
              >
                  Contato
              </button>
            </div>
          </div>      
        </div>
    )
}