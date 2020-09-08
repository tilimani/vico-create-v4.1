import React from "react";
import { makeStyles } from "@material-ui/core";

import socialZones from "../../../../../assets/socialZones.png";

const useStyles = makeStyles((theme) => ({
  innerContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  joyrideImg: {
    width: 100
  },
  title: {
    fontSize: 16,
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
    lineHeight: 1.2
  },
  description: {
    fontSize: 14,
    color: theme.palette.secondary.main,
    marginTop: 10,
    textAlign: "center",
    marginBottom: 0
  }
}));

const SuccessfulCreatedCommonAreas = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.innerContent}>
      <img
        src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/ppKr-rulesCreated.png"
        alt=""
        className={classes.joyrideImg}
      />
      <span className={classes.title}>
        ¡Perfecto! Las zonas sociales fueron actualizadas
      </span>
      <p className={classes.description}>
        Puedes entrar en cualquier momento y editar las opciones.
      </p>
    </div>
  );
};

export default SuccessfulCreatedCommonAreas;
