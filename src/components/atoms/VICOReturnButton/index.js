import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: 4
  }
}));

const TransparantIconButton = withStyles({
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

const VICOReturnButton = (props) => {
  const classes = useStyles();

  return (
    <TransparantIconButton
      variant="contained"
      color="inherit"
      className={classes.button}
      startIcon={<ArrowBackIcon />}
      onClick={() => props.action()}
    >
      Atrás
    </TransparantIconButton>
  );
};
export default VICOReturnButton;
