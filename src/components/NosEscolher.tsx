import { ChartLineUp, CheckFat, Clock } from '@phosphor-icons/react'
import styles from '../style/NosEscolher.module.css'

export function NosEscolher() {
  return(
    <div className={styles.wecontainer}>
      <ul>
        <div className={styles.weAgilidade}>
        <Clock color='#E43A19' size={26}/>
        <strong>Agilidade</strong>
        </div>
        <p>Concentre-se no que realmente importa para o seu negócio. Economize tempo e ganhe agilidade na sua solução.</p>
      </ul>
      <ul>
        <div className={styles.weCrescimento}>
          <ChartLineUp color='#E43A19' size={26}/>
          <strong>Start negócio</strong>
        </div>
        <p>Desperte o potencial de crescimento do seu negócio.</p>
      </ul>
      <ul>
        <div className={styles.weServico}>
          <CheckFat color='#E43A19' size={26}/>
          <strong>Gama de Serviços</strong>
        </div>
        <p>Oferecemos uma ampla gama de serviços contábeis.</p>
      </ul>
    </div>
  )
}