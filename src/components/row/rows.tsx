import React, { useId } from 'react';
import { Column } from '../column/column';
import { fillArrayByNumber } from '../../utils/fillArrayByNumber';
import { ITableProps } from '../../type/type';

export const Rows = ({ row, column }: ITableProps) => {
  const id = useId();

  const rows = fillArrayByNumber(row);

  return (
    <>
      {rows.map((_, index) => (
        <tr key={`${id}${index}`}>
          <Column cells={column} />
        </tr>
      ))}
    </>
  )
}