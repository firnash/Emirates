import React from "react";
import { Select, MenuItem, InputLabel } from "@mui/material";

export const SelectField = ({
  name,
  label,
  value,
  error,
  handleChange,
  helperText,
  isMultiline,
  isRequired
}) => {

  return (
    <TextField
      className="my-3"
      name={name}
      type="text"
      label={isRequired ? label+"*" : label}
      inputProps={{ maxLength: isMultiline ? 500 : 50 }}
      variant="outlined"
      fullWidth
      value={value}
      error={error}
      helperText={error && helperText}
      onChange={handleChange}
      multiline={isMultiline}
      rows={isMultiline ? 3 : 1}
    />
  );
};