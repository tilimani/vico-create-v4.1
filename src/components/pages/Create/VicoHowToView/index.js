import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import VICOButton from "../../../atoms/VICOButton";

import StepItem from "./StepItem";
import VICODialog from "../../../atoms/VICODialog";
import ContactNumberDialogContent from "./ContactNumberDialogContent";
import VerifNumberDialogFrom from "./VerifNumberDialogForm";
import CredentialsDialogForm from "./CredentialsDialogForm";

const personalInfoSteps = [
  "contact_number",
  "verification_code",
  "credentials"
];

const useStyles = makeStyles((theme) => ({
  howToViewViewWrapper: {
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
  howToViewViewContent: {
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
  howToViewViewTitle: {
    fontSize: 30,
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: 26
    }
  },
  howToViewViewSubtitle: {
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

  const [openedPersonalInfoDialog, setOpenedPersonalInfoDialog] = useState(
    false
  );

  const [personalInfoType, setPersonalInfoType] = useState("");
  const getForm = (step) => {
    const nextStep = personalInfoSteps[personalInfoSteps.indexOf(step) + 1];
    return (
      <div>
        {step === "contact_number" && (
          <ContactNumberDialogContent
            setOpenedPersonalInfoDialog={setOpenedPersonalInfoDialog}
            action={() => setPersonalInfoType(nextStep)}
          />
        )}
        {step === "verification_code" && (
          <VerifNumberDialogFrom
            setOpenedPersonalInfoDialog={setOpenedPersonalInfoDialog}
            action={() => setPersonalInfoType(nextStep)}
          />
        )}
        {step === "credentials" && (
          <CredentialsDialogForm
            setOpenedPersonalInfoDialog={setOpenedPersonalInfoDialog}
            action={() => setPersonalInfoType(nextStep)}
          />
        )}
      </div>
    );
  };
  return (
    <div className={classes.howToViewViewWrapper}>
      <div className={classes.howToViewViewContent}>
        {isMediumScreen && (
          <RouterLink to="/create/vicoinfo">
            <img
              src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/NHCp-Arrow.png"
              alt="arrow-back"
            />
            <span className={classes.backText}>Atrás</span>
          </RouterLink>
        )}
        <div className={classes.innerContent}>
          <span className={classes.howToViewViewTitle}>
            CREA TU VICO EN 4 SIMPLES PASOS
            {/* <img src={four} alt="four" className="imgFour" /> */}
          </span>
          <p className={classes.howToViewViewSubtitle}>
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
          // component={RouterLink}
          // to="/create/type"
          onClick={() => {
            setOpenedPersonalInfoDialog(true);
            setPersonalInfoType("contact_number");
          }}
          variant="contained"
          color="primary"
          text="¡Comencemos!"
          style={{ width: buttonWidth, marginTop: isMediumScreen ? 20 : 40 }}
        />
      </div>
      {personalInfoType === "contact_number" && (
        <VICODialog
          dialogOpened={openedPersonalInfoDialog}
          setDialogOpened={setOpenedPersonalInfoDialog}
          title="INGRESO"
          subtitle="Ingresa tus datos de contacto."
          form={getForm("contact_number")}
        />
      )}
      {personalInfoType === "verification_code" && (
        <VICODialog
          dialogOpened={openedPersonalInfoDialog}
          setDialogOpened={setOpenedPersonalInfoDialog}
          title="Te mandamos un código al +573008189816"
          subtitle="Introduce el código para verificar tu identidad."
          form={getForm("verification_code")}
        />
      )}
      {personalInfoType === "credentials" && (
        <VICODialog
          dialogOpened={openedPersonalInfoDialog}
          setDialogOpened={setOpenedPersonalInfoDialog}
          title="Dinos tu nombre"
          form={getForm("credentials")}
          hideLogo
        />
      )}
    </div>
  );
};

export default VicoHowToView;
