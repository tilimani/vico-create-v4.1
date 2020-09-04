import React from "react";

import Chip from "@material-ui/core/Chip";
import { withStyles } from "@material-ui/core";

const CustomChip = withStyles((theme) => ({
  root: {
    height: 40,
    fontSize: 16,
    color: theme.palette.secondary.main,
    borderRadius: 33,
    margin: 6
  },
  label: {
    paddingLeft: 22,
    paddingRight: 22
  }
}))(Chip);
const VICOTag = (props) => {
  return (
    <CustomChip
      label={props.label}
      onClick={() => props.action}
      variant="outlined"
    />
  );
};

export default VICOTag;
