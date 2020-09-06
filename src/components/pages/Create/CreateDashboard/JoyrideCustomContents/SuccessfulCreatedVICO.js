import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  innerContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  joyrideImg: {
    width: 100,
    marginTop: 20
  },
  title: {
    fontSize: 20,
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    marginTop: 20,
    width: "60%",
    textAlign: "center"
  },
  description: {
    fontSize: 16,
    color: theme.palette.secondary.main,
    marginTop: 20,
    width: "80%",
    textAlign: "center"
  }
}));

const SuccessfulCreatedVICO = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.innerContent}>
      <img
        src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/PUeT-creationSuccess.png"
        alt=""
        className={classes.joyrideImg}
      />
      <span className={classes.title}>
        ¡Felicitaciones! Tu VICO ha sido creada.
      </span>
      <p className={classes.description}>
        Queremos que tu VICO se vea de la mejor manera posible. A continuación,
        vamos a guiarte para que puedas personalizarla.
      </p>
    </div>
  );
};

export default SuccessfulCreatedVICO;
