import React from "react";
import { makeStyles } from "@material-ui/core";
import CreateWelcomeView from "./CreateWelcomeView";
import WhatIsVicoView from "./WhatIsVicoView";
import VicoHowToView from "./VicoHowToView";
import VicoTypeView from "./VicoTypeView";
import VicoNameView from "./VicoNameView";
import AddressView from "./AddressView";
import CreateDashboard from "./CreateDashboard";
import BasicInfoView from "./BasicInfoView";
import Availability from "./Availability";
import { Route } from "react-router-dom";
import { CreateProvider } from "../../../common/context";

const useStyles = makeStyles((theme) => ({
  createContainer: {
    position: "relative",
    height: "98vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start"
    }
  }
}));
const Create = () => {
  const classes = useStyles();
  return (
    <CreateProvider>
      <div className={classes.createContainer}>
        <Route exact path="/create" component={CreateWelcomeView} />

        <Route path="/create/vicoinfo" component={WhatIsVicoView} />

        <Route path="/create/howto" component={VicoHowToView} />

        <Route path="/create/type" component={VicoTypeView} />

        <Route path="/create/name" component={VicoNameView} />

        <Route path="/create/address" component={AddressView} />

        <Route path="/create/basic" component={BasicInfoView} />

        <Route path="/create/availability" component={Availability} />

        <Route
          path={`/create/dashboard/:houseId`}
          component={CreateDashboard}
        />
      </div>
    </CreateProvider>
  );
};

export default Create;
