import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import VICOBorderLinearProgress from "../../../atoms/VICOBorderLinearProgress";

const useStyles = makeStyles((theme) => ({
  marginBottom: {
    marginBottom: "2rem"
  },
  container: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "black"
    //padding: "4rem"
  },
  splashScreen: {
    background:
      "linear-gradient(180deg, rgba(0, 0, 0, .1) 0%, #00000045 60%, #000000 100%), url('https://www.getvico.com/blog/wp-content/uploads/2019/05/parques_de_medellin.jpg'), #C4C4C4",
    backgroundSize: "cover",
    maxWidth: "100vw",
    height: "100%",
    padding: "4rem"
  },
  contentBox: {
    border: "0px solid #dadada45",
    width: "100%",
    height: "100%"
  },
  progressBar: {
    width: "60%"
  },
  title: {
    color: "white"
  },
  subtitle: {
    color: "white"
  }
}));

const PlacesSection = () => {
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    //setTimeout(() => setRedirect(`/assessment/recommendations`), 1500);
  }, []);
  const classes = useStyles();
  if (redirect) {
    return <Redirect to={redirect} />;
  }
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Grid
          className={classes.splashScreen}
          justify="center"
          alignItems="center"
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.contentBox}
          >
            <img
              alt="vico logo"
              src="https://www.getvico.com/images/vico_logo_white.svg?fc3892511ebae032cd339477c02a2090"
            />
            <Grid item className={classes.marginBottom}>
              <h3 className={classes.title}>
                Estamos personalizado tus recomendaciones
              </h3>
            </Grid>

            <VICOBorderLinearProgress className={classes.progressBar} />
            <p className={classes.subtitle}>#lovewhereyoulive</p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PlacesSection;
