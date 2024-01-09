import React from 'react'
import { TableContainer } from './style'
import { TableProps } from './type'

const Table = ({ children }: TableProps) => {
  return <TableContainer>{children}</TableContainer>
}

export default Table
