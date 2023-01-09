import * as React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { red } from '@mui/material/colors'

const color = red[500]

interface Column {
  id:
    | 'security'
    | 'board'
    | 'orderType'
    | 'matched_price'
    | 'quantity'
    | 'date'
    | 'time'
  label?: string
  minWidth?: number
  align?: 'right'
}

const columns: readonly Column[] = [
  { id: 'security', label: 'Security', minWidth: 70 },
  { id: 'board', label: 'Board', minWidth: 40 },
  {
    id: 'orderType',
    label: 'Order Type',
    minWidth: 90,
    align: 'right',
  },
  { id: 'matched_price', label: 'Matched Price', minWidth: 40, align: 'right' },
  { id: 'quantity', label: 'Quantity', minWidth: 40 },
  { id: 'date', label: 'Date', minWidth: 40 },
  { id: 'time', label: 'Time', minWidth: 40 },
]

interface Data {
  security: string
  board: string
  orderType: string
  matched_price: number
  quantity: number
  date: string
  time: string
}

function createData(
  security: string,
  board: string,
  orderType: string,
  matched_price: number,
  quantity: number,
  date: string,
  time: string
): Data {
  return { security, board, orderType, matched_price, quantity, date, time }
}

const rows = [
  createData(
    'Soybeans (SSBS)',
    'X-Traded',
    'Buy',
    1792.65,
    9265,
    '17 Oct, 2020',
    '07:34'
  ),
  createData(
    'Paddy Rice (SPRL)',
    'X-Traded',
    'Buy',
    1792.65,
    9265,
    '8 Sep, 2020',
    '02:02'
  ),
  createData(
    'Maize(SMAZ)',
    'OTC',
    'Sell',
    1792.65,
    9265,
    '24, May, 2020',
    '06:42'
  ),
  createData(
    'Sorghum (SSGM)',
    'FI',
    'Sell',
    1792.65,
    9265,
    '1 Feb, 2020',
    '01:09'
  ),
  createData(
    'Fair Trade',
    'FI',
    'Sell',
    1792.65,
    9265,
    '15 Jan, 2023',
    '08:04'
  ),
  createData(
    'Fair Trade(FETC)',
    'FI',
    'Sell',
    1792.65,
    9265,
    '24, Jan, 2023',
    '06:90'
  ),
]

export default function TradeLog() {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 240 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, color: 'gray' }}
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
