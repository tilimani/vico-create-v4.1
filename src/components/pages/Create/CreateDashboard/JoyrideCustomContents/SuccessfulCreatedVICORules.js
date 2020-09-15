import React from "react";
import { makeStyles, useMediaQuery } from "@material-ui/core";

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
  const isMediumScreen = useMediaQuery("(max-width:960px)");
  return (
    <div className={classes.innerContent}>
      {!isMediumScreen && (
        <img
          src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/ppKr-rulesCreated.png"
          alt=""
          className={classes.joyrideImg}
        />
      )}
      <span className={classes.title}>¡Gracias por crear tus condiciones!</span>
      <p className={classes.description}>
        Puedes entrar en cualquier momento y editar las opciones.
      </p>
    </div>
  );
};

export default SuccessfulCreatedVICORules;
