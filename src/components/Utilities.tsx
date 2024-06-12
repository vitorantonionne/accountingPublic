import styles from '../style/Utilities.module.css'
import imgReceita from '../assets/logoReceitaFederal.png'
import { AlternateText } from './ AlternateText'


export function Utilities() {
  return (
    <div className={styles.utilitiesContainer}>
      <div className={styles.utilitiesLinks}>
        <a href="https://www.gov.br/receitafederal/pt-br" target='_blank'>Receita Federal</a>
        <span></span>
        <a href="https://www.gov.br/receitafederal/pt-br/assuntos/agenda-tributaria" target='_blank'>Agenda tributária</a>
        <span></span>
        <a href="https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/tributos/irpf-imposto-de-renda-pessoa-fisica" target='_blank'>IRPF</a>
        <span></span>
        <a href="https://www.gov.br/inss/pt-br/direitos-e-deveres/inscricao-e-contribuicao/tabela-de-contribuicao-mensal" target='_blank'>INSS</a>
        <span></span>
        <a href="https://www.gov.br/esocial/pt-br" target='_blank'>eSocial</a>
       
      </div>
      <div className={styles.textContent}>
        <div className={styles.imgReceita}>
          <img src={imgReceita} alt="logo da Receita Federal" />
        </div>
        <div className={styles.textAlternat}>
          <AlternateText />
        </div>
      </div>
    </div>
  )
}