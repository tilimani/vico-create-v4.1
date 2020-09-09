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

import VICOCalendar from "../../../atoms/VICOCalendar.js";
import VICOTimePicker from "../../../atoms/VICOTimePicker";
const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: theme.palette.secondary.main
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.palette.secondary.main
  },
  description: {
    fontSize: 16,
    color: theme.palette.secondary.main
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.palette.secondary.main,
    marginTop: 40
  },
  dateInputWarpper: {
    marginTop: 20,
    width: 257,
    height: 58,
    background: "#FFFFFF",
    boxShadow: "0px 2px 4px #C4C4C4",
    borderRadius: 12
  },
  timeInputWrapper: {
    marginTop: 20
  },
  skipBtn: {
    fontSize: 16
  }
}));

const CustomDialog = withStyles((theme) => ({
  paperWidthSm: {
    height: 700,
    width: 569,
    marginTop: 200,
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

const VerificationDateDialog = (props) => {
  const classes = useStyles();
  const [date, setDate] = React.useState(null);

  const [time, setTime] = React.useState({
    hours: "00",
    minutes: "00",
    clock: "a.m"
  });

  const getFinalDate = (date, time) => {
    let finalDate = new Date(date);
    if (time.clock === "p.m") {
      if (time.hours == 12) {
        finalDate.setHours(parseInt(time.hours));
      } else {
        finalDate.setHours(parseInt(time.hours) + 12);
      }
    } else {
      if (time.hours == 12) {
        finalDate.setHours(parseInt(time.hours) - 12);
      } else {
        finalDate.setHours(parseInt(time.hours));
      }
    }
    finalDate.setMinutes(parseInt(time.minutes));
    return finalDate;
  };

  return (
    <CustomDialog
      maxWidth="sm"
      open={props.openDatepicker}
      onClose={props.handleDatepickerClose}
      aria-labelledby="max-width-dialog-title"
      style={{ height: 771 }}
    >
      <DialogTitle id="max-width-dialog-title">
        <span className={classes.title}>Fecha de verificación</span>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <span className={classes.subtitle}>
            ¿En que fecha podrias verificar tu VICO con nuestro equipo ?
          </span>
          <p className={classes.description}>
            Antes de publicar tu VICO nuestro equipo debe hacer una verificación
            por video llamada de la casa que deseas subir a nuestra plataforma.
          </p>
        </DialogContentText>
        <div className={classes.label}>Fecha</div>
        <div className={classes.dateInputWarpper}>
          <VICOCalendar setDate={setDate} />
        </div>

        <div className={classes.label}>Hora</div>
        <div className={classes.timeInputWrapper}>
          <VICOTimePicker time={time} setTime={setTime} />
        </div>
      </DialogContent>
      <CustomDialogActions>
        <VICOButton
          onClick={() => props.handleScheduleVisit(getFinalDate(date, time))}
          variant="contained"
          color="primary"
          text="Agendar mi cita"
        />
        <Button
          onClick={props.handleDatepickerClose}
          color="secondary"
          className={classes.skipBtn}
        >
          Omitir
        </Button>
      </CustomDialogActions>
    </CustomDialog>
  );
};

export default VerificationDateDialog;
