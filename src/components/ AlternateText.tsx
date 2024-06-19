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
      Não fique de fora, 
      mantenha-se 
      Atualizado!
    </>
  )

  const textTwo = (
    <>
      DECLARAÇÃO DO 
      IMPOSTO DE RENDA
      2025 
      <DateImpost />
    </>
  )

  return(
    <div className={styles.textAlternate}>
      <strong style={{textAlign: "center"}}>{visibility? textOne : textTwo}</strong> 
    </div>
  )
}