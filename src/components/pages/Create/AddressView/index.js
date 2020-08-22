import React from "react";
import { Link as RouterLink } from "react-router-dom";
import VICOButton from "../../../atoms/VICOButton";

const AddressView = () => {
  return (
    <>
      Address
      <VICOButton
        component={RouterLink}
        to="/create/basic"
        variant="contained"
        color="primary"
        text="Continue"
      />
    </>
  );
};

export default AddressView;
