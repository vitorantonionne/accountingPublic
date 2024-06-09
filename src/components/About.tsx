import styles from '../style/About.module.css'

export function About() {
  return(
    <div className={styles.aboutContainer}>

      <div className={styles.about}>
        <div>
          <h3>SOBRE</h3>
        </div>
        <div className={styles.infoContainer}>
          <h4>Quem somos nós</h4>
          <div className={styles.info}>
            <p>
              A Osmar Contabilidade fornece serviços especializados em contabilidade, finanças e assessoria fiscal. Nosso objetivo é proporcionar soluções personalizadas para atender às necessidades específicas de cada cliente.
            </p>
            <p>
              Investimos constantemente em aprimoramento técnico e utilizamos tecnologia de ponta para garantir precisão e eficiência em nossos serviços.Estamos comprometidos com a excelência e trabalhamos com paixão para alcançar os melhores resultados para você e seu negócio.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.img}>

      </div>
    </div>
  )
}