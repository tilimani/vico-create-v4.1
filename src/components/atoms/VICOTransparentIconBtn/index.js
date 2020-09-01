import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: 4
  }
}));

const TransparantIconButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "none",
    backgroundColor: "transparent",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "transparent",
      boxShadow: "none"
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "transparent"
    },
    "&:focus": {
      boxShadow: "none"
    }
  }
})(Button);

const VICOTransparentIconBtn = (props) => {
  const classes = useStyles();
  const { iconComponent, text } = props;
  return (
    <TransparantIconButton
      variant="contained"
      color="inherit"
      className={classes.button}
      startIcon={iconComponent}
      onClick={() => props.action()}
    >
      {text}
    </TransparantIconButton>
  );
};
export default VICOTransparentIconBtn;
