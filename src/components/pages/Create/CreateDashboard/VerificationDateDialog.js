import React from "react";
import {
  makeStyles,
  withStyles,
  Dialog,
  DialogContent,
  Button,
  useMediaQuery
} from "@material-ui/core";
import VICOButton from "../../../atoms/VICOButton";

import VICOCalendar from "../../../atoms/VICOCalendar.js";
import VICOTimePicker from "../../../atoms/VICOTimePicker";
import VICOMobileLinearProgress from "../../../atoms/VICOMobileLinearProgress";
import VICOReturnButton from "../../../atoms/VICOReturnButton";
import VICOSaveButton from "../../../atoms/VICOSaveButton";

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
    marginTop: 20
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
    marginTop: 10,
    paddingBottom: 20
  },
  skipBtn: {
    fontSize: 16
  },
  actionWrapper: {
    textAlign: "center",
    marginTop: 15,
    [theme.breakpoints.down("sm")]: {
      padding: "0px 30px 0px 30px !important"
    }
  },
  topActionsWrapper: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

const CustomDialog = withStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      flex: "auto"
    }
  },
  paperWidthSm: {
    width: 569,
    maxHeight: "auto",
    padding: 30,
    [theme.breakpoints.down("sm")]: {
      padding: 0
    }
  }
}))(Dialog);

const CustomDialogContent = withStyles((theme) => ({
  root: {
    padding: "0px 30px 0px 30px !important",
    [theme.breakpoints.down("sm")]: {
      flex: "none"
    }
  }
}))(DialogContent);

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
  const isMediumScreen = useMediaQuery("(max-width:960px)");
  return (
    <CustomDialog
      maxWidth="sm"
      open={props.openDatepicker}
      onClose={props.handleDatepickerClose}
      aria-labelledby="max-width-dialog-title"
      style={!isMediumScreen ? { height: 771 } : {}}
    >
      {isMediumScreen && (
        <div>
          <VICOMobileLinearProgress step={6} />
          <div className={classes.topActionsWrapper}>
            <VICOReturnButton
              action={() => {
                //  props.history.push("/create/address");
              }}
            />
            <VICOSaveButton
              action={() => {
                // if (house.type === "shared") {
                //   props.history.push(`/create/dashboard/${house.id}`);
                // } else {
                //   props.history.push("/create/availability");
                // }
              }}
            />
          </div>
        </div>
      )}
      <CustomDialogContent>
        {!isMediumScreen && (
          <span className={classes.title}>Fecha de verificación</span>
        )}

        <p className={classes.subtitle}>
          ¿En que fecha podrias verificar tu VICO con nuestro equipo ?
        </p>
        <p className={classes.description}>
          Antes de publicar tu VICO nuestro equipo debe hacer una verificación
          por video llamada de la casa que deseas subir a nuestra plataforma.
        </p>

        <div className={classes.label}>Fecha</div>
        <div className={classes.dateInputWarpper}>
          <VICOCalendar setDate={setDate} />
        </div>

        <div className={classes.label}>Hora</div>
        <div className={classes.timeInputWrapper}>
          <VICOTimePicker time={time} setTime={setTime} />
        </div>
      </CustomDialogContent>
      <div className={classes.actionWrapper}>
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
      </div>
    </CustomDialog>
  );
};

export default VerificationDateDialog;
