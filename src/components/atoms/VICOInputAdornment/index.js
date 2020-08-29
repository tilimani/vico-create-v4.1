import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import "./index.css";
const useStyles = makeStyles((theme) => ({
  startAdornmentText: {
    fontSize: 16,
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    paddingTop: 6
  }
}));

const CustomInput = withStyles((theme) => ({
  root: {
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: 6,
    width: "100%",
    height: 58,
    marginTop: 20,
    paddingLeft: 20,
    "&:hover": {
      backgroundColor: "#fff",
      boxShadow: `0px 2px 4px ${theme.palette.primary.main}`,
      borderColor: theme.palette.primary.main
    },
    "&:active": {
      backgroundColor: "#fff",
      boxShadow: `0px 2px 4px ${theme.palette.primary.main}`,
      borderColor: theme.palette.primary.main
    },
    "&:focus": {
      backgroundColor: "#fff",
      boxShadow: `0px 2px 4px ${theme.palette.primary.main}`,
      borderColor: theme.palette.primary.main
    }
  }
}))(Input);

const VICOInputAdornment = (props) => {
  const classes = useStyles();

  return (
    <CustomInput
      value={props.value}
      onChange={(event) => props.setVICOName(event.target.value)}
      startAdornment={
        <InputAdornment position="start" className={classes.startAdornmentText}>
          <span>VICO</span>
        </InputAdornment>
      }
    />
  );
};
export default VICOInputAdornment;
