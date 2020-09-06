import React, { useState, useContext } from "react";
import { Link as RouterLink, Route, withRouter } from "react-router-dom";
import { makeStyles, Grid, Dialog, DialogContent } from "@material-ui/core";
import Joyride from "react-joyride";

import LeftMenu from "./LeftMenu";
import Cover from "./Cover";
import TutorialStep from "./TutorialStep";

import SuccessfulCreatedVICO from "./JoyrideCustomContents/SuccessfulCreatedVICO";
import CreateVICORules from "./JoyrideCustomContents/CreateVICORules";
import SuccessfulCreatedVICORules from "./JoyrideCustomContents/SuccessfulCreatedVICORules";
import CreateVICOCommonAreas from "./JoyrideCustomContents/CreateVICOCommonAreas";
import CommonAreasGallery from "./JoyrideCustomContents/CommonAreasGallery";

import { CreateContext } from "../../../../common/context";

import Rules from "./Rules";
import Services from "./Services";
import CommonAreas from "./CommonAreas";

const useStyles = makeStyles((theme) => ({
  leftMenu: { position: "relative", height: "100%" },
  dashboardContent: {
    backgroundColor: "#ffffff",
    position: "relative",
    height: "100%"
  },
  dashboardWrapper: {
    height: "86vh"
  },
  tutorialSteps: {
    padding: "70px 200px"
  },
  tutorialStepGridItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  rulesButton: {
    cursor: "pointer"
  }
}));

const CreateDashboard = (props) => {
  const classes = useStyles();

  /** Context */
  const { house, createStep, changeState } = useContext(CreateContext);

  const [tutorialOne, setTutorialOne] = useState({});
  const [tutorialTwo, setTutorialTwo] = useState({});

  const joyrideSettings = {
    continuous: true,
    locale: { next: "Continuar", last: "Continue" },
    disableOverlayClose: true,
    spotlightClicks: true,
    styles: {
      options: { width: 360, height: 270 },
      buttonClose: {
        display: "none"
      },
      buttonBack: {
        display: "none"
      }
    }
  };
  const [tutorialSteps] = useState({
    one: [
      {
        content: <SuccessfulCreatedVICO />,
        placement: "center",
        target: "body",
        styles: {
          buttonNext: {
            backgroundColor: "#EF8E01",
            marginRight: 40,
            marginLeft: 40,
            width: 273,
            height: 58,
            borderRadius: 12,
            fontFamily: `"Nunito", sans-serif`,
            fontWeight: "bold",
            marginBottom: 20,
            outline: "none"
          }
        }
      },
      {
        target: "#rules_button",
        content: <CreateVICORules />,
        disableBeacon: true,
        placement: "bottom",

        styles: {
          buttonNext: {
            display: "none"
          }
        }
      }
    ],
    two: [
      {
        target: "#rules_button",
        content: <SuccessfulCreatedVICORules />,
        disableBeacon: true,
        placement: "bottom",
        styles: {
          buttonNext: {
            backgroundColor: "#EF8E01",
            marginRight: 40,
            marginLeft: 40,
            width: 273,
            height: 50,
            borderRadius: 12,
            fontFamily: `"Nunito", sans-serif`,
            fontWeight: "bold",
            marginBottom: 10,
            outline: "none"
          }
        }
      },
      {
        target: "#common_areas_button",
        content: <CreateVICOCommonAreas />,
        disableBeacon: true,
        placement: "bottom",
        styles: {
          buttonNext: {
            display: "none"
          }
        }
      },
      {
        target: "#common_areas_gallery",
        content: <CommonAreasGallery tutorial={tutorialTwo} />,
        disableBeacon: true,
        placement: "left",
        locale: { next: "Omitir", last: "Continue" },
        styles: {
          buttonNext: {
            height: "auto",
            border: "none",
            backgroundColor: "transparent",
            marginRight: 40,
            marginLeft: 40,
            width: 273,
            borderRadius: 12,
            fontFamily: `"Nunito", sans-serif`,
            fontWeight: "bold",
            marginBottom: 10,
            outline: "none",
            color: "#2A3C44"
          }
        }
      },
      {
        target: "#common_areas_info",
        content: "Informacion sobre las Zonas sociales",
        disableBeacon: true,
        placement: "top",
        styles: {
          buttonNext: {
            display: "none"
          }
        }
      }
    ]
  });

  return (
    <>
      <Grid container spacing={0} className={classes.dashboardWrapper}>
        <Grid item xs={3} className={classes.leftMenu}>
          <LeftMenu />
        </Grid>
        <Grid item xs={9} className={classes.dashboardContent}>
          <Cover vicoType="Apartaestudio" />

          <Grid container spacing={0} className={classes.tutorialSteps}>
            <Grid item xs={6} sm={3} className={classes.tutorialStepGridItem}>
              <div
                id="rules_button"
                className={classes.rulesButton}
                onClick={() => {
                  tutorialOne.close();
                  props.history.push("/create/dashboard/1/rules");
                }}
              >
                <TutorialStep
                  done={false}
                  image="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/8z2E-rules.png"
                  text="Normas de la VICO"
                />
              </div>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.tutorialStepGridItem}>
              <div
                id="common_areas_button"
                className={classes.rulesButton}
                onClick={() => {
                  setTimeout(() => {
                    tutorialTwo.next();
                  }, 300);
                  props.history.push("/create/dashboard/1/commonareas");
                }}
              >
                <TutorialStep
                  done={false}
                  image="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/oAv_-socialZones.png"
                  text="Zonas sociales"
                />
              </div>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.tutorialStepGridItem}>
              <TutorialStep
                done={false}
                image="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/sF9B-interests.png"
                text="Puntos de interés"
              />
            </Grid>
            <Grid item xs={6} sm={3} className={classes.tutorialStepGridItem}>
              <TutorialStep
                done={false}
                image="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/UdO0-description.png"
                text="Descripción de tu VICO"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/** Joyrides */}
      <Joyride
        key={"first-tutorial"}
        steps={tutorialSteps.one}
        run={createStep === 1}
        getHelpers={(helpers) => {
          setTutorialOne(helpers);
        }}
        {...joyrideSettings}
      />
      <Joyride
        key={"second-tutorial"}
        steps={tutorialSteps.two}
        run={createStep === 2}
        getHelpers={(helpers) => {
          setTutorialTwo(helpers);
        }}
        {...joyrideSettings}
      />

      {/** Routes */}
      {/** Rules */}
      <Route path="/create/dashboard/:houseId/rules" component={Rules} />
      <Route path="/create/dashboard/:houseId/services" component={Services} />
      <Route path="/create/dashboard/:houseId/commonareas">
        <CommonAreas tutorial={tutorialTwo} history={props.history} />
      </Route>
      {/** Modal displayed once this dashboard is opened showing that the vico is successfully */}
      {/* <Dialog
        open={creationSuccessDialogIsOpen}
        onClose={() => setCreationSuccessDialogIsOpen(false)}
      >
        <DialogContent>
          <div className={classes.dialogInnerContent}>
            <img
              src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/PUeT-creationSuccess.png"
              alt=""
              className={classes.dialogImg}
            />
            <span className={classes.dialogTitle}>
              ¡Felicitaciones! Tu VICO ha sido creada.
            </span>
            <p className={classes.dialogDescription}>
              Queremos que tu VICO se vea de la mejor manera posible. A
              continuación, vamos a guiarte para que puedas personalizarla.
            </p>
            <VICOButton
              onClick={() => setCreationSuccessDialogIsOpen(false)}
              variant="contained"
              color="primary"
              text="Continuar"
              style={{
                width: 267,
                marginTop: 20,
                marginBottom: 40
              }}
            />
          </div>
        </DialogContent>
      </Dialog> */}
    </>
  );
};

export default withRouter(CreateDashboard);
