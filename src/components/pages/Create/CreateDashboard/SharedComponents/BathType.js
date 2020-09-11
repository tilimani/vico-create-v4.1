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
    marginRight: 40,
    marginTop: 20
  },
  bathTypeResponse: {
    display: "flex",
    justifyContent: "space-around"
  }
}));

const BathType = (props) => {
  const classes = useStyles();
  const { bathType, onChange } = props;
  return (
    <div className={classes.question}>
      <span className={classes.questionTitle}>
        Tipo de baño al que tiene acceso
      </span>
      <div className={classes.bathTypeResponse}>
        {[
          {
            icon:
              "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/rsnv-privatebath.png",
            text: "Baño privado"
          },
          {
            icon:
              "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/KN8H-sharedbath.png",
            text: "Baño compartido"
          }
        ].map((item, index) => (
          <div key={index} className={classes.response}>
            <VICORadioButton
              icon={item.icon}
              value={item.text}
              checked={bathType === item.text}
              onChange={onChange}
            />
            <span className={classes.squareBtnDesc}>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BathType;
