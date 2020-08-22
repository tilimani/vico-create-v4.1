import React from "react";
import { Link as RouterLink } from "react-router-dom";
import VICOButton from "../../../atoms/VICOButton";

const VicoNameView = () => {
  return (
    <>
      Vico Name
      <VICOButton
        component={RouterLink}
        to="/create/address"
        variant="contained"
        color="primary"
        text="Continue"
      />
    </>
  );
};

export default VicoNameView;
