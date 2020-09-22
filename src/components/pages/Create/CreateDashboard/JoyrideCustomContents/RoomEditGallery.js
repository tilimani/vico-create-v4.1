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
    marginTop: 20
  },
  description: {
    fontSize: 16,
    color: theme.palette.secondary.main,
    marginTop: 20
  },
  joyrideImg: {
    width: 120,
    marginTop: 20
  }
}));

const RoomEditGallery = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.innerContent}>
      <span className={classes.title}>¡Aun sin fotos!</span>
      <p className={classes.description}>
        Puedes entrar en cualquier momento y editar las opciones.
      </p>
    </div>
  );
};

export default RoomEditGallery;
