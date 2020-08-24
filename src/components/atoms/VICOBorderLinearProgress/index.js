import React, { useState } from "react";
import { LinearProgress, withStyles } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "../../../common/theme";
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 3,
    borderRadius: 5
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700]
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#ef8e01"
  }
}))(LinearProgress);

function VICOBorderLinearProgress(props) {
  const [progress, setProgress] = useState(0);
  const timer = setInterval(() => {
    setProgress((progress) => {
      return Math.min(progress + 10, 100);
    });
  }, 100);
  return (
    <MuiThemeProvider theme={theme}>
      <BorderLinearProgress {...props} value={progress} variant="determinate" />
    </MuiThemeProvider>
  );
}

export default VICOBorderLinearProgress;
