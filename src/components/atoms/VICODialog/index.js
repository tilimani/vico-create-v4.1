import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  makeStyles,
  Dialog,
  DialogTitle,
  DialogContent
} from "@material-ui/core";

import logoletter from "../../../assets/logo-letter.png";

import "./index.css";

import VICOMobileLinearProgress from "./VICOMobileLinearProgress";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 30,
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    marginTop: 14
  },
  subtitle: {
    fontSize: 16,
    color: theme.palette.secondary.main,
    marginTop: 10
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 10px"
  },
  mobileHeader: {
    position: "relative",
    top: 0,
    left: 0
  }
}));

function VICODialog(props) {
  const handleClose = () => {
    props.setDialogOpened(false);
  };
  const classes = useStyles();
  const isMobileScreen = useMediaQuery("(max-width:600px)");
  return (
    <Dialog
      open={props.dialogOpened}
      onClose={handleClose}
      className="dialogWrapper"
    >
      {isMobileScreen && (
        <div className={classes.mobileHeader}>
          <VICOMobileLinearProgress />
        </div>
      )}
      <DialogTitle>
        <div className={classes.titleWrapper}>
          <img src={logoletter} alt="logo-letter" />
          <span className={classes.title}>{props.title}</span>
          {props.subtitle && (
            <span className={classes.subtitle}>{props.subtitle}</span>
          )}
        </div>
      </DialogTitle>
      <DialogContent>{props.form}</DialogContent>
    </Dialog>
  );
}

export default VICODialog;
