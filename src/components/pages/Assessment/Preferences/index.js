import React from "react";
import Persons from "./Persons";
import Needs from "./Needs";
import Grid from "@material-ui/core";
import { Route, Switch } from "react-router-dom";

const PreferencesRoutes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/assessment/preferences/" component={Persons} />
        <Route path="/assessment/preferences/needs" component={Needs} />
      </Switch>
    </>
  );
};
export default PreferencesRoutes;
