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

import "./index.css";
import VICODropZone from "../../../../atoms/VICODropZone";

const useStyles = makeStyles((theme) => ({
  commonAreasGallery: {
    position: "fixed",
    height: "100vh",
    right: 0,
    top: 0,
    backgroundColor: "white",
    width: 742,
    zIndex: 80
  },
  drawerContent: {
    width: 450,
    flexShrink: 0,
    marginLeft: 160,
    marginRight: 160,
    marginTop: 100
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
    fontSize: 20,
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
    fontSize: 20,
    color: theme.palette.secondary.main,
    fontWeight: "bold"
  },
  questionDescription: {
    fontSize: 16,
    color: theme.palette.secondary.main
  },
  TextAreaResponseWrapper: {
    marginTop: 20
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
    <div id="common_areas_gallery" className={classes.commonAreasGallery}>
      <RightDrawerScaffold
        close={() => {
          // history.push("/create/dashboard/1")
        }}
        save={() => {
          // changeState("createStep", 3);
          // history.push("/create/dashboard/1/services");
        }}
      >
        <div>
          <div className={classes.drawerContent}>
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
              <div className={classes.question}>
                <span className={classes.questionTitle}>Adicional</span>
                <p className={classes.questionDescription}>
                  ¿Tienes un video de tu VICO?
                </p>
                <div className={classes.TextAreaResponseWrapper}>
                  <CustomTextField
                    placeholder="Ingresa el link"
                    label="Video"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                  {/* <VICOTextField placeholder="Ingresa el link" label="Video" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RightDrawerScaffold>
    </div>
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
