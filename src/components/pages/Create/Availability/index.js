import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { CreateContext } from "../../../../common/context";
import VICOButton from "../../../atoms/VICOButton";

const BasicInfoView = () => {
  const { house } = React.useContext(CreateContext);

  return (
    <>
      Availability
      <VICOButton
        component={RouterLink}
        to={`/create/dashboard/${house.id}`}
        variant="contained"
        color="primary"
        text="Continue"
      />
    </>
  );
};

export default BasicInfoView;
