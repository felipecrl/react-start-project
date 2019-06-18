import React from "react";
import PropTypes from "prop-types";

// Material UI
import Typography from "@material-ui/core/Typography";

function Label({
  children,
  variant,
  align,
  color,
  inline,
  noWrap,
  paragraph,
  gutterBottom,
  classes
}) {
  return (
    <Typography
      variant={variant}
      align={align}
      color={color}
      inline={inline}
      noWrap={noWrap}
      paragraph={paragraph}
      gutterBottom={gutterBottom}
      classes={classes}
    >
      {children}
    </Typography>
  );
}

Label.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  variant: PropTypes.string.isRequired,
  align: PropTypes.string,
  color: PropTypes.string,
  inline: PropTypes.bool,
  noWrap: PropTypes.bool,
  paragraph: PropTypes.bool,
  gutterBottom: PropTypes.bool,
  classes: PropTypes.object
};

export default Label;
