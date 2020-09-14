import React from "react";
import { makeStyles } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const useStyles = makeStyles((theme) => ({
  stepFrame: {
    height: 166,
    width: 148,
    borderRadius: 6,
    backgroundColor: "#fbf7f4",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)"
  },
  doneStatus: {
    color: "#07A529",
    position: "absolute",
    right: -10,
    top: -10,
    height: 28,
    width: 28
  },
  notDoneStatus: {
    color: "#C4C4C4",
    position: "absolute",
    right: -10,
    top: -10,
    height: 28,
    width: 28
  },
  image: {
    position: "relative",
    width: "60%"
  },
  text: {
    fontSize: 16,
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10
  },
  stepContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  }
}));

const TutorialStep = (props) => {
  const classes = useStyles();
  const { done, image, text } = props;
  return (
    <div className={classes.stepFrame}>
      <CheckCircleIcon
        className={done ? classes.doneStatus : classes.notDoneStatus}
        color="#C4C4C4"
      />

      <div className={classes.stepContent}>
        <img src={image} alt="" className={classes.image} />
        <span className={classes.text}>{text}</span>
      </div>
    </div>
  );
};

export default TutorialStep;
