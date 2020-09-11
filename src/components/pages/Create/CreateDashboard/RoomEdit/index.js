import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { CreateContext } from "../../../../../common/context";

import RightDrawerScaffold from "../RightDrawerScaffold";
import VICOButton from "../../../../atoms/VICOButton";

import "./RoomCommonAreas.css";

import VICOTag from "../../../../atoms/VICOTag";
import VICOSquareBtn from "../../../../atoms/VICOSquareBtn";
import VICORadioButton from "../../../../atoms/VICORadioButton";

import Gallery from "./Gallery";
import Availability from "../SharedComponents/Availability";
import VICOTextField from "../../../../atoms/VICOTextField";
import MonthlyRent from "../SharedComponents/MonthlyRent";

const useStyles = makeStyles((theme) => ({
  drawerContent: {
    width: 450,
    flexShrink: 0,
    marginLeft: 160,
    marginRight: 160,
    marginTop: 40
  },
  additionalContent: {
    marginTop: 40
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

const RoomEdit = ({ tutorial, history }) => {
  const classes = useStyles();
  const { house, changeState } = useContext(CreateContext);
  const [currentComponent, setCurrentComponent] = useState(
    house.type === "shared" ? "availibility" : "galleryAndInfo"
    //"galleryAndInfo"
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

  const handleClick = () => {};
  return (
    <RightDrawerScaffold
      close={() => {
        // history.push("/create/dashboard/1");
      }}
      save={() => {
        // changeState("createStep", 3);
        // history.push("/create/dashboard/1");
      }}
    >
      <div>
        {currentComponent === "availibility" ? (
          <Availability
            handleClick={() => {
              setTimeout(() => {
                tutorial.next();
              }, 300);

              setCurrentComponent("galleryAndInfo");
            }}
          />
        ) : (
          <div className={classes.drawerContent}>
            <Gallery
              images={images}
              setImages={setImages}
              tutorial={tutorial}
            />
            <div id="room_edit_info" className={classes.additionalContent}>
              {house.type === "shared" && (
                <div className={classes.question} style={{ paddingTop: 20 }}>
                  <span className={classes.questionTitle}>
                    ¿Cómo reconoces esta habitación?
                  </span>
                  <p className={classes.questionDescription}>
                    Te ayuda a distinguir de que habitación hablas. Solamente tú
                    puedes ver este título. Ejemplo: “La que está detrás de la
                    cocina”.
                  </p>
                  <div className={classes.distinguishField}>
                    <VICOTextField placeholder="Al lado del baño" />
                  </div>
                </div>
              )}

              {(house.type === "shared" || house.type === "private") && (
                <>
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
                    },
                    {
                      id: 5,
                      text: "Otro"
                    }
                  ].map((item) => (
                    <div key={item.id} className={classes.response}>
                      <VICOSquareBtn
                        icon={item.icon}
                        text={item.text}
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
                      <span className={classes.squareBtnDesc}>
                        {item.title}
                      </span>
                    </div>
                  ))}
                  <div style={{ visibility: "hidden" }}>
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
        )}
      </div>
    </RightDrawerScaffold>
  );
};

export default RoomEdit;

/* <>
<Grid container style={{ margin: "4rem", backgroundColor: "#dadada" }}>
  <Grid item xs={8}>
    <p>Room Edit</p>
    <Button
      component={RouterLink}
      to="/create/dashboard/1"
      variant="contained"
      color="secondary"
    >
      Close Rooms
    </Button>
    <Button
      component={RouterLink}
      to="/create/dashboard/1"
      variant="contained"
      color="secondary"
      onClick={handleClick}
    >
      Continue
    </Button>
  </Grid>
</Grid>
</> */
