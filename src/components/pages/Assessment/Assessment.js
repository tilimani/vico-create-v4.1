import React from "react";
import Areas from "./Areas";
import Budget from "./Budget";
import SplashScreen from "./SplashScreen";
import Preferences from "./Preferences";
import Recommendations from "./Recommendations";
import Grid from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
const Assessment = () => {
  return (
    <>
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
    </>
  );
};
export default Assessment;
