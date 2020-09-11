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

const RoomEditInfo = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.innerContent}>
      <span className={classes.title}>Personaliza la habitación</span>
      <p className={classes.description}>
        En este espacio puedes agregar o editar la información básica de la
        habitación.
      </p>
    </div>
  );
};

export default RoomEditInfo;
