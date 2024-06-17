import { ChartLineUp, CheckFat, Clock } from '@phosphor-icons/react'
import styles from '../style/NosEscolher.module.css'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export function NosEscolher() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  })
  return(
    <div className={styles.wecontainer}>
      <ul data-aos="fade-up">
        <div className={styles.weAgilidade}>
        <Clock color='#020205' size={26}/>
        <strong>Agilidade</strong>
        </div>
        <p>Concentre-se no que realmente importa para o seu negócio. Economize tempo e ganhe agilidade na sua solução.</p>
      </ul>
      <ul data-aos="fade-up">
        <div className={styles.weCrescimento}>
          <ChartLineUp color='#020205' size={26}/>
          <strong>Start negócio</strong>
        </div>
        <p>Desperte o potencial de crescimento do seu negócio.</p>
      </ul>
      <ul data-aos="fade-up">
        <div className={styles.weServico}>
          <CheckFat color='#020205' size={26}/>
          <strong>Gama de Serviços</strong>
        </div>
        <p>Oferecemos uma ampla gama de serviços contábeis.</p>
      </ul>
    </div>
  )
}