import React from 'react';
import TextField from '@material-ui/core/TextField';

const DatePicker = ({handleDeadline,deadline})=> {
  return (
    <>
      <TextField
        id="date"
        label="〆切"
        type="date"
        value={deadline}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleDeadline}
      />
    </>
  );
}

export default DatePicker