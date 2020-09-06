import React from "react";
import { makeStyles } from "@material-ui/core";
import VICOButton from "../../../../atoms/VICOButton";

import attention from "../../../../../assets/attention.png";

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

const CommonAreasGallery = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.innerContent}>
      <div>
        <span className={classes.title}>Fotos de las zonas sociales</span>
        <p className={classes.description}>
          Haz clic para subir fotos de tus zonas sociales y las habitaciones.
        </p>
      </div>
      <img src={attention} alt="" className={classes.joyrideImg} />
      <span className={classes.title}>¡ATENCIÓN!</span>
      <p className={classes.description}>
        Recuerda subir fotos de las zonas sociales, habitación y baño de tu
        VICO.
      </p>
      <VICOButton
        variant="contained"
        color="primary"
        text="Continuar"
        style={{
          width: 267,
          marginTop: 10
        }}
      />

      {/* <VICOButton
        variant="outlined"
        color="default"
        text="Omitir"
        onClick={() => {
          props.tutorial();
        }}
        style={{
          width: 267,
          height: "auto",
          border: "none",
          backgroundColor: "transparent"
        }}
      /> */}
    </div>
  );
};

export default CommonAreasGallery;
