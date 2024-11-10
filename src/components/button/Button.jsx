import React from "react"
import styles from "./styles.module.scss"

function MyButton() {
  return (
    <div>
      <button className={styles.btn}>M</button>
      <button className={styles.btn2}>♥</button>
    </div>
  )
}

export default MyButton
