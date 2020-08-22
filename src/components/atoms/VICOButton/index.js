import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "../../../common/theme";
const VICOButton = (props) => {
  const { text } = props;
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <Button {...props} className={classes.root}>
        {text}
      </Button>
    </MuiThemeProvider>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 58,
    fontWeight: "bold",
    fontSize: 16,
    borderRadius: 12,
    marginBottom: "1rem",
    "&:hover": {
      "a&": {
        color: "white"
      }
    }
  }
}));

export default VICOButton;
