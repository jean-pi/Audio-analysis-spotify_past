
import { MAIN_TEXT_PRESENTATION, SECOND_TEXT_PRESENTATION } from "../../constants/actionTypes"
import styles from "../../sass/layers/landing_mainText.module.scss"

export default function LandingLayerMainText () {
  return (
    <div className={styles.container}>
        <h1 tabIndex={0} className={styles.container_h1}><span className={styles.container_h1_span}>{MAIN_TEXT_PRESENTATION.line1}&nbsp;{MAIN_TEXT_PRESENTATION.line2}&nbsp;{MAIN_TEXT_PRESENTATION.line3}</span> <br />  <span className={styles.container_h1_span}>{MAIN_TEXT_PRESENTATION.line4}</span></h1>
        <h2 tabIndex={0} className={styles.container_h2}>{SECOND_TEXT_PRESENTATION}</h2>
    </div>
  )
}