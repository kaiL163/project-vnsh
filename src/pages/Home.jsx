import React from 'react'
import { useAllCoins } from '../hooks/coins'
import { Table } from '../components/Table/Table'
import { Button } from '../components/Button/Button'
import s from './Home.module.scss'

export const Home = () => {
  const {data:coins} = useAllCoins()

  return (
    <>
      <div>
        <Table coins={coins}/>
      </div>
    </>
  )
}

