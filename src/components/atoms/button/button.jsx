import React from "react";
import PropTypes from "prop-types";

// Material UI
import Button from "@material-ui/core/Button";

function Buttons({ label, variant, color, size, disabled, fullWidth, onClick }) {
  return (
    <Button 
      variant={variant} 
      color={color} 
      size={size ? size : "medium"}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}

Buttons.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func
};

export default Buttons;
