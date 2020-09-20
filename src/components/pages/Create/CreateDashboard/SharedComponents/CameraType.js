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
  cameraTypeResponse: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingLeft: 11
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
  }
}));

const CameraType = (props) => {
  const classes = useStyles();
  const { cameraType, onChange } = props;
  return (
    <div className={classes.question}>
      <span className={classes.questionTitle}>Tipo de cama</span>
      <div className={classes.cameraTypeResponse}>
        {[
          {
            icon:
              "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/qKoY-sencilla.png",
            text: "Sencilla"
          },
          {
            icon:
              "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/YxsV-semidouble.png",
            text: "Semi-doble"
          },
          {
            icon:
              "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/YxsV-doble.png",
            text: "Doble"
          }
        ].map((item, index) => (
          <div key={index} className={classes.response}>
            <VICORadioButton
              icon={item.icon}
              value={item.text}
              checked={cameraType === item.text}
              onChange={onChange}
            />
            <span className={classes.squareBtnDesc}>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CameraType;
