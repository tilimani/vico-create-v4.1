import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { CreateContext } from "../../../../common/context";
import VICOButton from "../../../atoms/VICOButton";

const BasicInfoView = () => {
  const { house, changeState, createStep } = React.useContext(CreateContext);
  const handleClick = () => {
    changeState("createStep", createStep + 1);
  };
  return (
    <>
      BasicInfo
      {house.type === "shared" ? (
        <VICOButton
          component={RouterLink}
          to={`/create/dashboard/${house.id}`}
          variant="contained"
          color="primary"
          onClick={handleClick}
          text="Continue"
        />
      ) : (
        <VICOButton
          component={RouterLink}
          to={`/create/availability`}
          variant="contained"
          color="primary"
          onClick={handleClick}
          text="Continue"
        />
      )}
    </>
  );
};

export default BasicInfoView;
