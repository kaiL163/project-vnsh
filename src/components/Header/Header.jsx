import React from 'react'
import s from "./Header.module.scss"
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div className={s.wrapper}>
        <div className={s.icon}></div>
        <NavLink to={"/"} className={s.text}>CoinGecko</NavLink>
        <NavLink to={"/register"} className={s.reg}>Sign On</NavLink>
    </div>
  )
}
