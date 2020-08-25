import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import VICOButton from "../../../atoms/VICOButton";

const useStyles = makeStyles((theme) => ({
  welcomeViewWrapper: {
    backgroundColor: "#f59100",
    minHeight: "98vh",
    height: "98vh",
    position: "relative"
  },
  welcomeViewContent: {
    width: 300,
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      paddingLeft: 20,
      paddingRight: 20
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    top: "30%"
  },
  welcomeText: {
    fontWeight: "bold",
    fontSize: 36,
    color: "#ffffff"
  },
  welcomeDescription: {
    fontSize: 25,
    color: "#ffffff",
    textAlign: "center",
    marginTop: "0.5em",
    [theme.breakpoints.down("sm")]: {
      fontSize: 20
    }
  },
  sloganText: {
    fontSize: 20,
    color: "#ffffff",
    marginTop: 30
  }
}));

const CreateWelcomeView = () => {
  const classes = useStyles();
  return (
    <div className={classes.welcomeViewWrapper}>
      <div className={classes.welcomeViewContent}>
        <span className={classes.welcomeText}>Bienvenidos</span>
        <p className={classes.welcomeDescription}>
          Cambiamos la forma como nuestro mundo vive
        </p>
        <VICOButton
          component={RouterLink}
          to="/create/vicoinfo"
          variant="contained"
          color="white"
          text="¡Vamos!"
          style={{
            color: "#EF8E01",
            backgroundColor: "white",
            width: 267,
            marginTop: 30,
            fontSize: 20
          }}
        />
        <span className={classes.sloganText}>#lovewhereyoulive</span>
      </div>
    </div>
  );
};

export default CreateWelcomeView;
