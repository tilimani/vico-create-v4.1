import React from "react";
import { makeStyles } from "@material-ui/core";

import rulesCreated from "../../../../../assets/rulesCreated.png";

const useStyles = makeStyles((theme) => ({
  innerContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  joyrideImg: {
    width: 120,
    marginTop: 10
  },
  title: {
    fontSize: 20,
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    marginTop: 10,
    width: "60%",
    textAlign: "center",
    lineHeight: 1.2
  },
  description: {
    fontSize: 16,
    color: theme.palette.secondary.main,
    marginTop: 10,
    width: "80%",
    textAlign: "center",
    marginBottom: 0
  }
}));

const SuccessfulCreatedVICORules = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.innerContent}>
      <img src={rulesCreated} alt="" className={classes.joyrideImg} />
      <span className={classes.title}>¡Gracias por crear tus condiciones!</span>
      <p className={classes.description}>
        Puedes entrar en cualquier momento y editar las opciones.
      </p>
    </div>
  );
};

export default SuccessfulCreatedVICORules;
