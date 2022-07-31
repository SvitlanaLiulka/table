import React from 'react';
import { Rows } from '../row/rows';
import { ITableProps } from '../../type/type';
import '../styles/styles.css';


export const Table = ({ row, column }: ITableProps) => (
  <table className='table'>
    <tbody>
      <Rows row={row} column={column} />
    </tbody>
  </table>
)