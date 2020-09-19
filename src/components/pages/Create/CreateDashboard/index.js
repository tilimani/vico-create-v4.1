import React, { useState, useContext } from "react";
import { Link as RouterLink, Route, withRouter } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
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
import SuccessfulRoomEdit from "./JoyrideCustomContents/SuccessfulRoomEdit";
import { CreateContext } from "../../../../common/context";

import Rules from "./Rules";
import Services from "./Services";
import CommonAreas from "./CommonAreas";
import Room from "./Room";
import VerificationDateDialog from "./VerificationDateDialog";
import ScheduledDialog from "./ScheduledDialog";
import RoomEdit from "./RoomEdit";
import VICOMobileLinearProgress from "../../../atoms/VICOMobileLinearProgress";

import "./index.css";
import Description from "./Description";
import Interests from "./Interests";

const useStyles = makeStyles((theme) => ({
  leftMenu: {
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  dashboardContent: {
    backgroundColor: "#ffffff",
    position: "relative"
  },
  dashboardWrapper: {
    minHeight: "100vh",
    [theme.breakpoints.down("sm")]: {
      marginTop: 22
    }
  },
  tutoStepsWrapper: {
    padding: "70px 100px",
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 0px 70px 0px",
      justifyContent: "center"
    }
  },
  roomsWrapper: {
    padding: "30px 100px",
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      justifyContent: "center"
    }
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
    marginTop: 40,
    [theme.breakpoints.down("sm")]: {
      marginRight: 8,
      marginLeft: 8
    }
  },
  sectionTitle: {
    fontSize: 22,
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    padding: "70px 100px 20px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 0px 0px 20px"
    }
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
  const [tutorialFive, setTutorialFive] = useState({});

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
    disableOverlayClose: false,
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
  const isMediumScreen = useMediaQuery("(max-width:960px)");

  const [tutorialSteps, setTutorialSteps] = useState({
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
        content: <CommonAreasGallery />,
        placement: "left",
        target: "#common_areas_gallery",
        locale: { next: "Omitir", last: "Continue" },
        disableBeacon: true,
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
        placement: "left",
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
    ],
    five: [
      {
        target: "#room_button",
        content: (
          <>
            <SuccessfulRoomEdit />
            <VICOButton
              variant="contained"
              color="primary"
              onClick={() => {
                changeState("createStep", 6);
                setOpenDatepicker(true);
              }}
              text="Continuar"
              style={{ marginBottom: 0, marginTop: 10, height: 50 }}
            />
          </>
        ),
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

  React.useEffect(() => {
    // const placementCommonAreasGallery =
    //   window.innerWidth < 960 ? "center" : "left";
    // const targetCommonAreasGallery =
    //   window.innerWidth < 960 ? "body" : "#common_areas_gallery";

    const placementEditedRoomSuccess =
      window.innerWidth < 960 ? "center" : "bottom";
    const targetEditedRoomSuccess =
      window.innerWidth < 960 ? "body" : "#room_button";
    setTutorialSteps({
      ...tutorialSteps,
      // two: [
      //   {
      //     ...tutorialSteps.two[0]
      //   },
      //   {
      //     ...tutorialSteps.two[1]
      //   },
      //   {
      //     content: tutorialSteps.two[2].content,
      //     placement: placementCommonAreasGallery,
      //     target: targetCommonAreasGallery,
      //     locale: tutorialSteps.two[2].locale,
      //     styles: tutorialSteps.two[2].styles
      //   },
      //   {
      //     ...tutorialSteps.two[3]
      //   }
      // ],
      five: [
        {
          ...tutorialSteps.five[0],
          placement: placementEditedRoomSuccess,
          target: targetEditedRoomSuccess
        }
      ]
    });
  }, []);

  return (
    <>
      {isMediumScreen && (
        <div className="mobile-progress-wrapper">
          <VICOMobileLinearProgress step={7} />
        </div>
      )}
      <Grid container spacing={0} className={classes.dashboardWrapper}>
        <Grid item xs={0} md={3} className={classes.leftMenu}>
          <LeftMenu />
        </Grid>
        <Grid item xs={12} md={9} className={classes.dashboardContent}>
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
                done={createStep >= 2}
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
                done={createStep >= 3}
                image="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/oAv_-socialZones.png"
                text="Zonas sociales"
              />
            </div>
            <div
              className={classes.rulesButton}
              onClick={() => {
                props.history.push("/create/dashboard/1/interests");
              }}
            >
              <TutorialStep
                done={false}
                image="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/sF9B-interests.png"
                text="Puntos de interés"
              />
            </div>
            <div
              className={classes.rulesButton}
              onClick={() => {
                props.history.push("/create/dashboard/1/description");
              }}
            >
              <TutorialStep
                done={false}
                image="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/UdO0-description.png"
                text="Descripción de tu VICO"
              />
            </div>
          </div>

          {house.type && house.type !== "studio" && (
            <>
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
                        setTimeout(() => {
                          tutorialFour.close();
                        }, 300);

                        props.history.push("/create/dashboard/1/roomedit", {
                          roomNumber: index + 1
                        });
                      }}
                    >
                      <Room key={index} roomNumber={index + 1} />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
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

      <Joyride
        key={"five-tutorial"}
        steps={tutorialSteps.five}
        run={createStep === 5}
        getHelpers={(helpers) => {
          setTutorialFive(helpers);
        }}
        {...joyrideSettings}
      />

      {/** Routes */}

      <Route path="/create/dashboard/:houseId/rules" component={Rules} />
      <Route path="/create/dashboard/:houseId/services" component={Services} />
      <Route path="/create/dashboard/:houseId/commonareas">
        <CommonAreas tutorial={tutorialTwo} history={props.history} />
      </Route>

      <Route path="/create/dashboard/:houseId/roomEdit">
        <RoomEdit history={props.history} />
      </Route>

      <Route
        path="/create/dashboard/:houseId/description"
        component={Description}
      />

      <Route
        path="/create/dashboard/:houseId/interests"
        component={Interests}
      />
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
