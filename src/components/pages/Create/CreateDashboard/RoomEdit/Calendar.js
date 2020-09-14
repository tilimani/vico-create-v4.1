import React from "react";
import { makeStyles } from "@material-ui/core";

import VICOButton from "../../../../atoms/VICOButton";
import VICOCalendar from "../../../../atoms/VICOCalendar.js";

const useStyles = makeStyles((theme) => ({
  drawerContent: {
    width: 406,
    flexShrink: 0,
    marginLeft: 160,
    marginRight: 160,
    marginTop: 50
  },
  question: {
    marginTop: 40
  },
  questionTitle: {
    fontSize: 18,
    color: theme.palette.secondary.main,
    fontWeight: "bold"
  },
  actions: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  dateInputWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  dateInput: {
    marginTop: 20,
    width: 257,
    height: 58,
    background: "#FFFFFF",
    boxShadow: "0px 2px 4px #C4C4C4",
    borderRadius: 12
  }
}));

const Calendar = (props) => {
  const classes = useStyles();
  const { date, setDate, handleClick } = props;
  return (
    <div className={classes.drawerContent}>
      <div className={classes.question}>
        <span className={classes.questionTitle}>
          A partir de cuando esta disponible
        </span>
      </div>
      <div className={classes.dateInputWrapper}>
        <div className={classes.dateInput}>
          <VICOCalendar date={date} setDate={setDate} />
        </div>
      </div>
      <div className={classes.actions}>
        <VICOButton
          onClick={() => props.handleClick()}
          variant="contained"
          color="primary"
          text="Continuar"
          style={{
            width: 267,
            marginTop: 46
          }}
        />

        <VICOButton
          variant="outlined"
          color="default"
          text="Omitir"
          onClick={() => {}}
          style={{
            width: 267,
            height: "auto",
            border: "none",
            backgroundColor: "transparent",
            fontSize: 16,
            fontWeight: "normal"
          }}
        />
      </div>
    </div>
  );
};

export default Calendar;
