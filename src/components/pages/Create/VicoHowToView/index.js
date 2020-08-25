import React from "react";
import { Link as RouterLink } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import VICOButton from "../../../atoms/VICOButton";

import StepItem from "./StepItem";

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
  },
  imgFour: {
    marginTop: 5
  }
}));
const VicoHowToView = () => {
  const classes = useStyles();
  const isMediumScreen = useMediaQuery("(max-width:960px)");
  const buttonWidth = isMediumScreen ? "100%" : 267;
  return (
    <div className={classes.whatIsVicoViewWrapper}>
      <div className={classes.whatIsVicoViewContent}>
        {isMediumScreen && (
          <div>
            <img
              src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/NHCp-Arrow.png"
              alt="arrow-back"
            />
            <span className={classes.backText}>Atrás</span>
          </div>
        )}
        <div className={classes.innerContent}>
          <span className={classes.whatIsVicoViewTitle}>
            CREA TU VICO EN 4 SIMPLES PASOS
            {/* <img src={four} alt="four" className="imgFour" /> */}
          </span>
          <p className={classes.whatIsVicoViewSubtitle}>
            Conoce el proceso para publicar tu VICO en nuestra plataforma.
          </p>
          <Grid
            container
            spacing={isMediumScreen ? 6 : 10}
            className={classes.gridContainer}
          >
            <Grid item xs={6} md={3}>
              <StepItem
                icon="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/IZme-book.png"
                title="1. Ingresa tus datos de contacto"
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <StepItem
                icon="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/N--H-home2.png"
                title="2. Crea tu VICO"
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <StepItem
                icon="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/B0Z0-smile.png"
                title="3. Verifica tu VICO"
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <StepItem
                icon="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/ljXG-heart.png"
                title="4. Recibe a tu primer invitado"
              />
            </Grid>
          </Grid>
        </div>
        <VICOButton
          component={RouterLink}
          to="/create/type"
          variant="contained"
          color="primary"
          text="¡Comencemos!"
          style={{ width: buttonWidth, marginTop: isMediumScreen ? 20 : 40 }}
        />
      </div>
    </div>
  );
};

export default VicoHowToView;
