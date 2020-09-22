import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import Joyride from "react-joyride";

import { CreateContext } from "../../../../../common/context";

import RightDrawerScaffold from "../RightDrawerScaffold";
import VICOButton from "../../../../atoms/VICOButton";

import "./index.css";

import VICOTag from "../../../../atoms/VICOTag";
import VICOSquareBtn from "../../../../atoms/VICOSquareBtn";
import VICORadioButton from "../../../../atoms/VICORadioButton";

import Gallery from "./Gallery";

import CommonAreasGallery from "../JoyrideCustomContents/CommonAreasGallery";
import CommonAreasInfo from "../JoyrideCustomContents/CommonAreasInfo";

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
  tagsResponseWrapper: {
    display: "flex",
    flexWrap: "wrap"
  },
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
  cameraTypeResponse: {
    display: "flex",
    justifyContent: "space-between"
  },
  bathTypeResponse: {
    display: "flex",
    justifyContent: "space-around"
  },
  continueBtnWrapper: {
    textAlign: "center"
  }
}));

const CommonAreas = ({ tutorial, history }) => {
  const classes = useStyles();

  const [images, setImages] = useState([]);

  const [information, setInformation] = useState({
    tags: [],
    cameraType: null,
    bathType: null,
    windowLook: null,
    facilities: []
  });

  const { changeState, house } = useContext(CreateContext);

  const [runGalleryTutorial, setRunGalleryTutorial] = useState(true);
  const [runInofTutorial, setRunInfoTutorial] = useState(false);

  /** These states workingOnGallery and workingOnInfo are use to trigger the
   * apprearance of the overlay in each step  */
  const [workingOnGallery, setWorkingOnGallery] = useState(false);
  const [workingOnInfo, setWorkingOnInfo] = useState(false);

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

  const [tutorialSteps, setTutorialSteps] = useState({
    gallery: [
      {
        content: (
          <>
            <CommonAreasGallery />
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
        placement: "center",
        target: "body",
        disableBeacon: true,
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
            <CommonAreasInfo />
            <VICOButton
              variant="contained"
              color="primary"
              onClick={() => {
                setRunInfoTutorial(false);

                setWorkingOnInfo(true);
                document.getElementById("common_areas_info").scrollIntoView({
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

  const handleClick = () => {
    changeState("createStep", 3);
  };

  return (
    <RightDrawerScaffold
      close={() => {
        history.push("/create/dashboard/1");
      }}
      save={() => {
        // history.push("/create/dashboard/1");
      }}
    >
      <div className={classes.innerContent}>
        <div className={classes.drawerContent}>
          <Gallery
            images={images}
            setImages={setImages}
            goNext={() => {
              setRunGalleryTutorial(false);
              setRunInfoTutorial(true);
              setWorkingOnGallery(false);
            }}
            isOverlayed={workingOnInfo}
          />
          <div id="common_areas_info" className={classes.additionalContent}>
            {workingOnGallery && <div className={classes.overlay}></div>}
            <div className={classes.question} style={{ paddingTop: 20 }}>
              <span className={classes.questionTitle}>
                ¿Cómo definirías tu VICO?
              </span>
              <p className={classes.questionDescription}>
                Selecciona los tags con los que identificas a tu VICO.
              </p>
              <div className={classes.tagsResponseWrapper}>
                {[
                  { id: 1, name: "Pet friendly", deviceId: 1, icon: "" },
                  { id: 2, name: "Weed friendly", deviceId: 2, icon: "" },
                  { id: 3, name: "Independiente", deviceId: 3, icon: "" },
                  {
                    id: 4,
                    name: "Invitados profesionales",
                    deviceId: 4,
                    icon: ""
                  },
                  { id: 5, name: "Digital nomads", deviceId: 5, icon: "" },
                  { id: 6, name: "Estudiantes", deviceId: 6, icon: "" }
                ].map((item) => (
                  <VICOTag
                    key={item.id}
                    label={item.name}
                    selected={information.tags.indexOf(item.id) >= 0}
                    action={() => {
                      const tagIsSelected =
                        information.tags.length &&
                        information.tags.indexOf(item.id) >= 0;

                      if (!tagIsSelected) {
                        const arr = [...information.tags, item.id];
                        setInformation({
                          ...information,
                          tags: arr
                        });
                      } else {
                        setInformation({
                          ...information,
                          tags: information.tags.filter((i) => i !== item.id)
                        });
                      }
                    }}
                  />
                ))}
              </div>
            </div>
            {house.type === "studio" && (
              <>
                {/** Option = studio  */}
                <div className={classes.question}>
                  <span className={classes.questionTitle}>Tipo de cama</span>
                  <div className={classes.cameraTypeResponse}>
                    {[
                      {
                        icon:
                          "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/qKoY-sencilla.png",
                        text: "Sencilla"
                      },
                      {
                        icon:
                          "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/YxsV-semidouble.png",
                        text: "Semi-doble"
                      },
                      {
                        icon:
                          "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/YxsV-doble.png",
                        text: "Doble"
                      }
                    ].map((item, index) => (
                      <div className={classes.response}>
                        <VICORadioButton
                          icon={item.icon}
                          value={item.text}
                          checked={information.cameraType === item.text}
                          onChange={(event) => {
                            setInformation({
                              ...information,
                              cameraType: event.target.value
                            });
                          }}
                        />
                        <span className={classes.squareBtnDesc}>
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                {/** Option = studio  */}
                <div className={classes.question}>
                  <span className={classes.questionTitle}>
                    Tipo de baño al que tiene acceso
                  </span>
                  <div className={classes.bathTypeResponse}>
                    {[
                      {
                        icon:
                          "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/rsnv-privatebath.png",
                        text: "Baño privado"
                      },
                      {
                        icon:
                          "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/KN8H-sharedbath.png",
                        text: "Baño compartido"
                      }
                    ].map((item, index) => (
                      <div className={classes.response}>
                        <VICORadioButton
                          icon={item.icon}
                          value={item.text}
                          checked={information.bathType === item.text}
                          onChange={(event) => {
                            setInformation({
                              ...information,
                              bathType: event.target.value
                            });
                          }}
                        />
                        <span className={classes.squareBtnDesc}>
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                {/** Option = studio  */}
                <div className={classes.question}>
                  <span className={classes.questionTitle}>
                    ¿Hacia dónde mira la ventana?
                  </span>
                  <div className={classes.squareBtnsWrapper}>
                    {[
                      {
                        icon:
                          "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/irNV-nowindow.png",
                        text: "Sin ventana"
                      },
                      {
                        icon:
                          "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/87wV-inside.png",
                        text: "Hacia dentro"
                      },
                      {
                        icon:
                          "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/S97j-tothepatio.png",
                        text: "Hacia el patio"
                      },
                      {
                        icon:
                          "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/Vkzl-outside.png",
                        text: "Hacia afuera"
                      }
                    ].map((item, index) => (
                      <div key={index} className={classes.response}>
                        <VICORadioButton
                          icon={item.icon}
                          value={item.text}
                          checked={information.windowLook === item.text}
                          onChange={(event) => {
                            setInformation({
                              ...information,
                              windowLook: event.target.value
                            });
                          }}
                        />
                        <span className={classes.squareBtnDesc}>
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
            <div className={classes.question}>
              <span className={classes.questionTitle}>
                ¿Cuáles servicios o facilidades están incluidos en el alquiler
                mensual?
              </span>
              <div className={classes.squareBtnsWrapper}>
                {[
                  {
                    id: 1,
                    icon:
                      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/XuGT-comedor.png",
                    text: "Comedor"
                  },
                  {
                    id: 2,
                    icon:
                      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/cpWT-horno.png",
                    text: "Horno"
                  },
                  {
                    id: 3,
                    icon:
                      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/I17g-tv.png",
                    text: "Tv"
                  },
                  {
                    id: 4,
                    icon:
                      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/ocNZ-cafeteria.png",
                    text: "Cafetera"
                  },
                  {
                    id: 5,
                    icon:
                      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/q53_-licuadora.png",
                    text: "Licuadora"
                  },
                  {
                    id: 6,
                    icon:
                      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/_qRs-lavadora.png",
                    text: "Lavadora"
                  },
                  {
                    id: 7,
                    icon:
                      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/62Xo-secadora.png",
                    text: "Secadora"
                  },
                  {
                    id: 8,
                    icon:
                      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/421t-duchas.png",
                    text: "Duchas"
                  },
                  {
                    id: 9,
                    icon:
                      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/Vkzl-outside.png",
                    text: "Balcón"
                  },
                  {
                    id: 10,
                    icon:
                      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/5qeE-porteria.png",
                    text: "Portería"
                  },
                  {
                    id: 11,
                    icon:
                      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/c7Xb-cocina.png",
                    text: "Cocina"
                  },
                  {
                    id: 12,
                    icon:
                      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/ANf9-gym.png",
                    text: "Gym"
                  },

                  {
                    id: 13,
                    icon:
                      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/DIJo-piscina.png",
                    text: "Piscina"
                  },
                  {
                    id: 14,
                    icon:
                      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/bHdu-sauna.png",
                    text: "Sauna"
                  },
                  {
                    id: 15,
                    icon:
                      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/cjpG-ascensor.png",
                    text: "Ascensor"
                  },

                  {
                    id: 16,
                    icon:
                      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/ziIC-garaje.png",
                    text: "Garaje"
                  },
                  {
                    id: 17,
                    icon:
                      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/HNj8-escritorio.png",
                    text: "Nevera"
                  },
                  {
                    id: 18,
                    icon:
                      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/x1dW-nevara.png",
                    text: "Aire"
                  },
                  {
                    id: 19,
                    icon:
                      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/x1dW-nevara.png",
                    text: "Closet"
                  },
                  {
                    id: 20,
                    icon:
                      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/HNj8-escritorio.png",
                    text: "Escritorio"
                  },
                  {
                    id: 21,
                    icon:
                      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/HNj8-escritorio.png",
                    text: "Bbq"
                  },
                  {
                    id: 22,
                    icon:
                      "https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/D3xd-espaciodetrabajo.png",
                    text: (
                      <span>
                        Espacio <br /> de trabajo
                      </span>
                    )
                  }
                ].map((item) => (
                  <div key={item.id} className={classes.response}>
                    <VICOSquareBtn
                      icon={item.icon}
                      selected={information.facilities.indexOf(item.id) >= 0}
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
                    <span className={classes.squareBtnDesc}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={classes.continueBtnWrapper}>
              <VICOButton
                component={RouterLink}
                to="/create/dashboard/1"
                onClick={handleClick}
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
        </div>
        <Joyride
          key={"gallery-tutorial"}
          steps={tutorialSteps.gallery}
          run={runGalleryTutorial}
          {...joyrideSettings}
        />
        <Joyride
          key={"info-tutorial"}
          steps={tutorialSteps.info}
          run={runInofTutorial}
          {...joyrideSettings}
        />
      </div>
    </RightDrawerScaffold>
  );
};

export default CommonAreas;
