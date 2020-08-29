import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: 4
  }
}));

const TransparantButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 18,
    padding: "6px 12px",
    border: "none",
    backgroundColor: "transparent",
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

const VICOSaveButton = (props) => {
  const classes = useStyles();

  return (
    <TransparantButton
      variant="contained"
      color="inherit"
      className={classes.button}
      onClick={() => props.action()}
    >
      Guardar
    </TransparantButton>
  );
};
export default VICOSaveButton;
