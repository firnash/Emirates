import React from "react";
import Button from '@material-ui/core/Button';
import './Button.scss';

export const Btn = ({text , handleClick, disabled}) => {
  return (
    <Button disabled={disabled} variant="contained" color="primary" className='p-3' onClick={handleClick}>
      {text}
    </Button>
  );
};