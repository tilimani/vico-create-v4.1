import React from "react";

import { makeStyles, TextField } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

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
  const isMediumScreen = useMediaQuery("(max-width:960px)");
  const buttonWidth = isMediumScreen ? "100%" : 267;
  return (
    <div className={`${classes.formWrapper} formWrapper`}>
      <TextField label="Número de WhatsApp" className={classes.textField} />
      <VICOButton
        onClick={() => props.setOpenedPersonalInfoDialog(true)}
        variant="contained"
        color="primary"
        text="Continuar"
        style={{
          width: 267,
          marginTop: isMediumScreen ? 20 : 40
        }}
      />
      <p className={classes.useMyEmail}>Prefiero utilizar mi correo</p>
    </div>
  );
};

export default ContactNumberDialogContent;
