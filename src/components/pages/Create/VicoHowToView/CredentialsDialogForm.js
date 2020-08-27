import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles, TextField } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import VICOButton from "../../../atoms/VICOButton";

// import "./CredentialsDialogForm.css";
const useStyles = makeStyles((theme) => ({
  formWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20
  },
  nombre: {
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: 6,
    width: 311,
    height: 67
  },
  appelido: {
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: 6,
    width: 311,
    height: 67,
    marginTop: 20
  }
}));

const CredentialsDialogForm = (props) => {
  const classes = useStyles();
  const isMediumScreen = useMediaQuery("(max-width:960px)");
  const buttonWidth = isMediumScreen ? "100%" : 267;
  return (
    <div className={`${classes.formWrapper} formWrapper`}>
      <TextField label="Nombre" className={classes.nombre} />
      <TextField label="Apellido" className={classes.appelido} />
      <VICOButton
        component={RouterLink}
        to="/create/type"
        variant="contained"
        color="primary"
        text="Continuar"
        style={{
          width: 267,
          marginTop: 40
        }}
      />
    </div>
  );
};

export default CredentialsDialogForm;
