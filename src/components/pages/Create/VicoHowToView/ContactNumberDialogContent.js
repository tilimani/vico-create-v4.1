import React from "react";
import { makeStyles, TextField } from "@material-ui/core";

import VICOButton from "../../../atoms/VICOButton";

import "./ContactNumberDialogContent.css";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20
  },
  textField: {
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: 6,
    width: 311,
    height: 67
  },
  useMyEmail: {
    fontSize: 16,
    color: theme.palette.secondary.main
  }
}));

const ContactNumberDialogContent = (props) => {
  const classes = useStyles();
  return (
    <div className={`${classes.formWrapper} formWrapper`}>
      <TextField label="Número de WhatsApp" className={classes.textField} />
      <VICOButton
        onClick={() => {
          props.setOpenedPersonalInfoDialog(true);
          props.action();
        }}
        variant="contained"
        color="primary"
        text="Continuar"
        style={{
          width: 267,
          marginTop: 40
        }}
      />
      <p className={classes.useMyEmail}>Prefiero utilizar mi correo</p>
    </div>
  );
};

export default ContactNumberDialogContent;
