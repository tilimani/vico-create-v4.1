import React from "react";
import { makeStyles } from "@material-ui/core";

import ruleJoyride from "../../../../../assets/ruleJoyride.png";

const useStyles = makeStyles((theme) => ({
  innerContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  joyrideImg: {
    width: 260,
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

const CreateVICORules = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.innerContent}>
      <img src={ruleJoyride} alt="" className={classes.joyrideImg} />
      <span className={classes.title}>Normas de la VICO</span>
      <p className={classes.description}>
        Define tus condiciones, así los interesados podrán verlos antes de
        decidir alquilar tu VICO.
      </p>
    </div>
  );
};

export default CreateVICORules;
