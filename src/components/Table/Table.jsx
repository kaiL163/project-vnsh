import React from 'react';
import s from "./Table.module.scss"

export const Table = ({ coins, globalData }) => {
  
    if (!coins || !Array.isArray(coins)) {
        return <div></div>;
    }

  return (
    <div className={s.container}>
        <table className={s.table}>
        <thead>
            <tr>
            <th>#</th>
            <th>Coin</th>
            <th>Price</th>
            <th>24h</th>
            <th>Market Cap</th>
            </tr>
        </thead>
        <tbody>
            {coins.map((coin) => (
                <tr key={coin.id}>
                    <td>{coin.market_cap_rank}</td>
                    <td>
                        <div className={s.coin}>
                            <img src={coin.image} alt={coin.name} />
                            <span className={s.name}>{coin.name}</span>
                            <span className={s.symbol}>{coin.symbol}</span>
                        </div>
                    </td>
                    <td>${coin.current_price}</td>
                    <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>
                    <td>${coin.market_cap.toLocaleString()}</td>
                </tr>
            ))}
        </tbody>
        </table>
    </div>
)
}