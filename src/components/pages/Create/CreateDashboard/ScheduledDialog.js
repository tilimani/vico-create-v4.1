import React from "react";
import {
  makeStyles,
  withStyles,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";
import VICOButton from "../../../atoms/VICOButton";

import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles((theme) => ({
  selectedDate: {
    fontSize: 30,
    fontWeight: "bold",
    color: theme.palette.secondary.main
  },
  message: {
    fontSize: 22,
    fontWeight: "bold",
    color: theme.palette.secondary.main
  },
  message2: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.palette.secondary.main,
    margin: 0
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: theme.palette.secondary.main
  },
  image: {
    width: 160
  },
  description: {
    fontSize: 16,
    color: theme.palette.secondary.main,
    position: "relative",
    width: "50%"
  },
  imageWarpper: {
    position: "relative",
    width: "50%",
    textAlign: "center"
  },

  skipBtn: {
    fontSize: 16
  },
  innerContent: {
    display: "flex",
    marginTop: 40
  },
  tipItem: {
    display: "flex",
    marginTop: 10
  },
  tipItemCheckIcon: {
    color: "#07A529",
    width: 16,
    marginRight: 10
  },
  tipItemText: {
    fontSize: 16,
    color: theme.palette.secondary.main
  }
}));

const CustomDialog = withStyles((theme) => ({
  paperWidthSm: {
    height: 482,
    width: 592,
    maxHeight: "auto",
    padding: 30
  }
}))(Dialog);
const CustomDialogActions = withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    margin: "auto"
  }
}))(DialogActions);

const CustomDialogContentText = withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    textAlign: "center"
  }
}))(DialogContentText);

const ScheduledDialog = (props) => {
  const classes = useStyles();

  return (
    <CustomDialog
      maxWidth="sm"
      open={props.openScheduled}
      onClose={props.handleScheduledClose}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle id="max-width-dialog-title"></DialogTitle>
      <DialogContent>
        <CustomDialogContentText>
          <span className={classes.selectedDate}>19/07/2020 - 1:00 p.m</span>
          <span className={classes.message}>
            ¡Agendaste la cita de verifiación!
          </span>
        </CustomDialogContentText>
        <div className={classes.innerContent}>
          <div className={classes.description}>
            <p className={classes.message2}>¡Has termindo el tutorial!</p>
            <p className={classes.tipsTitle}>Siguientes pasos:</p>
            <div className={classes.tipItem}>
              <CheckIcon className={classes.tipItemCheckIcon} />
              <span className={classes.tipItemText}>
                Agrega una descripción.
              </span>
            </div>
            <div className={classes.tipItem}>
              <CheckIcon className={classes.tipItemCheckIcon} />
              <span className={classes.tipItemText}>
                Indicar puntos de interés cercanos.
              </span>
            </div>
          </div>
          <div className={classes.imageWarpper}>
            <img
              src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/WPT6-finalimg.png"
              alt=""
              className={classes.image}
            />
          </div>
        </div>
      </DialogContent>
      <CustomDialogActions>
        <VICOButton
          variant="contained"
          onClick={props.handleScheduledClose}
          color="primary"
          text="Terminar"
        />
        <Button color="secondary" className={classes.skipBtn}>
          Seguir editando
        </Button>
      </CustomDialogActions>
    </CustomDialog>
  );
};

export default ScheduledDialog;
