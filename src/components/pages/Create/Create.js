import React from "react";
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

const Create = () => {
  return (
    <CreateProvider>
      <Route exact path="/create" component={CreateWelcomeView} />

      <Route path="/create/vicoinfo" component={WhatIsVicoView} />

      <Route path="/create/howto" component={VicoHowToView} />

      <Route path="/create/type" component={VicoTypeView} />

      <Route path="/create/name" component={VicoNameView} />

      <Route path="/create/address" component={AddressView} />

      <Route path="/create/basic" component={BasicInfoView} />

      <Route path="/create/availability" component={Availability} />

      <Route path={`/create/dashboard/:houseId`} component={CreateDashboard} />
    </CreateProvider>
  );
};

export default Create;
