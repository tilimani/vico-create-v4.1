import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import AOS from "aos";
import "aos/dist/aos.css";

import theme from "./common/theme";
import Assessment from "./components/pages/Assessment/Assessment";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  AOS.init();
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/">
        <Switch>
          <Route path="/assessment">
            <Assessment />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
