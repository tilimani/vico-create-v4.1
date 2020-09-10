import React from "react";

import { makeStyles, TextField } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import VICOButton from "../../../atoms/VICOButton";
import VICOCodeInput from "../../../atoms/VICOCodeInput";

// import "./VerifNumberDialogFrom.css";
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
  note: {
    fontSize: 16,
    color: theme.palette.secondary.main,
    marginTop: 30
  },
  textFieldWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end"
  }
}));

const VerifNumberDialogFrom = (props) => {
  const classes = useStyles();
  const isMediumScreen = useMediaQuery("(max-width:960px)");
  const buttonWidth = isMediumScreen ? "100%" : 267;
  return (
    <div className={`${classes.formWrapper} formWrapper`}>
      <div className={classes.textFieldWrapper}>
        <VICOCodeInput />
        {/* <TextField label="Código" className={classes.textField} /> */}
        <p className={classes.note}>Reenviar en 30 segundos</p>
      </div>

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
          marginTop: 20
        }}
      />
    </div>
  );
};

export default VerifNumberDialogFrom;
