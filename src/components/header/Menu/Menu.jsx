import React from "react"
import styles from "../styles.module.scss"

const Menu = ({ content, href }) => {
  const { menu } = styles
  return <div className={menu}>{content}</div>
}

export default Menu
