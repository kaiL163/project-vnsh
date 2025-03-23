import React, { useState } from 'react';
import s from "./Table.module.scss"

export const Table = ({ coins }) => {

    const [sort, setSort] = useState({ keyToSort: 'market_cap_rank', direction: "asc"})

    const handleSort = (key) => {
        let direction = 'asc';
        if (sort.keyToSort === key && sort.direction === 'asc') {
            direction = 'desc';
        }
        setSort({ keyToSort: key, direction });
    };

    if (!coins || !Array.isArray(coins)) {
        return <div></div>;
    }

    const sortedCoins = [...coins].sort((a, b) => {
        if (sort.keyToSort === 'name') {
            return sort.direction === 'asc'
                ? a.name.localeCompare(b.name, { sensitivity: 'base' })
                : b.name.localeCompare(a.name, { sensitivity: 'base' });
        } else {
            return sort.direction === 'asc'
                ? a[sort.keyToSort] - b[sort.keyToSort]
                : b[sort.keyToSort] - a[sort.keyToSort];
        }
    });

  return (
    <div className={s.container}>
        <table className={s.table}>
        <thead>
            <tr>
            <th onClick={() => handleSort('market_cap_rank')}>
                # {sort.keyToSort === 'market_cap_rank' && (sort.direction === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('name')}>
                 Coin {sort.keyToSort === 'name' && (sort.direction === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('current_price')}>
                 Price {sort.keyToSort === 'current_price' && (sort.direction === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('price_change_percentage_24h')}>
                24h {sort.keyToSort === 'price_change_percentage_24h' && (sort.direction === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('market_cap')}>
                Market Cap {sort.keyToSort === 'market_cap' && (sort.direction === 'asc' ? '↑' : '↓')}
            </th>
            </tr>
        </thead>
        <tbody>
            {sortedCoins.map((coin) => (
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