import React from "react";
import { Link as RouterLink } from "react-router-dom";
import VICOButton from "../../../atoms/VICOButton";

const VicoHowToView = () => {
  return (
    <>
      Vico Steps
      <VICOButton
        component={RouterLink}
        to="/create/type"
        variant="contained"
        color="primary"
        text="Continue"
      />
    </>
  );
};

export default VicoHowToView;
