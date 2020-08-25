import React from "react";
import { Link as RouterLink } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import VICOButton from "../../../atoms/VICOButton";

import VICOTypeItem from "./VICOTypeItem";

const useStyles = makeStyles((theme) => ({
  whatIsVicoViewWrapper: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "98vh",
      padding: "20px 30px 0px"
    },
    [theme.breakpoints.down("xs")]: {
      display: "block"
    }
  },
  whatIsVicoViewContent: {
    boxShadow: "0px 5px 4px 0px #AEA7A1",
    borderRadius: 8,
    padding: "40px 50px 50px",
    margin: 140,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      boxShadow: "none",
      margin: "auto",
      display: "block",
      padding: 0
    }
  },
  whatIsVicoViewTitle: {
    fontSize: 30,
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: 26
    }
  },
  whatIsVicoViewSubtitle: {
    color: theme.palette.secondary.main,
    fontSize: 16,
    width: 480,
    marginTop: 20,
    [theme.breakpoints.down("sm")]: {
      width: "auto"
    }
  },
  gridContainer: {
    marginTop: 40,
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
      marginTop: 20
    }
  }
}));
const WhatIsVicoView = () => {
  const classes = useStyles();
  const isMediumScreen = useMediaQuery("(max-width:960px)");
  const buttonWidth = isMediumScreen ? "100%" : 267;
  return (
    <div className={classes.whatIsVicoViewWrapper}>
      <div className={classes.whatIsVicoViewContent}>
        {isMediumScreen && (
          <RouterLink to="/create">
            <img
              src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/NHCp-Arrow.png"
              alt="arrow-back"
            />
            <span className={classes.backText}>Atrás</span>
          </RouterLink>
        )}
        <div className={classes.innerContent}>
          <span className={classes.whatIsVicoViewTitle}>¿QUÉ ES UNA VICO?</span>
          <p className={classes.whatIsVicoViewSubtitle}>
            Cada casa puede ser una VICO. Entiende qué es el concepto VICO y
            cómo puedes volverte parte.
          </p>
          <Grid
            container
            spacing={isMediumScreen ? 1 : 10}
            className={classes.gridContainer}
          >
            <Grid item xs={12} md={4}>
              <VICOTypeItem
                icon="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/0lbb-furnished.png"
                title="Completamente amoblada"
                subtitle="La sala, cocina y las habitaciones deben estar completamente equipados y listos para mudarse."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <VICOTypeItem
                icon="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/EZVQ-calendar.png"
                title="Estadías de mínimo 30 días"
                subtitle="Tanto la estadía mínima como el tiempo de cancelación son de 30 días."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <VICOTypeItem
                icon="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/CqnI-inclusive.png"
                title="Todo incluído"
                subtitle="El wifi y los servicios públicos deben estar incluidos en el valor del alquiler mensual."
              />
            </Grid>
          </Grid>
        </div>
        <VICOButton
          component={RouterLink}
          to="/create/howto"
          variant="contained"
          color="primary"
          text="Continuar"
          style={{ width: buttonWidth, marginTop: isMediumScreen ? 20 : 40 }}
        />
      </div>
    </div>
  );
};

export default WhatIsVicoView;
