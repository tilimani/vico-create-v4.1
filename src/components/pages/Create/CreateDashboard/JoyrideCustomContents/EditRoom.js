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

const EditRoom = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.innerContent}>
      <span className={classes.title}>Edita la Habitación 1</span>
      <p className={classes.description}>
        Haz clic para editar o actualizar las fotos e información de la
        habitación seleccionada.
      </p>
    </div>
  );
};

export default EditRoom;
