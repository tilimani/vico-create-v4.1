import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  innerContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: theme.palette.secondary.main,
    marginTop: 10
  }
}));

const AvailibilityDate = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.innerContent}>
      <span className={classes.title}>Indica tu disponibilidad</span>
      <p className={classes.description}>
        Indique la fecha de disponibilidad de su habitación.
      </p>
    </div>
  );
};

export default AvailibilityDate;
