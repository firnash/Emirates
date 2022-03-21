import React from "react";
import { TextField } from "@mui/material";

export const InputField = ({
  name,
  label,
  value,
  error,
  handleChange,
  helperText,
  isMultiline,
  isRequired,
  isDate,
  defaultValue,
  handleFocus,
  handleBlur
}) => {

  return (
    <TextField
      className="my-3"
      autoComplete='off'
      name={name}
      type={isDate ? 'date' : 'text'}
      label={isRequired ? label+"*" : label}
      inputProps={{ maxLength: isMultiline ? 500 : 50 }}
      variant="outlined"
      fullWidth
      value={value}
      error={error}
      helperText={error && helperText}
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
      defaultValue={defaultValue}
      multiline={isMultiline}
      rows={isMultiline ? 3 : 1}
    />
  );
};