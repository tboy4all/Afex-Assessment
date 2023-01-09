import * as React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

interface Column {
  id: 'product' | 'quantity' | 'offerPrice' | 'getSell'
  label?: string
  minWidth?: number
  align?: 'right'
}

const columns: readonly Column[] = [
  { id: 'product', label: 'Product', minWidth: 40 },
  { id: 'quantity', label: 'Quantity', minWidth: 40 },
  {
    id: 'offerPrice',
    label: 'offer Price',
    minWidth: 85,
    align: 'right',
  },
  { id: 'getSell', minWidth: 40 },
]

interface Data {
  product: string
  quantity: number
  offerPrice: number
  getSell: React.ReactElement<any>
}

function createData(
  product: string,
  quantity: number,
  offerPrice: number,
  getSell: React.ReactElement
): Data {
  return { product, quantity, offerPrice, getSell }
}
const getSell = (sell: string) => {
  return (
    <>
      <button className='w-[50px] h-[25px] text-xs  border-2 border-red-500 text-red-500'>
        {sell}
      </button>
    </>
  )
}

const rows = [
  createData('Soybeans (SSBS)', 2003, 1736.92, getSell('Sell')),
  createData('Paddy Rice (SPRL)', 11293, 3627.01, getSell('Sell')),
  createData('Maize(SMAZ)', 1832, 8294.01, getSell('Sell')),
  createData('Sorghum (SSGM)', 29102, 8192.01, getSell('Sell')),
  createData('Fair Trade', 3212, 1736.92, getSell('Sell')),
  createData('Fair Trade(FETC)', 3212, 1736.92, getSell('Sell')),
]

export default function TableDataSell() {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 340 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow
                  hover
                  role='checkbox'
                  tabIndex={-1}
                  key={Math.random() + 1}
                >
                  {columns.map((column) => {
                    const value = row[column.id]
                    return (
                      <>
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      </>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
