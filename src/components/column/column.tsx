import React, { useId } from 'react';
import { Cells } from '../cells/cells';
import { fillArrayByNumber} from '../../utils/fillArrayByNumber';
import { ICellsProps } from '../../type/type';

export const Column = ({ cells }: ICellsProps) => {
  const id = useId();

  const columns = fillArrayByNumber(cells);

  return (
    <>
      {columns.map((_,index) => (
        <Cells key={`${id}${index}`} />
      ))}
    </>
  )
}
