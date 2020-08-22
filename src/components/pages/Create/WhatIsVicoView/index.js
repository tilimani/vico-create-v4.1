import React from "react";
import { Link as RouterLink } from "react-router-dom";
import VICOButton from "../../../atoms/VICOButton";

const WhatIsVicoView = () => {
  return (
    <>
      What Is Vico
      <VICOButton
        component={RouterLink}
        to="/create/howto"
        variant="contained"
        color="primary"
        text="Continue"
      />
    </>
  );
};

export default WhatIsVicoView;
