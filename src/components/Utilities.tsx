import styles from '../style/Utilities.module.css'


export function Utilities() {
  return (
    <div className={styles.utilities}>
      <a href="https://www.gov.br/receitafederal/pt-br" target='_blank'>Receita Federal</a>
      <span></span>
      <a href="https://www.gov.br/receitafederal/pt-br/assuntos/agenda-tributaria" target='_blank'>Agenda tributária</a>
      <span></span>
      <a href="https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/tributos/irpf-imposto-de-renda-pessoa-fisica" target='_blank'>IRPF</a>
      <span></span>
      <a href="https://www.gov.br/inss/pt-br/direitos-e-deveres/inscricao-e-contribuicao/tabela-de-contribuicao-mensal" target='_blank'>INSS</a>
      <span></span>
      <a href="https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/cadastros/cnpj/classificacao-nacional-de-atividades-economicas-2013-cnae" target='_blank'>CNAE</a>
    </div>
  )
}