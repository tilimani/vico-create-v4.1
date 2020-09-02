import React, { useContext } from "react";
import { Button, Grid, makeStyles } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { CreateContext } from "../../../../../common/context";

import RightDrawerScaffold from "../RightDrawerScaffold";

const useStyles = makeStyles((theme) => ({
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
  }
}));

const CommonAreas = ({ tutorial, history }) => {
  const classes = useStyles();
  const { changeState } = useContext(CreateContext);
  const handleClick = () => {
    changeState("createStep", 3);
  };

  return (
    <RightDrawerScaffold
      close={() => {
        // history.push("/create/dashboard/1")
      }}
      save={() => {
        // changeState("createStep", 3);
        // history.push("/create/dashboard/1/services");
      }}
    >
      <div id="common_areas_gallery">
        <div className={classes.drawerContent}>
          <span className={classes.title}>Galeria zonas sociales</span>
          <p className={classes.subtitle}>
            Sube mínimo 5 fotos de las zonas sociales y áreas compartidas de tu
            VICO.{" "}
          </p>
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
