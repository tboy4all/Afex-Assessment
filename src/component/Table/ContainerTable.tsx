import React from 'react'
import Buttons from '../Button/Buttons'
import StickyHeadTable from './TableData'
import TableDataSell from './TableDataSell'
import TradeLog from './TradeLog'

const ContainerTable = () => {
  return (
    <>
      <div className='grid gap-2'>
        <div className='col-span-2 '>
          <div>
            <Buttons />
          </div>
        </div>
        <StickyHeadTable />
        <TableDataSell />
        <div className='col-span-2 '>
          <span className=''>
            <p className='text-gray-600 bg-white 	text-transform: uppercase'>
              TradeLog
            </p>
          </span>
          <TradeLog />
        </div>
      </div>
    </>
  )
}

export default ContainerTable
