import React from "react"
import BoxIcon from "@components/header/boxIcon/BoxIcon.jsx"
import { dataBoxIcon, dataMenu } from "@components/header/constants.js"
import styles from "./styles.module.scss"
import Menu from "@components/header/Menu/Menu.jsx"
import Logo from "@icons/images/logo_retina.png"
import reLoadIcon from "@icons/svgs/reload.svg"
import heartIcon from "@icons/svgs/heart.svg"
import cartIcon from "@icons/svgs/cart.svg"

function MyHeader() {
  const { containerBoxIcon, containerMenu, containerBox, containerHeader, container } = styles

  return (
    <div className={container}>
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerBoxIcon}>
            {dataBoxIcon.map((icon) => {
              return <BoxIcon type={icon.type} href={icon.href} />
            })}
          </div>
          <div className={containerMenu}>
            {dataMenu.slice(0, 3).map((menu) => {
              return <Menu content={menu.content} href={menu.href} />
            })}
          </div>
        </div>
        <div>
          <img src={Logo} alt="logo" style={{ width: "180px", height: "90px" }} />
        </div>
        <div className={containerBox}>
          <div className={containerMenu}>
            {dataMenu.slice(3, dataMenu.length).map((menu) => {
              return <Menu content={menu.content} href={menu.href} />
            })}
          </div>
          <div className={containerBoxIcon}>
            <img width={20} height={20} src={reLoadIcon} alt="reload" />
            <img width={20} height={20} src={heartIcon} alt="heart" />
            <img width={20} height={20} src={cartIcon} alt="cart" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyHeader
