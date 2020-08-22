import React from "react";
import { Link as RouterLink } from "react-router-dom";
import VICOButton from "../../../atoms/VICOButton";

const VicoTypeView = () => {
  return (
    <>
      Vico Type
      <VICOButton
        component={RouterLink}
        to="/create/name"
        variant="contained"
        color="primary"
        text="Continue"
      />
    </>
  );
};

export default VicoTypeView;
