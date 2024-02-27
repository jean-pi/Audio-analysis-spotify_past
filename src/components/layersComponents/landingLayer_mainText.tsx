
import styles from "../../sass/layers/landing_mainText.module.scss"

export default function LandingLayerMainText () {
  return (
    <div className={styles.container}>
      <div className={styles.container_backgroungH1_1} ></div>
      <div className={styles.container_backgroungH1_2} ></div>
        <h1 tabIndex={0} className={styles.container_h1}>audio analysis for musicians</h1>
        <h2 tabIndex={0} className={styles.container_h2}>recover tone, timbre, time signature and more, of your songs associated with your Sportify account.</h2>
    </div>
  )
}