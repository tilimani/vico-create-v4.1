import React from "react";
import { makeStyles, TextField, withStyles } from "@material-ui/core";

import VICORadioButton from "../../../../atoms/VICORadioButton";
import VICOTextField from "../../../../atoms/VICOTextField";
import VICOButton from "../../../../atoms/VICOButton";

const useStyles = makeStyles((theme) => ({
  drawerContent: {
    width: 406,
    flexShrink: 0,
    marginLeft: 160,
    marginRight: 160,
    marginTop: 50,
    [theme.breakpoints.down("md")]: {
      width: "auto",
      margin: "30px 70px"
    },
    [theme.breakpoints.down("sm")]: {
      margin: "30px 20px"
    }
  },
  question: {
    marginTop: 40
  },
  questionTitle: {
    fontSize: 18,
    color: theme.palette.secondary.main,
    fontWeight: "bold"
  },
  questionDescription: {
    fontSize: 16,
    color: theme.palette.secondary.main,
    marginTop: 20
  },
  genderTypeResponse: {
    display: "flex",
    justifyContent: "space-around"
  },
  squareBtnDesc: {
    marginTop: 10,
    fontSize: 16,
    color: theme.palette.secondary.main,
    textAlign: "center",
    marginRight: 26
  },
  responseWrapper: {
    marginTop: 20
  },
  response: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 40,
    marginTop: 20
  },
  TextAreaResponseWrapper: {
    marginTop: 20
  },
  actions: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  inviteAction: {
    height: 81,
    width: 410,
    background: "#FFFFFF",
    border: "1px solid #EF8E01",
    borderRadius: 12,
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  inviteActionIcon: {
    position: "realtive",
    width: "20%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  inviteActionText: {
    position: "realtive",
    width: "80%",
    fontSize: 16,
    color: theme.palette.primary.main
  },
  inviteActionIconImg: {
    width: 20
  }
}));

const CustomTextField = withStyles((theme) => ({
  root: {
    height: 81,
    width: 406,
    borderRadius: 6,
    boxShadow: "0px 2px 4px rgba(239, 142, 5, 0.53)",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  }
}))(TextField);

const WhoOccupiesRoom = (props) => {
  const classes = useStyles();
  const { guest, setGuest, handleContinue, handleSkip } = props;
  const { name, gender, nationality } = guest;

  return (
    <div className={classes.drawerContent}>
      <div className={classes.question}>
        <span className={classes.questionTitle}>
          ¿Quién ocupa la habitación acutalmente?
        </span>
        <p className={classes.questionDescription}>
          Agregar un invitado manualmente. <br /> Las VICOs con información
          completa de los invitados <br /> actuales tienen un mejor rendmiento.
        </p>
        <div className={classes.responseWrapper}>
          <CustomTextField
            placeholder="Diana"
            label="Nombre"
            InputLabelProps={{
              shrink: true
            }}
            value={name}
            onChange={(event) =>
              setGuest({
                ...guest,
                name: event.target.value
              })
            }
          />
        </div>
      </div>
      <div className={classes.question}>
        <span className={classes.questionTitle}>Genro</span>
        <div className={classes.genderTypeResponse}>
          {[
            {
              icon:
                "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/Roem-male.png",
              text: "Hombre"
            },
            {
              icon:
                "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/wUDm-woman2.png",
              text: "Mujer"
            }
          ].map((item, index) => (
            <div key={index} className={classes.response}>
              <VICORadioButton
                icon={item.icon}
                value={item.text}
                checked={gender === item.text}
                onChange={(event) => {
                  setGuest({
                    ...guest,
                    gender: event.target.value
                  });
                }}
              />
              <span className={classes.squareBtnDesc}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.TextAreaResponseWrapper}>
        <VICOTextField
          placeholder="Nacionalidad"
          value={nationality}
          onChange={(event) =>
            setGuest({
              ...guest,
              nationality: event.target.value
            })
          }
        />
      </div>
      <div className={classes.actions}>
        <VICOButton
          onClick={() => handleContinue()}
          variant="contained"
          color="primary"
          text="Continuar"
          style={{
            width: 267,
            marginTop: 46
          }}
        />
        <div className={classes.inviteAction}>
          <div className={classes.inviteActionIcon}>
            <img
              src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/ao6O-pin.png"
              alt=""
              className={classes.inviteActionIconImg}
            />
          </div>
          <div className={classes.inviteActionText}>
            <p>Invita a tu inivitado mediante enlace o correo electrónico</p>
          </div>
        </div>
        <VICOButton
          variant="outlined"
          color="default"
          text="Omitir"
          onClick={() => handleSkip()}
          style={{
            width: 267,
            height: "auto",
            border: "none",
            backgroundColor: "transparent",
            fontSize: 16,
            fontWeight: "normal",
            marginTop: 20
          }}
        />
      </div>
    </div>
  );
};

export default WhoOccupiesRoom;
