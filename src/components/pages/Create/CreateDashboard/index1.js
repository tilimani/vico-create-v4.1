import React, { useContext, useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  makeStyles
} from "@material-ui/core";
import { Link as RouterLink, Route, withRouter } from "react-router-dom";
import Rules from "./Rules";
import Services from "./Services";
import CommonAreas from "./CommonAreas";
import RoomEdit from "./RoomEdit";
import { CreateContext } from "../../../../common/context";
import Joyride from "react-joyride";
import VICOButton from "../../../atoms/VICOButton";

const useStyles = makeStyles((theme) => ({
  dialogInnerContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 362
  },
  dialogImg: {
    width: 100,
    marginTop: 20
  },
  dialogTitle: {
    fontSize: 20,
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    marginTop: 20,
    width: "60%",
    textAlign: "center"
  },
  dialogDescription: {
    fontSize: 16,
    color: theme.palette.secondary.main,
    marginTop: 20,
    width: "80%",
    textAlign: "center"
  }
}));

const joyrideSettings = {
  continuous: true,
  locale: { next: "Continue", last: "Continue" },
  disableOverlayClose: true,
  spotlightClicks: true,
  styles: {
    buttonClose: {
      display: "none"
    },
    buttonBack: {
      display: "none"
    }
  }
};

const TutorialButton = ({ variant, color, onClick, children }) => {
  return (
    <Button variant={variant} color={color} onClick={onClick}>
      {children}
    </Button>
  );
};

const CreateDashboard = (props) => {
  const { house, createStep, changeState } = useContext(CreateContext);
  const hasRooms = house.type !== "studio" ? true : false;
  const [openDatepicker, setOpenDatepicker] = useState(false);
  const [openScheduled, setOpenScheduled] = useState(false);
  const [tutorialOne, setTutorialOne] = useState({});
  const [tutorialTwo, setTutorialTwo] = useState({});
  const [tutorialThree, setTutorialThree] = useState({});
  const [tutorialFour, setTutorialFour] = useState({});

  const [
    creationSuccessDialogIsOpen,
    setCreationSuccessDialogIsOpen
  ] = useState(true);

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

  const handleScheduleVisit = () => {
    setOpenDatepicker(false);
    setOpenScheduled(true);
  };

  const [tutorialSteps] = useState({
    one: [
      {
        content: <h2>Felicitaciones tu vico ha sido creada</h2>,
        placement: "center",
        target: "body"
      },
      {
        target: "#rules_button",
        content: "Normas de la vico define tus condiciones",
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
        content: "Gracias por crear tus condiciones!",
        disableBeacon: true,
        placement: "bottom"
      },
      {
        target: "#common_areas_button",
        content: "Zonas sociales",
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
        content: "Fotos de las Zonas sociales",
        disableBeacon: true,
        placement: "left"
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
    ],
    three: [
      {
        target: "#common_areas_button",
        content: (
          <>
            Perfecto las zonas sociales fueron actualizadas
            <VICOButton
              variant="contained"
              color="primary"
              onClick={nextStep}
              text="Continuar"
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
        content: "Edita la habitacion 1",
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

  const classes = useStyles();

  return (
    <div id="dashboard">
      Create Dashboard
      <Button
        component={RouterLink}
        to="/create/dashboard/1/rules"
        variant="contained"
        color="secondary"
        id="rules_button"
        onClick={() => {
          tutorialOne.close();
        }}
      >
        Rules
      </Button>
      <Button
        component={RouterLink}
        to="/create/dashboard/1/commonareas"
        variant="contained"
        color="secondary"
        id="common_areas_button"
        onClick={() => {
          setTimeout(() => {
            tutorialTwo.next();
          }, 300);
        }}
      >
        Common areas
      </Button>
      {/* Map for each room */}
      {hasRooms && (
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
      )}
      <Route path="/create/dashboard/:houseId/rules">
        <Rules />
      </Route>
      <Route path="/create/dashboard/:houseId/services" component={Services} />
      <Route path="/create/dashboard/:houseId/commonareas">
        <CommonAreas tutorial={tutorialTwo} />
      </Route>
      <Route
        path="/create/dashboard/:houseId/room/:roomId"
        component={RoomEdit}
      />
      {/* Datepicker Dialog */}
      <Dialog
        maxWidth="sm"
        open={openDatepicker}
        onClose={handleDatepickerClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">
          Fecha de verificacion
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            En que fecha podrias verificar tu VICO con nuestro equipo?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <VICOButton
            onClick={handleScheduleVisit}
            variant="contained"
            color="primary"
            text="Agendar mi cita"
          />
          <Button onClick={handleDatepickerClose} color="primary">
            Omitir
          </Button>
        </DialogActions>
      </Dialog>
      {/* Visit Scheduled Dialog */}
      <Dialog
        maxWidth="sm"
        open={openScheduled}
        onClose={handleScheduledClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title"></DialogTitle>
        <DialogContent>
          <DialogContentText>
            Agendaste la cita de verificacion!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <VICOButton
            variant="contained"
            onClick={handleScheduledClose}
            color="primary"
            text="Terminar"
          />
        </DialogActions>
      </Dialog>
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
      {/** Modal displayed once this dashboard is opened showing that the vico is successfully */}
      <Dialog
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
      </Dialog>
    </div>
  );
};

export default withRouter(CreateDashboard);
