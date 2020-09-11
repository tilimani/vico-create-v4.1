import React, { useState } from "react";

import { makeStyles } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import VICOMobileLinearProgress from "../../../atoms/VICOMobileLinearProgress";
import VICOSaveButton from "../../../atoms/VICOSaveButton";
import VICOReturnButton from "../../../atoms/VICOReturnButton";
import VICOButton from "../../../atoms/VICOButton";
import VICOAutoComplete from "../../../atoms/VICOAutoComplete";
import VICOTextField from "../../../atoms/VICOTextField";

const useStyles = makeStyles((theme) => ({
  vicoNameViewContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 5px 4px 0px #AEA7A1",
    borderRadius: 8,
    padding: "40px 20px",
    margin: "120px 120px",
    [theme.breakpoints.down("sm")]: {
      boxShadow: "none",
      padding: "40px 20px",
      margin: "auto"
    }
  },
  title: {
    fontSize: 20,
    color: theme.palette.secondary.main,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 16,
    color: theme.palette.secondary.main
  },
  formWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
    marginTop: 20,
    [theme.breakpoints.down("sm")]: {
      marginTop: 0
    }
  },
  inputsWrapper: {
    position: "relative",
    width: "70%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      marginTop: 40,
      width: "100%"
    }
  },
  tips: {
    color: theme.palette.secondary.main,
    marginTop: 46
  },
  tipsTitle: {
    fontSize: 20,
    color: theme.palette.secondary.main,
    marginTop: 30,
    fontWeight: "bold"
  },
  note: {
    fontSize: 16,
    color: theme.palette.secondary.main,
    marginTop: 30
  },
  actionsWrapper: {
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    width: "100%"
  },
  tipItem: {
    display: "flex",
    marginTop: 10
  },
  tipItemIcon: {
    color: "#07A529",
    width: 16,
    marginRight: 10
  },
  tipItemText: {
    fontSize: 16,
    color: theme.palette.secondary.main
  },
  autocompleteWrapper: {
    marginTop: 40
  },
  addtionalInfoField: {
    marginTop: 40,
    width: "100%"
  },
  withMapWarpper: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse"
    }
  },
  mapWrapper: {
    marginLeft: 40,
    position: "relative",
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      width: "auto"
    }
  }
}));

const AddressView = (props) => {
  const classes = useStyles();
  const isMediumScreen = useMediaQuery("(max-width:960px)");

  const [VICOAddress, setVICOAddress] = useState("");
  const [VICOAdditionalInfo, setVICOAdditionalInfo] = useState("");

  return (
    <div>
      {isMediumScreen && (
        <div>
          <VICOMobileLinearProgress step={5} />
          <div className={classes.actionsWrapper}>
            <VICOReturnButton
              action={() => {
                props.history.push("/create/name");
              }}
            />
            <VICOSaveButton
              action={() => {
                props.history.push("/create/basic");
              }}
            />
          </div>
        </div>
      )}
      <div className={classes.vicoNameViewContent}>
        {!isMediumScreen && (
          <div className={classes.actionsWrapper}>
            <VICOReturnButton
              action={() => {
                props.history.push("/create/name");
              }}
            />
            <VICOSaveButton
              action={() => {
                props.history.push("/create/basic");
              }}
            />
          </div>
        )}
        <div className={`${classes.formWrapper}`}>
          <div className={VICOAddress && classes.withMapWarpper}>
            <div className={classes.inputsWrapper}>
              <span className={classes.title}>
                Ingresa la dirección de tu VICO
              </span>
              <p className={classes.subtitle}>
                Tu dirección solamente se compartirá con las personas que
                reservaron tu VICO.
              </p>
              <div className={classes.autocompleteWrapper}>
                <VICOAutoComplete
                  label="Dirección"
                  options={addresses.map((option) => option.title)}
                  VICOAddress={VICOAddress}
                  setVICOAddress={setVICOAddress}
                />
              </div>
              <VICOTextField
                className={classes.addtionalInfoField}
                placeholder="Información adicional"
                value={VICOAdditionalInfo}
                onChange={(event) => setVICOAdditionalInfo(event.target.value)}
              />
            </div>

            {VICOAddress && (
              <div className={classes.mapWrapper}>
                <span className={classes.title}>
                  Confirma en el mapa la ubicación de tu VICO
                </span>
                <p className={classes.subtitle}>
                  Puedes mover el mapa con dos dedos para mejorar la precisión.
                </p>

                <img
                  src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/rxQ7-Base.png"
                  alt="map"
                  style={{ position: "realtive", width: "100%" }}
                />
              </div>
            )}
          </div>

          <VICOButton
            onClick={() => {
              props.history.push("/create/basic");
            }}
            variant="contained"
            color="primary"
            text="Continuar"
            style={{
              width: 267,
              marginTop: 46
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AddressView;

const addresses = [
  { title: "Calle 33c  # 88a-115", x: 12523633, y: 12523612 },
  { title: "Calle 34c  # 88a-15", x: 125215233, y: 23623612 },
  { title: "Calle 30  # 88-115", x: 14123633, y: 15478612 }
];
