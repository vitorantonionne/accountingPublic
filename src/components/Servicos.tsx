import { BuildingOffice, Calculator, Handshake, Storefront } from '@phosphor-icons/react'

import imgContabil from '../assets/contabil.jpg'
import imgFiscal from '../assets/imgMEI.jpg'
import imgTrabalhista from '../assets/trabalhista.jpg'
import imgAberEmpresa from'../assets/imgAberEmpresa.jpg'

import styles from '../style/Servicos.module.css'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export function Servicos() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  })

  return(
    <div className={styles.servicosContent} id='services'>
      <div className={styles.servicosTop}>
        <h3>Serviços</h3>
        <p>Principais serviços oferecidos em nosso escritório</p>
      </div>

      <div className={styles.listServicos}>

        <div data-aos="fade-left">
          <div className={styles.servicos}>
            <img className={styles.img} src={imgContabil} alt="imagem Imposto" />
            <div className={styles.descricaoServicos}>
              <Calculator color='#020205' size={25}/>
              <strong>Imposto de Renda</strong>
            </div>
            <p>Elaboramos a declaração do Imposto de Renda Pessoa Física e Jurídica, em total conformidade com as normas da Receita Federal.</p>
          </div>
        </div>

        <div data-aos="fade-left">
          <div className={styles.servicos}>
            <img className={styles.img} src={imgFiscal} alt="imagem MEI" />
            <div className={styles.descricaoServicos}>
              <Storefront color='#020205' size={25}/>
              <strong>Migrar do MEI</strong>
            </div>
            <p>Precisa migrar sua empresa do MEI? Simplificamos todo esse processo para você!</p>
          </div>
        </div>

        <div data-aos="fade-left">
          <div className={styles.servicos} >
            <img className={styles.img} src={imgTrabalhista} alt="imagem trabalhista" />
            <div className={styles.descricaoServicos}>
              <Handshake color='#020205' size={25}/>
              <strong>Trabalhista</strong>
            </div>
            <p>Fornecemos serviços especializados em questões trabalhistas, adaptados às necessidades de pessoas físicas e jurídicas de todos os portes.</p>
          </div>
        </div>


        <div data-aos="fade-left">
          <div className={styles.servicos} >
            <img className={styles.img} src={imgAberEmpresa} alt="imagem fiscal" />
            <div className={styles.descricaoServicos}>
              <BuildingOffice color='#020205' size={25}/>
              <strong>Abertura de Empresa</strong>
            </div>
            <p>Precisa formalizar sua empresa? Nós auxiliamos em todo o processo burocrático de maneira ágil e descomplicada.</p>
          </div>
        </div>
      </div>
    </div>
  )
}