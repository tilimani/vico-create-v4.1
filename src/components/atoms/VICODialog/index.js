import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, Dialog, DialogContent } from "@material-ui/core";

import "./index.css";

import VICOMobileLinearProgress from "./VICOMobileLinearProgress";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 20,
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    marginTop: 14,
    width: 300,
    textAlign: "center"
  },
  titleIngreso: {
    fontSize: 30,
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    marginTop: 14
  },
  subtitle: {
    fontSize: 16,
    color: theme.palette.secondary.main,
    marginTop: 10,
    width: 300
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 10px",
    [theme.breakpoints.down("xs")]: {
      marginTop: 80
    }
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
      <DialogContent>
        {isMobileScreen && (
          <div className={classes.mobileHeader}>
            <VICOMobileLinearProgress step={props.step} />
          </div>
        )}

        <div className={classes.titleWrapper}>
          <img
            src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/9kW1-logo-letter.png"
            alt="logo-letter"
          />
          <span
            className={
              props.title === "INGRESO" ? classes.titleIngreso : classes.title
            }
          >
            {props.title}
          </span>
          {props.subtitle && (
            <span className={classes.subtitle}>{props.subtitle}</span>
          )}
        </div>
        {props.form}
      </DialogContent>
    </Dialog>
  );
}

export default VICODialog;
