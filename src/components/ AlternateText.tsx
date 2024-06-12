import { useEffect, useState } from "react"
import styles from '../style/AlternateText.module.css'
import { DateImpost } from "./DateImpost"


export function AlternateText() {
  const [visibility, setVisibility] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibility((setVisibility) => !setVisibility)
    },3000)

    return () => clearInterval(interval)
  })

  const textOne = (
    <>
      Não fique de fora, <br />
      mantenha-se  <br />
      Atualizado!
    </>
  )

  const textTwo = (
    <>
      DECLARAÇÃO DO <br /> 
      IMPOSTO DE RENDA <br />
      2025 <br />
      <DateImpost />
    </>
  )

  return(
    <div className={styles.textAlternate}>
      <strong>{visibility? textOne : textTwo}</strong> 
    </div>
  )
}