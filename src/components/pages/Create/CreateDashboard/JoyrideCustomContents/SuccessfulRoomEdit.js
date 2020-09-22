import React from "react";
import { makeStyles, useMediaQuery } from "@material-ui/core";

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
    width: 160,
    marginTop: 20
  }
}));

const SuccessfulRoomEdit = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.innerContent}>
      <img
        src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/0Bpv-roomEdited.png"
        alt=""
        className={classes.joyrideImg}
      />

      <span className={classes.title}>
        ¡Felicitaciones, La habitación 1 ha sido creada!
      </span>
      <p className={classes.description}>
        Antes de publicar tu VICO vamos a hacer una llamada de verifación.
        Continua para agendar un tiempo que te conviene.
      </p>
    </div>
  );
};

export default SuccessfulRoomEdit;
