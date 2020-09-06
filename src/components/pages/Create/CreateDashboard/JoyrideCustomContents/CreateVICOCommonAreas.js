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
    width: 120,
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

const CreateVICOCommonAreas = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.innerContent}>
      <img src={socialZones} alt="" className={classes.joyrideImg} />
      <span className={classes.title}>Zonas sociales</span>
      <p className={classes.description}>
        Agrega fotos de las zonas sociales y edita la información de tu VICO.
      </p>
    </div>
  );
};

export default CreateVICOCommonAreas;
