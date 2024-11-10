import React from "react"
import styles from "../styles.module.scss"
import fbIcon from "@icons/svgs/facebook.svg"
import insIcon from "@icons/svgs/instagram.svg"
import ytbIcon from "@icons/svgs/youtube.svg"

function BoxIcon({ type, href }) {
  const { boxIcon } = styles

  const handleRenderIcon = (type) => {
    switch (type) {
      case "fb":
        return fbIcon
      case "ins":
        return insIcon
      case "ytb":
        return ytbIcon
    }
  }

  return (
    <div className={boxIcon}>
      <img src={handleRenderIcon(type)} alt={type} />
    </div>
  )
}

export default BoxIcon
