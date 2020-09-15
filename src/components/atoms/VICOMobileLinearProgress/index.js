import React from "react";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

import "./index.css";

const CustomLinearProgress = withStyles((theme) => ({
  root: {
    height: 20,
    zIndex: 999
  },
  colorPrimary: {
    backgroundColor: "rgba(196, 196, 196, 0.51)"
  },
  barColorPrimary: {
    backgroundColor: "#07A529"
  }
}))(LinearProgress);

const VICOMobileLinearProgress = (props) => {
  return (
    <div>
      <CustomLinearProgress variant="determinate" value={props.step * 4} />
    </div>
  );
};

export default VICOMobileLinearProgress;
