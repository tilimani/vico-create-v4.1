import React, { useState, useContext } from "react";
import { Link as RouterLink, Route, withRouter } from "react-router-dom";
import { makeStyles, Grid } from "@material-ui/core";

import Joyride from "react-joyride";

import LeftMenu from "./LeftMenu";
import Cover from "./Cover";
import TutorialStep from "./TutorialStep";

import VICOButton from "../../../atoms/VICOButton";

import SuccessfulCreatedVICO from "./JoyrideCustomContents/SuccessfulCreatedVICO";
import CreateVICORules from "./JoyrideCustomContents/CreateVICORules";
import SuccessfulCreatedVICORules from "./JoyrideCustomContents/SuccessfulCreatedVICORules";
import CreateVICOCommonAreas from "./JoyrideCustomContents/CreateVICOCommonAreas";
import CommonAreasGallery from "./JoyrideCustomContents/CommonAreasGallery";
import CommonAreasInfo from "./JoyrideCustomContents/CommonAreasInfo";
import EditRoom from "./JoyrideCustomContents/EditRoom";
import SuccessfulCreatedCommonAreas from "./JoyrideCustomContents/SuccessfulCreatedCommonAreas";
import { CreateContext } from "../../../../common/context";

import Rules from "./Rules";
import Services from "./Services";
import CommonAreas from "./CommonAreas";
import Room from "./Room";
import VerificationDateDialog from "./VerificationDateDialog";
import ScheduledDialog from "./ScheduledDialog";

const useStyles = makeStyles((theme) => ({
  leftMenu: { position: "relative" },
  dashboardContent: {
    backgroundColor: "#ffffff",
    position: "relative"
  },
  dashboardWrapper: {
    minHeight: "100vh"
  },
  tutoStepsWrapper: {
    padding: "70px 100px",
    display: "flex",
    flexWrap: "wrap"
  },
  roomsWrapper: {
    padding: "30px 100px",
    display: "flex",
    flexWrap: "wrap"
  },
  tutorialStepGridItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  rulesButton: {
    cursor: "pointer",
    marginRight: 40,
    marginTop: 40
  },
  sectionTitle: {
    fontSize: 22,
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    padding: "70px 100px 20px"
  }
}));

const CreateDashboard = (props) => {
  const classes = useStyles();

  /** Context */
  const { house, createStep, changeState } = useContext(CreateContext);
  const hasRooms = house.type !== "studio" ? true : false;
  const [openDatepicker, setOpenDatepicker] = useState(false);
  const [openScheduled, setOpenScheduled] = useState(false);
  const [tutorialOne, setTutorialOne] = useState({});
  const [tutorialTwo, setTutorialTwo] = useState({});
  const [tutorialThree, setTutorialThree] = useState({});
  const [tutorialFour, setTutorialFour] = useState({});

  const nextStep = () => {
    if (hasRooms) {
      changeState("createStep", 4);
    } else {
      changeState("createStep", 6);
      setOpenDatepicker(true);
      // props.history.push(`/create/dashboard/${house.id}`);
    }
  };

  const handleDatepickerClose = () => {
    setOpenDatepicker(false);
  };

  const handleScheduledClose = () => {
    setOpenScheduled(false);
  };

  const handleScheduleVisit = (date) => {
    setOpenDatepicker(false);
    setOpenScheduled(true);
  };

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
        content: <CommonAreasInfo />,
        disableBeacon: true,
        placement: "left-start",
        styles: {
          buttonNext: {
            display: "none"
          }
        }
      }
    ],
    three: [
      {
        target: "#common_areas_button",
        content: (
          <>
            <SuccessfulCreatedCommonAreas />
            <VICOButton
              variant="contained"
              color="primary"
              onClick={nextStep}
              text="Continuar"
              style={{ marginBottom: 0, marginTop: 10, height: 50 }}
            />
          </>
        ),
        disableBeacon: true,
        placement: "bottom",
        styles: {
          buttonNext: {
            display: "none"
          }
        }
      }
    ],
    four: [
      {
        target: "#room_button",
        content: <EditRoom />,
        placement: "bottom",
        disableBeacon: true,
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
          <div className={classes.tutoStepsWrapper}>
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
            <div className={classes.rulesButton}>
              <TutorialStep
                done={false}
                image="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/sF9B-interests.png"
                text="Puntos de interés"
              />
            </div>
            <div className={classes.rulesButton}>
              <TutorialStep
                done={false}
                image="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/UdO0-description.png"
                text="Descripción de tu VICO"
              />
            </div>
          </div>
          <div>
            <span className={classes.sectionTitle}>Habitationes</span>
          </div>
          <div className={classes.roomsWrapper}>
            {house.rooms.map((item, index) => (
              <div
                key={index}
                item
                xs={6}
                sm={3}
                className={classes.tutorialStepGridItem}
              >
                <div
                  id="room_button"
                  className={classes.rulesButton}
                  onClick={() => {
                    // tutorialOne.close();
                    // props.history.push("/create/dashboard/1/rules");
                  }}
                >
                  <Room key={index} roomNumber={index + 1} />
                </div>
              </div>
            ))}
          </div>
        </Grid>
      </Grid>

      {/* Map for each room */}
      {/* {hasRooms && (
        <Button
          component={RouterLink}
          to="/create/dashboard/1/room/1"
          variant="contained"
          color="secondary"
          id="room_button"
          onClick={() => {
            tutorialFour.close();
          }}
        >
          Room 1
        </Button>
      )} */}

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
      <Joyride
        key={"third-tutorial"}
        steps={tutorialSteps.three}
        run={createStep === 3}
        getHelpers={(helpers) => {
          setTutorialThree(helpers);
        }}
        {...joyrideSettings}
      />

      <Joyride
        key={"four-tutorial"}
        steps={tutorialSteps.four}
        run={createStep === 4}
        getHelpers={(helpers) => {
          setTutorialFour(helpers);
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

      {/** Datepicker dialog */}
      <VerificationDateDialog
        openDatepicker={openDatepicker}
        handleDatepickerClose={handleDatepickerClose}
        handleScheduleVisit={handleScheduleVisit}
      />
      {/* Visit Scheduled Dialog */}
      <ScheduledDialog
        openScheduled={openScheduled}
        handleScheduledClose={handleScheduledClose}
      />
    </>
  );
};

export default withRouter(CreateDashboard);
