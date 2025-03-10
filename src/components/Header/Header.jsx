import React from 'react'
import s from "./Header.module.scss"

export const Header = () => {
  return (
    <div className={s.wrapper}>
        <div className={s.icon}></div>
        <div className={s.text}>CoinGecko</div>
    </div>
  )
}
