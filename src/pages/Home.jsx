import React from 'react'
import { useAllCoins } from '../hooks/coins'
import { Table } from '../components/Table/Table'

export const Home = () => {
  const {data:coins} = useAllCoins()

  return (
    <div>
      <Table coins={coins}/>
    </div>
  )
}

