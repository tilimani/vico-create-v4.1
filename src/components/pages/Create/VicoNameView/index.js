import React, { useState } from "react";

import { makeStyles } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { CreateConsumer } from "../../../../common/context";
import VICOMobileLinearProgress from "../../../atoms/VICOMobileLinearProgress";
import VICOSaveButton from "../../../atoms/VICOSaveButton";
import VICOReturnButton from "../../../atoms/VICOReturnButton";
import VICOButton from "../../../atoms/VICOButton";

import CheckIcon from "@material-ui/icons/Check";

import VICOInputAdornment from "../../../atoms/VICOInputAdornment";
// import "./VicoNameView.css";
const useStyles = makeStyles((theme) => ({
  vicoNameViewContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 5px 4px 0px #AEA7A1",
    borderRadius: 8,
    padding: "40px 20px",
    margin: "auto",
    marginTop: 70,
    width: 506,
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      boxShadow: "none"
    }
  },
  title: {
    fontSize: 20,
    color: theme.palette.secondary.main,
    fontWeight: "bold"
  },
  formWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20
  },
  titleInputWrapper: {
    position: "relative",
    width: "100%"
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
    justifyContent: "space-between"
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
  }
}));

const VicoNameView = (props) => {
  const classes = useStyles();
  const isMediumScreen = useMediaQuery("(max-width:960px)");

  const [VICOName, setVICOName] = useState("Sweet home");

  return (
    <div>
      {isMediumScreen && (
        <CreateConsumer>
          {(state) => {
            return (
              <div>
                <VICOMobileLinearProgress step={state.createStep} />
                <div className={classes.actionsWrapper}>
                  <VICOReturnButton
                    action={() => {
                      props.history.push("/create/type");
                      state.changeState("createStep", 4);
                    }}
                  />
                  <VICOSaveButton
                    action={() => {
                      props.history.push("/create/address");
                      state.changeState("createStep", 6);
                    }}
                  />
                </div>
              </div>
            );
          }}
        </CreateConsumer>
      )}
      <div className={classes.vicoNameViewContent}>
        <div className={`${classes.formWrapper}`}>
          <div className={classes.titleInputWrapper}>
            <span className={classes.title}>Dale un nombre a tu VICO</span>
            <VICOInputAdornment value={VICOName} setVICOName={setVICOName} />
          </div>
          <div className={classes.tips}>
            <span className={classes.tipsTitle}>Tips rápidos:</span>
            <div>
              <div className={classes.tipItem}>
                <CheckIcon className={classes.tipItemIcon} />
                <span className={classes.tipItemText}>
                  Nombres cortos y fáciles de recordar.
                </span>
              </div>

              <div className={classes.tipItem}>
                <CheckIcon className={classes.tipItemIcon} />
                <span className={classes.tipItemText}>
                  Expresa la personalidad de tu VICO.
                </span>
              </div>

              <div className={classes.tipItem}>
                <CheckIcon className={classes.tipItemIcon} />
                <span className={classes.tipItemText}>
                  Ejemplos: Sweet Home, Indie, Malibú o Casa Caliente.
                </span>
              </div>
            </div>
          </div>
          <CreateConsumer>
            {(state) => {
              return (
                <VICOButton
                  onClick={() => {
                    props.history.push("/create/address");
                    state.changeState("createStep", 6);
                  }}
                  variant="contained"
                  color="primary"
                  text="Continuar"
                  style={{
                    width: 267,
                    marginTop: 46
                  }}
                />
              );
            }}
          </CreateConsumer>
          <p className={classes.note}>Lo haré más tarde</p>
        </div>
      </div>
    </div>
    //   <VICOButton
    //   component={RouterLink}
    //   to="/create/address"
    //   variant="contained"
    //   color="primary"
    //   text="Continue"
    // />
  );
};

export default VicoNameView;
