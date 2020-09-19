import React, { useState } from "react";

import {
  makeStyles,
  withStyles,
  TextField,
  FormControlLabel,
  Checkbox,
  Collapse,
  IconButton,
  Button
} from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import theme from "../../../../common/theme";
import RightDrawerScaffold from "./RightDrawerScaffold";
import VICOButton from "../../../atoms/VICOButton";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  drawerContent: {
    width: 400,
    flexShrink: 0,
    marginTop: 40,
    margin: "30px 70px",
    [theme.breakpoints.down("xs")]: {
      width: "auto"
    }
  },
  innerContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    color: theme.palette.secondary.main,
    fontWeight: "bold"
  },
  description: {
    fontSize: 16,
    color: theme.palette.secondary.main
  },
  question: {
    marginTop: 40
  },
  questionTitle: {
    fontSize: 16,
    color: theme.palette.secondary.main,
    fontWeight: "bold"
  },
  questionDescription: {
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.37)"
  },
  TextAreaResponseWrapper: {
    marginTop: 20
  },
  continueBtnWrapper: {
    textAlign: "center"
  },
  checkboxesWrapper: {
    display: "flex",
    flexDirection: "column"
  },
  descriptionLabel: {
    fontSize: 22,
    color: " rgba(0, 0, 0, 0.53)"
  },
  text: {
    fontSize: 16,
    color: theme.palette.secondary.main
  },
  innerCollapse: {
    paddingLeft: 20,
    display: "flex",
    flexDirection: "column"
  },
  distance: {
    marginRight: 30,
    marginLeft: 30
  },
  handleNumericValueWrapper: {
    marginTop: 20,
    marginBottom: 20
  }
}));

const CustomTextField = withStyles((theme) => ({
  root: {
    height: 109,
    width: 360,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: 12,
    [theme.breakpoints.down("sm")]: {
      width: "80%"
    }
  }
}))(TextField);

const CustomButtonIcon = withStyles({
  root: {
    boxShadow: "0px 2px 4px #C4C4C4",
    border: "none",
    backgroundColor: "white",
    color: theme.palette.secondary.main,
    fontSize: 16,
    "&:hover": {
      backgroundColor: "white",
      boxShadow: `0px 2px 4px ${theme.palette.primary.main}`,
      color: theme.palette.primary.main
    },
    "&:active": {
      boxShadow: `0px 2px 4px ${theme.palette.primary.main}`,
      backgroundColor: "white",
      color: theme.palette.primary.main
    },
    "&:focus": {
      boxShadow: `0px 2px 4px ${theme.palette.primary.main}`,
      color: theme.palette.primary.main
    }
  }
})(IconButton);

const CustomAddButton = withStyles({
  root: {
    boxShadow: "none",
    border: "none",
    backgroundColor: "white",
    color: theme.palette.secondary.main,
    paddingLeft: 0,
    fontSize: 16,
    "&:hover": {
      backgroundColor: "white",
      boxShadow: "none",
      color: theme.palette.secondary.main
    },
    "&:active": {
      backgroundColor: "white",
      boxShadow: "none",
      color: theme.palette.secondary.main
    },
    "&:focus": {
      backgroundColor: "white",
      boxShadow: "none",
      color: theme.palette.secondary.main
    }
  }
})(Button);

const Interests = (props) => {
  /** Styles */
  const classes = useStyles();

  const [pointsOfInterests, setPointsOfInterests] = useState({
    zoneDescription: ""
  });

  const zones = [
    "Metro",
    "Supermercado",
    "GYM",
    "Zonas de bares / Restaurantes"
  ];

  const [zonesCheckState, setZonesCheckState] = React.useState({
    Metro: true,
    Supermercado: false,
    GYM: false,
    "Zonas de bares / Restaurantes": false
  });

  const [distance, setDistance] = useState({
    Metro: 10,
    Supermercado: 10,
    GYM: 10,
    "Zonas de bares / Restaurantes": 10
  });

  const handleChange = (event) => {
    setZonesCheckState({
      ...zonesCheckState,
      [event.target.name]: event.target.checked
    });
  };

  return (
    <RightDrawerScaffold
      close={() => {
        props.history.push("/create/dashboard/1");
      }}
      save={() => {}}
    >
      <div className={classes.innerContent}>
        <div className={classes.drawerContent}>
          <span className={classes.title}>Puntos de interés</span>
          <p className={classes.description}>
            ¿Hay un museo cerca o una cancha de football? Describe si hay algún
            lugar de interés.
          </p>
          <div className={classes.checkboxesWrapper}>
            {zones.map((item, index) => {
              return (
                <>
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        checked={zonesCheckState[item]}
                        onChange={handleChange}
                        name={item}
                        color="primary"
                      />
                    }
                    label={<span className={classes.text}>{item}</span>}
                  />
                  <Collapse in={zonesCheckState[item] === true}>
                    <div className={classes.innerCollapse}>
                      <span className={classes.text}>
                        Se encuentra a una distancia de
                      </span>
                      <div className={classes.handleNumericValueWrapper}>
                        <CustomButtonIcon
                          onClick={() => {
                            if (distance[item] > 1) {
                              setDistance({
                                ...distance,
                                [item]: distance[item] - 1
                              });
                            }
                          }}
                        >
                          <RemoveIcon />
                        </CustomButtonIcon>
                        <span
                          className={clsx(classes.text, classes.distance)}
                        >{`${distance[item]} Minuto${
                          distance[item] > 1 ? "s" : ""
                        }`}</span>
                        <CustomButtonIcon
                          onClick={() =>
                            setDistance({
                              ...distance,
                              [item]: distance[item] + 1
                            })
                          }
                        >
                          <AddIcon />
                        </CustomButtonIcon>
                      </div>
                    </div>
                  </Collapse>
                </>
              );
            })}
          </div>
          <div>
            <CustomAddButton
              variant="outlined"
              color="default"
              className={classes.button}
              startIcon={<AddCircleOutlineIcon />}
            >
              Agregar lugar
            </CustomAddButton>
          </div>
          <div className={classes.question}>
            <span className={classes.questionTitle}>
              ¿Cómo describes la zona y el barrio de tu VICO? esta habitación?
            </span>
            <div className={classes.TextAreaResponseWrapper}>
              <CustomTextField
                multiline
                rows={4}
                InputLabelProps={{
                  shrink: true
                }}
                label={
                  <span className={classes.descriptionLabel}>
                    Descripción de la zona
                  </span>
                }
                value={pointsOfInterests.zoneDescription}
                onChange={(event) => {
                  setPointsOfInterests({
                    ...pointsOfInterests,
                    zoneDescription: event.target.value
                  });
                }}
              />
            </div>
          </div>

          <div className={classes.continueBtnWrapper}>
            <VICOButton
              onClick={() => props.history.push("/create/dashboard/1")}
              variant="contained"
              color="primary"
              text="Guardar"
              style={{
                width: 267,
                marginTop: 46,
                marginBottom: 40,
                color: "white"
              }}
            />
          </div>
        </div>
      </div>
    </RightDrawerScaffold>
  );
};

export default Interests;
