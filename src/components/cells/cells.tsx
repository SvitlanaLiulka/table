import React, { useState } from 'react';
import  '../styles/styles.css';

export const Cells = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const closeOutside = () => setIsClicked(false);
  const toggleClick = () => setIsClicked(prevState => !prevState);

  return (
    <td
      tabIndex={0}
      onClick={toggleClick}
      onBlur={closeOutside}
      className={isClicked ? 'active' : 'cell'}
    />
  )
}
