import React from "react";
import Areas from "./Areas";
import Budget from "./Budget";
import SplashScreen from "./SplashScreen";
import Preferences from "./Preferences";
import Recommendations from "./Recommendations";
import { Route, Switch } from "react-router-dom";

import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up("sm")]: {
      padding: "2rem",
      background: "#212529",
      position: "fixed",
      width: "100%",
      height: "100%",
      left: "0",
      top: "0"
    }
  },
  container__inside: {
    background: "white",
    [theme.breakpoints.up("sm")]: {
      width: "60%",
      height: "80%"
    }
  },
  container__header: {
    padding: "1rem",
    color: "white",
    //background: theme.palette.primary.main,
    background: "#ef8e01",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {},
    "& img": {
      maxHeight: "32px"
    }
  }
}));

const Assessment = () => {
  let history = useHistory();
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.container}>
        <Grid container className={classes.container__inside}>
          <Grid
            container
            className={classes.container__header}
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={1}>
              <ArrowBackIosIcon onClick={() => history.goBack()} />
            </Grid>
            <Grid item xs={10}>
              <img
                src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/X7w8-logo.png"
                alt="logo"
                id="vico-logo"
              />
            </Grid>
            <Grid item xs={1}>
              <CloseIcon onClick={() => history.goBack()} />
            </Grid>
          </Grid>
          <Switch>
            <Route exact path="/assessment/" component={Areas} />
            <Route path="/assessment/budget" component={Budget} />
            <Route path="/assessment/preferences" component={Preferences} />
            <Route exact path="/assessment/loading" component={SplashScreen} />
            <Route
              exact
              path="/assessment/recommendations"
              component={Recommendations}
            />
          </Switch>
        </Grid>
      </Grid>
    </>
  );
};
export default Assessment;
