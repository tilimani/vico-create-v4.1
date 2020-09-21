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

const CommonAreasGallery = () => {
  const classes = useStyles();
  return (
    <div className={classes.innerContent}>
      <div>
        <span className={classes.title}>Fotos de las zonas sociales</span>
        <p className={classes.description}>
          Haz clic para subir fotos de tus zonas sociales y las habitaciones.
        </p>
      </div>

      <img
        src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/x9Ay-attention.png"
        alt=""
        className={classes.joyrideImg}
      />
      <span className={classes.title}>¡ATENCIÓN!</span>
      <p className={classes.description}>
        Recuerda subir fotos de las zonas sociales, habitación y baño de tu
        VICO.
      </p>
    </div>
  );
};

export default CommonAreasGallery;
