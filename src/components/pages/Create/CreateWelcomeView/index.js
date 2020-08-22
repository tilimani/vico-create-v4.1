import React from "react";
import { Link as RouterLink } from "react-router-dom";
import VICOButton from "../../../atoms/VICOButton";

const CreateWelcomeView = () => {
  return (
    <>
      Create Welcome View
      <VICOButton
        component={RouterLink}
        to="/create/vicoinfo"
        variant="contained"
        color="white"
        text="Continue"
      />
    </>
  );
};

export default CreateWelcomeView;
