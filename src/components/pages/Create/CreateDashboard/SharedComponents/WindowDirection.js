import React from "react";
import { makeStyles } from "@material-ui/core";

import VICORadioButton from "../../../../atoms/VICORadioButton";

const useStyles = makeStyles((theme) => ({
  question: {
    marginTop: 40
  },
  questionTitle: {
    fontSize: 16,
    color: theme.palette.secondary.main,
    fontWeight: "bold"
  },
  squareBtnDesc: {
    marginTop: 10,
    fontSize: 16,
    color: theme.palette.secondary.main,
    textAlign: "center",
    marginRight: 26
  },
  response: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  bathTypeResponse: {
    display: "flex",
    justifyContent: "space-around"
  },
  squareBtnsWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  }
}));

const WindowDirection = (props) => {
  const classes = useStyles();
  const { windowLook, onChange } = props;
  return (
    <div className={classes.question}>
      <span className={classes.questionTitle}>
        ¿Hacia dónde mira la ventana?
      </span>
      <div className={classes.squareBtnsWrapper}>
        {[
          {
            icon:
              "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/irNV-nowindow.png",
            text: "Sin ventana"
          },
          {
            icon:
              "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/87wV-inside.png",
            text: "Hacia dentro"
          },
          {
            icon:
              "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/S97j-tothepatio.png",
            text: "Hacia el patio"
          },
          {
            icon:
              "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/Vkzl-outside.png",
            text: "Hacia afuera"
          }
        ].map((item, index) => (
          <div key={index} className={classes.response}>
            <VICORadioButton
              icon={item.icon}
              value={item.text}
              checked={windowLook === item.text}
              onChange={onChange}
            />
            <span className={classes.squareBtnDesc}>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WindowDirection;
