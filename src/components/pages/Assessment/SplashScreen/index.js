import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import VICOBorderLinearProgress from "../../../atoms/VICOBorderLinearProgress";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  marginBottom: {
    marginBottom: "2rem"
  },
  container: {
    position: "fixed",
    width: "100%",
    height: "100%",
    left: "0",
    top: "0"
    //padding: "4rem"
  },
  splashScreen: {
    background:
      "linear-gradient(180deg, rgba(0, 0, 0, .1) 0%, #00000045 60%, #000000 100%), url('https://vico.imgix.net/City_filter_medellin.jpg?auto=format&q=40&w=1280'), #C4C4C4",
    backgroundSize: "cover",

    height: "100%",
    padding: "4rem"
  },
  contentBox: {
    position: "relative",
    border: "0px solid #dadada45",
    width: "100%",
    height: "100%"
  },
  progressBar: {
    width: "80%"
  },
  title: {
    color: "white",
    fontSize: "24px",
    textAlign: "center"
  },
  subtitle: {
    color: "white",
    fontSize: "18px"
  },
  logo: {
    width: "3rem"
  }
}));

const PlacesSection = () => {
  const history = useHistory();
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    //setTimeout(() => setRedirect(`/assessment/recommendations`), 1500);
    setTimeout(() => history.push("/assessment/recommendations"), 1500);
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
            justify="flex-start"
            alignItems="center"
            className={classes.contentBox}
          >
            <img
              className={classes.logo}
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
