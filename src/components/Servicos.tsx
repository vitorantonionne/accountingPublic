import { Calculator, CurrencyDollar, Handshake } from '@phosphor-icons/react'

import imgContabil from '../assets/contabil.jpg'
import imgFiscal from '../assets/fiscal.jpg'
import imgTrabalhista from '../assets/trabalhista.jpg'

import styles from '../style/Servicos.module.css'

export function Servicos() {
  return(
    <div className={styles.servicosContent}>
      <div className={styles.servicosTop}>
        <h3>Serviços</h3>
        <h4>Principais serviços oferecidos em nosso escritório</h4>
      </div>

      <div className={styles.listServicos}>
        <div className={styles.servicos}>
          <img className={styles.img} src={imgContabil} alt="imagem contabil" />
          <div className={styles.descricaoServicos}>
            <CurrencyDollar color='#111F4D' size={25}/>
            <strong>Contabil</strong>
          </div>
          <p>Oferecemos serviços contábeis especializados para empresas e indivíduos, abrangendo desde contabilidade geral até consultoria financeira estratégica.</p>
        </div>

        <div className={styles.servicos}>
          <img className={styles.img} src={imgFiscal} alt="imagem fiscal" />
          <div className={styles.descricaoServicos}>
            <Calculator color='#111F4D' size={25}/>
            <strong>Fiscal</strong>
          </div>
          <p>Oferecemos serviços fiscais abrangentes para empresas e indivíduos, incluindo preparação de declarações de impostos, planejamento tributário estratégico e consultoria especializada.</p>
        </div>

        <div className={styles.servicos}>
          <img className={styles.img} src={imgTrabalhista} alt="imagem trabalhista" />
          <div className={styles.descricaoServicos}>
            <Handshake color='#111F4D' size={25}/>
            <strong>Trabalhista</strong>
          </div>
          <p>Serviços especializados em questões trabalhistas para empresas de todos os tamanhos.</p>
        </div>
      </div>
    </div>
  )
}



{/* <div className={styles.servicosMainContent}>
  <div className={styles.servicoContabil}>
    <div className={styles.contabilTop}>
      <Calculator size={25}/>
      <h4>Contábil</h4>
    </div>
    <div className={styles.contabilArticle}>
      <ul>
        <li>- Regularização de CPF e CNPJ: Ajuda na regularização dos registros fiscais de pessoas físicas e jurídicas.</li>
        <li>- Declaração de Imposto de Renda Pessoa Física: Assistência na preparação e envio da declaração anual de imposto de renda para indivíduos.</li>
        <li>- Declaração de Imposto de Renda Pessoa Jurídica: Auxílio na preparação e envio da declaração anual de imposto de renda para empresas.</li>
        <li>- Retificação de DIRPF (Isenção do IRPF): Correção ou atualização da declaração de imposto de renda para inclusão de informações adicionais ou correção de erros.</li>
      </ul>
    </div>
  </div>

  <div className={styles.servicoFiscal}>
    <div className={styles.fiscalTop}>
      <CurrencyDollar size={25}/>
      <h4>Fiscal</h4>
    </div>
    <div className={styles.fiscalArticle}>
      <ul>
        <li>- Declaração de ITR (Imposto Territorial Rural): Envio da declaração anual de imposto territorial rural para propriedades rurais.</li>
        <li>- Cadastro de ITR da Receita Federal do Incra (CCIR): Registro na Receita Federal do cadastro de imóveis rurais relacionado à tributação rural.</li>
        <li>- Emissão de Certidões em Geral: Obtenção de certidões fiscais para comprovação de regularidade fiscal.</li>
      </ul>
    </div>
  </div>
  <div className={styles.servicoTrabalhista}>
    <div className={styles.trabalhistaTop}>
      <Handshake size={20}/>
      <h4>Trabalhista</h4>
    </div>
    <div className={styles.trabalhistaArticle}>
      <ul>
        <li>-Abertura de Empresas: Assistência no registro de novas empresas, incluindo documentação contábil e fiscal.</li>
        <li>-Baixa de Empresas: Procedimentos para encerramento oficial das atividades empresariais.</li>
        <li>-Alterações Cadastrais de Empresas: Atualização de informações empresariais, como endereço e sócios.</li>
        <li>-Reativação de Empresas: Processo para restabelecer atividades de empresas inativas.</li>
        <li>-Consultoria Empresarial (Contábil, Fiscal e Pessoal): Assessoria especializada em questões contábeis, fiscais e trabalhistas.</li>
        <li>-Defesas Administrativas RFB: Representação legal perante a Receita Federal.ais.</li>
      </ul>
    </div>
  </div>
</div> */}