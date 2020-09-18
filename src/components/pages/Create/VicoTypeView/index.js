import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import VICOHouseTypeItem from "./VICOHouseTypeItem";
import VICOReturnButton from "../../../atoms/VICOReturnButton";
import VICOSaveButton from "../../../atoms/VICOSaveButton";
import VICOMobileLinearProgress from "../../../atoms/VICOMobileLinearProgress";

const useStyles = makeStyles((theme) => ({
  vicoTypeViewWrapper: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "98vh",
      padding: "20px 30px 0px"
    },
    [theme.breakpoints.down("xs")]: {
      display: "block",
      padding: 0
    }
  },
  vicoTypeViewContent: {
    boxShadow: "0px 5px 4px 0px #AEA7A1",
    borderRadius: 8,
    padding: "40px 50px 50px",
    margin: 140,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("md")]: { margin: "auto" },
    [theme.breakpoints.down("sm")]: {
      boxShadow: "none",

      display: "block",
      padding: 0
    }
  },
  vicoTypeViewTitle: {
    fontSize: 36,
    color: theme.palette.secondary.main,
    fontWeight: "bold"
  },
  vicoTypeViewSubtitle: {
    color: theme.palette.secondary.main,
    fontSize: 16,
    width: 480,
    marginTop: 20,
    [theme.breakpoints.down("sm")]: {
      width: "auto"
    }
  },
  gridContainer: {
    marginTop: -20,
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      margin: "auto"
    }
  },
  backText: {
    fontSize: 18,
    color: theme.palette.secondary.main,
    marginLeft: 10
  },
  innerContent: {
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
      padding: "0px 30px"
    }
  },
  noteWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 40,
    cursor: "pointer",
    position: "relative",
    marginBottom: 20
  },
  note: {
    color: theme.palette.secondary.main,
    fontSize: 20,
    fontWeight: "bold",
    float: "right",
    width: 300,
    textAlign: "right",
    marginRight: 20,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      textAlign: "left"
    }
  },
  mobileRightArrow: {
    marginLeft: 10,
    position: "absolute",
    top: 30
  },
  actionsWrapper: {
    display: "flex",
    justifyContent: "space-between"
  }
}));
const vicoTypeView = (props) => {
  const classes = useStyles();
  const isMediumScreen = useMediaQuery("(max-width:960px)");
  const isMobileScreen = useMediaQuery("(max-width:600px)");

  return (
    <div className={classes.vicoTypeViewWrapper}>
      <div className={classes.vicoTypeViewContent}>
        {isMediumScreen && (
          <div>
            <VICOMobileLinearProgress step={3} />
            <div className={classes.actionsWrapper}>
              <VICOReturnButton
                action={() => {
                  props.history.push("/create/howto");
                }}
              />
              <VICOSaveButton
                action={() => {
                  props.history.push("/create/name");
                }}
              />
            </div>
          </div>
        )}
        <div className={classes.innerContent}>
          <span className={classes.vicoTypeViewTitle}>CREA TU VICO</span>
          <p className={classes.vicoTypeViewSubtitle}>
            Escoge el tipo de vivienda que quieres ofrecer.
          </p>
          <Grid
            container
            spacing={isMediumScreen ? 1 : 10}
            className={classes.gridContainer}
          >
            <Grid item xs={12} md={4}>
              <VICOHouseTypeItem
                icon="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/eDLd-shared.png"
                title="Vivienda Compartida"
                subtitle="Una casa o un apartamento con varias habitaciones, las cuales se alquilan individualmente."
                houseType="shared"
                history={props.history}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <VICOHouseTypeItem
                icon="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/v1t5-studio.png"
                title="Apartaestudio"
                subtitle="Normalmente un apartamento de un ambiente que combina una cocina, sala y dormitorio."
                houseType="studio"
                history={props.history}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <VICOHouseTypeItem
                icon="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/Nt_y-private.png"
                title="Apartamento privado"
                subtitle="Una casa o un apartamento con varias habitaciones. Se alquila completo. "
                houseType="private"
                history={props.history}
              />
            </Grid>
          </Grid>
          <div className={classes.noteWrapper}>
            <span className={classes.note}>
              Soy el Administrador de un Coliving space comercial
              {isMobileScreen && (
                <ArrowForwardIcon className={classes.mobileRightArrow} />
              )}
            </span>
            {!isMobileScreen && <ArrowForwardIcon />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default vicoTypeView;
