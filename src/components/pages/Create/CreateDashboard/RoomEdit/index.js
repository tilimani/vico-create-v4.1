import React, { useContext, useState } from "react";
import Joyride from "react-joyride";
import { makeStyles, useMediaQuery } from "@material-ui/core";
import { CreateContext } from "../../../../../common/context";

import RightDrawerScaffold from "../RightDrawerScaffold";
import VICOButton from "../../../../atoms/VICOButton";

import VICOSquareBtn from "../../../../atoms/VICOSquareBtn";

import Availability from "../SharedComponents/Availability";
import VICOTextField from "../../../../atoms/VICOTextField";
import MonthlyRent from "../SharedComponents/MonthlyRent";
import Gallery from "../SharedComponents/Gallery";
import CameraType from "../SharedComponents/CameraType";
import BathType from "../SharedComponents/BathType";
import WindowDirection from "../SharedComponents/WindowDirection";
import WhoOccupiesRoom from "./WhoOccupiesRoom";
import Calendar from "./Calendar";
import { diffDate } from "../../../../../common/helper";
import RoomEditGallery from "../JoyrideCustomContents/RoomEditGallery";
import RoomEditInfo from "../JoyrideCustomContents/RoomEditInfo";

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

const useStyles = makeStyles((theme) => ({
  drawerContent: {
    width: 400,
    flexShrink: 0,
    marginTop: 40,
    margin: "30px 70px",
    [theme.breakpoints.down("xs")]: {
      width: "auto"
    }
  },
  innerContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  additionalContent: {
    marginTop: 40,
    position: "relative"
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(33, 33, 33, 0.83)",
    transition: "background-color 0.5s",
    opacity: ".7",
    zIndex: 1900
  },
  question: {
    marginTop: 40
  },
  questionTitle: {
    fontSize: 16,
    color: theme.palette.secondary.main,
    fontWeight: "bold"
  },
  questionDescription: {
    fontSize: 16,
    color: theme.palette.secondary.main
  },
  responseWrapper: {
    display: "flex",
    flexWrap: "wrap"
  },
  distinguishField: {},
  response: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 40,
    marginTop: 20
  },
  squareBtnDesc: {
    marginTop: 10,
    fontSize: 16,
    color: theme.palette.secondary.main,
    textAlign: "center"
  },
  squareBtnsWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  continueBtnWrapper: {
    textAlign: "center"
  }
}));

const RoomEdit = (props) => {
  const classes = useStyles();
  const { house, changeState } = useContext(CreateContext);
  const [currentComponent, setCurrentComponent] = useState(
    house.type === "shared" ? "availibility" : "galleryAndInfo"
  );

  const [images, setImages] = useState([]);
  const [information, setInformation] = useState({
    tags: [],
    cameraType: null,
    bathType: null,
    windowLook: null,
    facilities: [],
    monthlyRentCost: null,
    couplePrice: null,
    smartPriceActive: true
  });

  const [guest, setGuest] = useState({
    name: "",
    gender: null,
    nationality: ""
  });

  const [specificDate, setSpecificDate] = useState(null);

  const [runGalleryTutorial, setRunGalleryTutorial] = useState(false);
  const [runInofTutorial, setRunInfoTutorial] = useState(false);

  /** These states workingOnGallery and workingOnInfo are use to trigger the
   * apprearance of the overlay in each step  */
  const [workingOnGallery, setWorkingOnGallery] = useState(false);
  const [workingOnInfo, setWorkingOnInfo] = useState(false);

  /** Joyride steps */
  const [tutorialSteps] = useState({
    gallery: [
      {
        target: "body",
        content: (
          <>
            <RoomEditGallery />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <VICOButton
                variant="contained"
                color="primary"
                onClick={() => {
                  setRunGalleryTutorial(false);
                  setWorkingOnGallery(true);
                }}
                text="Continuar"
                style={{ marginBottom: 0, marginTop: 10, height: 50 }}
              />
              <VICOButton
                variant="contained"
                color="default"
                onClick={() => {
                  setRunGalleryTutorial(false);
                  setRunInfoTutorial(true);
                }}
                text="Omitir"
                style={{
                  marginBottom: 0,
                  marginTop: 10,
                  height: 50,
                  boxShadow: "none",
                  backgroundColor: "transparent"
                }}
              />
            </div>
          </>
        ),
        disableBeacon: true,
        placement: "center",

        styles: {
          buttonNext: {
            display: "none"
          }
        }
      }
    ],
    info: [
      {
        target: "body",
        content: (
          <>
            <RoomEditInfo />
            <VICOButton
              variant="contained"
              color="primary"
              onClick={() => {
                setRunInfoTutorial(false);
                setWorkingOnInfo(true);
                document.getElementById("room_edit_info").scrollIntoView({
                  behavior: "smooth"
                });
              }}
              text="Continuar"
              style={{ marginBottom: 0, marginTop: 10, height: 50 }}
            />
          </>
        ),
        disableBeacon: true,
        placement: "center",
        styles: {
          buttonNext: {
            display: "none"
          }
        }
      }
    ]
  });

  const handleInfoClick = () => {
    props.history.push("/create/dashboard/1");
    changeState("createStep", 5);
  };

  return (
    <RightDrawerScaffold
      close={() => {
        props.history.push("/create/dashboard/1");
      }}
      save={() => {
        // props.history.push("/create/dashboard/1");
      }}
    >
      <div className={classes.innerContent}>
        <div className={classes.drawerContent}>
          {currentComponent === "availibility" && (
            <Availability
              handleClick={(selectedItem) => {
                if (
                  selectedItem === "proximo_año" ||
                  selectedItem === "nunca"
                ) {
                  setCurrentComponent("whoOccupiesRoom");
                } else if (selectedItem === "fecha_especifica") {
                  setCurrentComponent("calendar");
                } else {
                  changeState("createStep", 8);
                  setCurrentComponent("galleryAndInfo");
                  setRunGalleryTutorial(true);
                }
              }}
            />
          )}
          {currentComponent === "galleryAndInfo" && (
            <>
              <Gallery
                title={`Galeria habitación ${
                  props.history.location.state &&
                  props.history.location.state.roomNumber
                }`}
                subtitle="Sube mínimo 3 fotos de la habitación."
                images={images}
                setImages={setImages}
                goNext={() => {
                  setRunGalleryTutorial(false);
                  setRunInfoTutorial(true);
                  setWorkingOnGallery(false);
                }}
                isOverlayed={workingOnInfo}
              />

              <div id="room_edit_info" className={classes.additionalContent}>
                {workingOnGallery && <div className={classes.overlay}></div>}
                {house.type === "shared" && (
                  <div className={classes.question}>
                    <span className={classes.questionTitle}>
                      ¿Cómo reconoces esta habitación?
                    </span>
                    <p className={classes.questionDescription}>
                      Te ayuda a distinguir de que habitación hablas. Solamente
                      tú puedes ver este título. Ejemplo: “La que está detrás de
                      la cocina”.
                    </p>
                    <div className={classes.distinguishField}>
                      <VICOTextField placeholder="Al lado del baño" />
                    </div>
                  </div>
                )}

                {(house.type === "shared" || house.type === "private") && (
                  <>
                    <CameraType
                      cameraType={information.cameraType}
                      onChange={(event) => {
                        setInformation({
                          ...information,
                          cameraType: event.target.value
                        });
                      }}
                    />

                    <BathType
                      bathType={information.bathType}
                      onChange={(event) => {
                        setInformation({
                          ...information,
                          bathType: event.target.value
                        });
                      }}
                    />

                    <WindowDirection
                      windowLook={information.windowLook}
                      onChange={(event) => {
                        setInformation({
                          ...information,
                          windowLook: event.target.value
                        });
                      }}
                    />
                  </>
                )}
                <div className={classes.question}>
                  <span className={classes.questionTitle}>
                    ¿Con qué componentes cuenta la habitación?
                  </span>
                  <p className={classes.questionDescription}>
                    Selecciona los equipos y muebles con los que cuenta la
                    habitación.
                  </p>
                  <div className={classes.squareBtnsWrapper}>
                    {[
                      {
                        id: 1,
                        icon:
                          "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/x1dW-nevara.png",
                        title: "Closet"
                      },
                      {
                        id: 2,
                        icon:
                          "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/HNj8-escritorio.png",
                        title: "Escritorio"
                      },
                      {
                        id: 3,
                        icon:
                          "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/I17g-tv.png",
                        title: "Tv"
                      },
                      {
                        id: 4,
                        icon:
                          "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/x1dW-nevara.png",
                        title: "Aire"
                      }
                    ].map((item) => (
                      <div key={item.id} className={classes.response}>
                        <VICOSquareBtn
                          icon={item.icon}
                          text={item.text}
                          selected={
                            information.facilities.indexOf(item.id) >= 0
                          }
                          action={() => {
                            const facilityIsSelected =
                              information.facilities.length &&
                              information.facilities.indexOf(item.id) >= 0;

                            if (!facilityIsSelected) {
                              const arr = [...information.facilities, item.id];
                              setInformation({
                                ...information,
                                facilities: arr
                              });
                            } else {
                              setInformation({
                                ...information,
                                facilities: information.facilities.filter(
                                  (i) => i !== item.id
                                )
                              });
                            }
                          }}
                        />
                        <span className={classes.squareBtnDesc}>
                          {item.title}
                        </span>
                      </div>
                    ))}
                    <div className={classes.response}>
                      <VICOSquareBtn text="Otro" />
                      <span
                        className={classes.squareBtnDesc}
                        style={{ visibility: "hidden" }}
                      >
                        Otro
                      </span>
                    </div>
                    <div
                      className={classes.response}
                      style={{ visibility: "hidden" }}
                    >
                      <VICOSquareBtn />
                    </div>
                  </div>
                </div>
                {house.type === "shared" && (
                  <MonthlyRent
                    monthlyRentCost={information.monthlyRentCost}
                    couplePrice={information.couplePrice}
                    smartPriceActive={information.smartPriceActive}
                    setMonthlyRentCost={(event) => {
                      setInformation({
                        ...information,
                        monthlyRentCost: event.target.value
                      });
                    }}
                    setCouplePrice={(event) => {
                      setInformation({
                        ...information,
                        couplePrice: event.target.value
                      });
                    }}
                    setSmartPriceActive={(event) => {
                      setInformation({
                        ...information,
                        smartPriceActive: event.target.checked
                      });
                    }}
                  />
                )}
                <div className={classes.continueBtnWrapper}>
                  <VICOButton
                    onClick={handleInfoClick}
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
            </>
          )}

          {currentComponent === "whoOccupiesRoom" && (
            <WhoOccupiesRoom
              guest={guest}
              setGuest={setGuest}
              handleContinue={() => {
                changeState("createStep", 8);
                setCurrentComponent("galleryAndInfo");
              }}
              handleSkip={() => setCurrentComponent("availibility")}
            />
          )}

          {currentComponent === "calendar" && (
            <Calendar
              date={specificDate}
              setDate={setSpecificDate}
              handleContinue={() => {
                if (specificDate) {
                  const differanceOfDays = diffDate(
                    new Date(),
                    new Date(specificDate)
                  );
                  if (differanceOfDays <= 0) {
                    // Alert message: please select a future date
                  } else if (differanceOfDays > 30) {
                    setCurrentComponent("galleryAndInfo");
                    changeState("createStep", 8);
                  } else {
                    setCurrentComponent("whoOccupiesRoom");
                  }
                }
              }}
              handleSkip={() => setCurrentComponent("availibility")}
            />
          )}
        </div>
      </div>
      {/** Joyrides */}

      <Joyride
        key={"edit-room-gallery-tutorial"}
        steps={tutorialSteps.gallery}
        run={runGalleryTutorial}
        {...joyrideSettings}
      />
      <Joyride
        key={"edit-room-info-tutorial"}
        steps={tutorialSteps.info}
        run={runInofTutorial}
        {...joyrideSettings}
      />
    </RightDrawerScaffold>
  );
};

export default RoomEdit;
