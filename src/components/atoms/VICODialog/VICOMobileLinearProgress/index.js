import React from "react";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

import "./index.css";

const VICOMobileLinearProgress = (props) => {
  const { classes } = props;
  return (
    <div>
      <LinearProgress
        variant="determinate"
        value={2}
        classes={{
          colorPrimary: classes.colorPrimary,
          barColorPrimary: classes.barColorPrimary
        }}
      />
    </div>
  );
};

const styles = (props) => ({
  colorPrimary: {
    backgroundColor: "rgba(196, 196, 196, 0.51)"
  },
  barColorPrimary: {
    backgroundColor: "#07A529"
  }
});

export default withStyles(styles)(VICOMobileLinearProgress);
