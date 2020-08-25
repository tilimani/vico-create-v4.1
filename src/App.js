import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import AOS from "aos";
import "aos/dist/aos.css";

import theme from "./common/theme";
import AssessmentWrapper from "./components/pages/Assessment/AssessmentWrapper";
import Create from "./components/pages/Create/Create";
import LandingPage from "./components/pages/LandingPage/LandingPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  AOS.init();
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/">
        <Switch>
          <Route path="/">
            <Route path="/assessment">
              <AssessmentWrapper />
            </Route>
            {/*<Route path="/create">
              <Create />
            </Route>
            <Route exact path="/">
              <LandingPage />
            </Route>*/}
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
