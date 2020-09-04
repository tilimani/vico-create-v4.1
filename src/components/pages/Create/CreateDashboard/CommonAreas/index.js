import React, { useContext, useEffect } from "react";
import {
  Button,
  Grid,
  makeStyles,
  TextField,
  withStyles
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { CreateContext } from "../../../../../common/context";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";
import RightDrawerScaffold from "../RightDrawerScaffold";
import VICOButton from "../../../../atoms/VICOButton";

import "./index.css";
import VICODropZone from "../../../../atoms/VICODropZone";
import VICOTag from "../../../../atoms/VICOTag";
import VICOSquareBtn from "../../../../atoms/VICOSquareBtn";

import sencilla from "../../../../../assets/sencilla.png";
import semidouble from "../../../../../assets/semidouble.png";
import doble from "../../../../../assets/doble.png";
import privatebath from "../../../../../assets/privatebath.png";
import sharedbath from "../../../../../assets/sharedbath.png";
import outside from "../../../../../assets/outside.png";
import inside from "../../../../../assets/inside.png";
import nowindow from "../../../../../assets/nowindow.png";
import tothepatio from "../../../../../assets/tothepatio.png";

import comedor from "../../../../../assets/comedor.png";
import horno from "../../../../../assets/horno.png";
import tv from "../../../../../assets/tv.png";
import cafeteria from "../../../../../assets/cafeteria.png";
import licuadora from "../../../../../assets/licuadora.png";
import lavadora from "../../../../../assets/lavadora.png";
import secadora from "../../../../../assets/secadora.png";
import duchas from "../../../../../assets/duchas.png";
import porteria from "../../../../../assets/porteria.png";

import cocina from "../../../../../assets/cocina.png";
import gym from "../../../../../assets/gym.png";
import piscina from "../../../../../assets/piscina.png";
import sauna from "../../../../../assets/sauna.png";
import ascensor from "../../../../../assets/ascensor.png";
import garaje from "../../../../../assets/garaje.png";

import escritorio from "../../../../../assets/escritorio.png";
import nevara from "../../../../../assets/nevara.png";
import espaciodetrabajo from "../../../../../assets/espaciodetrabajo.png";

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
  title: {
    fontSize: 20,
    color: theme.palette.secondary.main,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 16,
    color: theme.palette.secondary.main
  },
  tips: {
    color: theme.palette.secondary.main,
    marginTop: 46
  },
  tipsTitle: {
    fontSize: 16,
    color: theme.palette.secondary.main,
    marginTop: 30,
    fontWeight: "bold"
  },
  tipItem: {
    display: "flex",
    marginTop: 10
  },
  tipItemCheckIcon: {
    color: "#07A529",
    width: 16,
    marginRight: 10
  },
  tipItemCloseIcon: {
    color: "#D64040",
    width: 16,
    marginRight: 10
  },
  tipItemText: {
    fontSize: 16,
    color: theme.palette.secondary.main
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

const CustomTextField = withStyles((theme) => ({
  root: {
    height: 81,
    width: 406,
    borderRadius: 6,
    boxShadow: "0px 2px 4px rgba(239, 142, 5, 0.53)"
  }
}))(TextField);

const CommonAreas = ({ tutorial, history }) => {
  const classes = useStyles();
  const { changeState } = useContext(CreateContext);
  const handleClick = () => {
    changeState("createStep", 3);
  };

  return (
    <RightDrawerScaffold
      close={() => {
        history.push("/create/dashboard/1");
      }}
      save={() => {
        changeState("createStep", 3);
        history.push("/create/dashboard/1");
      }}
    >
      <div>
        <div className={classes.drawerContent}>
          <div id="common_areas_gallery">
            <span className={classes.title}>Galeria zonas sociales</span>
            <p className={classes.subtitle}>
              Sube mínimo 5 fotos de las zonas sociales y áreas compartidas de
              tu VICO.
            </p>

            <VICODropZone />

            <div className={classes.tips}>
              <span className={classes.tipsTitle}>Tips rápidos:</span>
              <div>
                <div className={classes.tipItem}>
                  <CheckIcon className={classes.tipItemCheckIcon} />
                  <span className={classes.tipItemText}>
                    Estas fotos son para mostrar la habitación#1
                  </span>
                </div>

                <div className={classes.tipItem}>
                  <CheckIcon className={classes.tipItemCheckIcon} />
                  <span className={classes.tipItemText}>
                    Ordena los espacios y recoge los objetos del piso y la
                    cocina.
                  </span>
                </div>

                <div className={classes.tipItem}>
                  <CheckIcon className={classes.tipItemCheckIcon} />
                  <span className={classes.tipItemText}>
                    Las fotos horizontales funcionan mejor..
                  </span>
                </div>

                <div className={classes.tipItem}>
                  <CloseIcon className={classes.tipItemCloseIcon} />
                  <span className={classes.tipItemText}>
                    Evita fotos oscuras y borrosas.
                  </span>
                </div>
              </div>
            </div>

            <span className={classes.title}>Adicional</span>
            <div className={classes.question}>
              <p className={classes.questionDescription}>
                ¿Tienes un video de tu VICO?
              </p>
              <div className={classes.responseWrapper}>
                <CustomTextField
                  placeholder="Ingresa el link"
                  label="Video"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </div>
            </div>
          </div>
          <div className={classes.additionalContent}>
            <div className={classes.question} style={{ paddingTop: 20 }}>
              <span className={classes.questionTitle}>
                ¿Cómo definirías tu VICO?
              </span>
              <p className={classes.questionDescription}>
                Selecciona los tags con los que identificas a tu VICO.
              </p>
              <div className={classes.tagsResponseWrapper}>
                {[
                  "Pet friendly",
                  "Weed friendly",
                  "Independiente",
                  "Invitados profesionales",
                  "Digital nomads",
                  "Estudiantes"
                ].map((item, index) => (
                  <VICOTag key={index} label={item} action={() => {}} />
                ))}
              </div>
            </div>

            <div className={classes.question}>
              <span className={classes.questionTitle}>Tipo de cama</span>
              <div className={classes.cameraTypeResponse}>
                {[
                  {
                    icon: sencilla,
                    text: "Sencilla"
                  },
                  {
                    icon: semidouble,
                    text: "Semi-doble"
                  },
                  {
                    icon: doble,
                    text: "Doble"
                  }
                ].map((item, index) => (
                  <div className={classes.response}>
                    <VICOSquareBtn icon={item.icon} />
                    <span className={classes.squareBtnDesc}>{item.text}</span>
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
                    icon: privatebath,
                    text: "Baño privado"
                  },
                  {
                    icon: sharedbath,
                    text: "Baño compartido"
                  }
                ].map((item, index) => (
                  <div className={classes.response}>
                    <VICOSquareBtn icon={item.icon} />
                    <span className={classes.squareBtnDesc}>{item.text}</span>
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
                    icon: nowindow,
                    text: "Sin ventana"
                  },
                  {
                    icon: inside,
                    text: "Hacia dentro"
                  },
                  {
                    icon: tothepatio,
                    text: "Hacia el patio"
                  },
                  {
                    icon: outside,
                    text: "Hacia afuera"
                  }
                ].map((item, index) => (
                  <div className={classes.response}>
                    <VICOSquareBtn icon={item.icon} />
                    <span className={classes.squareBtnDesc}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={classes.question}>
              <span className={classes.questionTitle}>
                ¿Cuáles servicios o facilidades están incluidos en el alquiler
                mensual?
              </span>
              <div className={classes.squareBtnsWrapper}>
                {[
                  {
                    icon: comedor,
                    text: "Comedor"
                  },
                  {
                    icon: horno,
                    text: "Horno"
                  },
                  {
                    icon: tv,
                    text: "Tv"
                  },
                  {
                    icon: cafeteria,
                    text: "Cafetera"
                  },
                  {
                    icon: licuadora,
                    text: "Licuadora"
                  },
                  {
                    icon: lavadora,
                    text: "Lavadora"
                  },
                  {
                    icon: secadora,
                    text: "Secadora"
                  },
                  {
                    icon: duchas,
                    text: "Duchas"
                  },
                  {
                    icon: outside,
                    text: "Balcón"
                  },
                  {
                    icon: porteria,
                    text: "Portería"
                  },
                  {
                    icon: cocina,
                    text: "Cocina"
                  },
                  {
                    icon: gym,
                    text: "Gym"
                  },

                  {
                    icon: piscina,
                    text: "Piscina"
                  },
                  {
                    icon: sauna,
                    text: "Sauna"
                  },
                  {
                    icon: ascensor,
                    text: "Ascensor"
                  },

                  {
                    icon: garaje,
                    text: "Garaje"
                  },
                  {
                    icon: nevara,
                    text: "Nevera"
                  },
                  {
                    icon: nevara,
                    text: "Aire"
                  },
                  {
                    icon: nevara,
                    text: "Closet"
                  },
                  {
                    icon: escritorio,
                    text: "Escritorio"
                  },
                  {
                    icon: escritorio,
                    text: "Bbq"
                  }
                ].map((item, index) => (
                  <div className={classes.response}>
                    <VICOSquareBtn icon={item.icon} />
                    <span className={classes.squareBtnDesc}>{item.text}</span>
                  </div>
                ))}
                <div className={classes.response}>
                  <VICOSquareBtn icon={espaciodetrabajo} />
                  <span className={classes.squareBtnDesc}>
                    Espacio <br />
                    de trabajo
                  </span>
                </div>
              </div>
            </div>

            <div id="common_areas_info" className={classes.continueBtnWrapper}>
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
      </div>
    </RightDrawerScaffold>

    // <>
    //   <Grid container style={{ margin: "4rem", backgroundColor: "#dadada" }}>
    //     <Grid item xs={8}>
    //       <p>Common Areas</p>
    //       <div id="common_areas_gallery">
    //         Gallery container
    //         <Button variant="contained" color="primary">
    //           Subir Fotos
    //         </Button>
    //         <Button
    //           variant="text"
    //           color="secondary"
    //           onClick={() => {
    //             tutorial.next();
    //           }}
    //         >
    //           Omitir
    //         </Button>
    //       </div>
    //       <Button
    //         component={RouterLink}
    //         to="/create/dashboard/1"
    //         variant="contained"
    //         color="secondary"
    //       >
    //         Close common area
    //       </Button>
    //       {/* Tutorial step = 6*/}
    //       <div id="common_areas_info">
    //         <Button
    //           component={RouterLink}
    //           to="/create/dashboard/1"
    //           variant="contained"
    //           color="secondary"
    //           onClick={handleClick}
    //         >
    //           Continue
    //         </Button>
    //       </div>
    //     </Grid>
    //   </Grid>
    // </>
  );
};

export default CommonAreas;
