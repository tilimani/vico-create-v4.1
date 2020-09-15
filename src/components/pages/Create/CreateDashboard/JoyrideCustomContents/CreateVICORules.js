import React from "react";
import { makeStyles, useMediaQuery } from "@material-ui/core";

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
  const isMediumScreen = useMediaQuery("(max-width:960px)");
  return (
    <div className={classes.innerContent}>
      {!isMediumScreen && (
        <img
          src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/kO2J-ruleJoyride.png"
          alt=""
          className={classes.joyrideImg}
        />
      )}

      <span className={classes.title}>Normas de la VICO</span>
      <p className={classes.description}>
        Define tus condiciones, así los interesados podrán verlos antes de
        decidir alquilar tu VICO.
      </p>
    </div>
  );
};

export default CreateVICORules;
