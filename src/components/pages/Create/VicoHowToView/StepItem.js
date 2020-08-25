import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  StepItemWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
  },
  iconWrapper: {
    marginRight: 20
  },
  icon: {
    width: 80,
    [theme.breakpoints.down("md")]: {
      width: 60
    },
    [theme.breakpoints.down("sm")]: {
      width: 50
    }
  },
  textWrapper: {
    marginTop: 20
  },
  title: {
    fontSize: 16,
    color: theme.palette.secondary.main
  }
}));

const StepItem = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.StepItemWrapper}>
      <div className={classes.iconWrapper}>
        <img src={props.icon} alt="icon" className={classes.icon} />
      </div>
      <div className={classes.textWrapper}>
        <span className={classes.title}>{props.title}</span>
      </div>
    </div>
  );
};

export default StepItem;
