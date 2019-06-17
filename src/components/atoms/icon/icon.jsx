import React from "react";
import PropTypes from "prop-types";

// Material UI
import Icon from '@material-ui/core/Icon';

function Icons({ icon, color }) {
  return (
    <Icon color={color}>{icon}</Icon>
  );
}

Icons.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string
};

export default Icons;
