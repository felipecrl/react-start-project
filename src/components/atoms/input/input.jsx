import React from "react";
import PropTypes from "prop-types";

// Material UI
import TextField from "@material-ui/core/TextField";

function Input({
  autoFocus,
  defaultValue,
  disabled,
  error,
  fullWidth,
  helperText,
  InputProps,
  label,
  onChange,
  placeholder,
  required,
  type,
  value
}) {
  return (
    <TextField
      autoFocus={autoFocus}
      defaultValue={defaultValue}
      disabled={disabled}
      error={error}
      fullWidth={fullWidth}
      helperText={helperText}
      InputProps={InputProps}
      label={label}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      type={type}
      value={value}
      variant="outlined"
      InputLabelProps={{
        shrink: true
      }}
    />
  );
}

Input.propTypes = {
  autoFocus: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  fullWidth: PropTypes.bool,
  helperText: PropTypes.node,
  InputProps: PropTypes.object,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.arrayOf(PropTypes.string, PropTypes.number)
  ])
};

export default Input;
