import React from "react";
import { Button, Grid } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { CreateContext } from "../../../../../common/context";

const Services = () => {
  const { changeState } = React.useContext(CreateContext);
  const handleClick = () => {
    changeState("createStep", 2);
  };
  return (
    <>
      <Grid container style={{ margin: "4rem", backgroundColor: "#dadada" }}>
        <Grid item xs={8}>
          <p>Services</p>
          <Button
            component={RouterLink}
            to="/create/dashboard/1"
            variant="contained"
            color="secondary"
          >
            Close Services
          </Button>
          <Button
            component={RouterLink}
            to="/create/dashboard/1"
            variant="contained"
            color="secondary"
            onClick={handleClick}
          >
            Continue
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Services;
