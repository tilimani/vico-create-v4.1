import React from "react";
import { Button, Grid } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const Rules = () => {
  return (
    <Grid container style={{ margin: "4rem", backgroundColor: "#dadada" }}>
      <Grid item xs={8}>
        <div className=".my-first-step">
          <p>Rules</p>
          <Button
            component={RouterLink}
            to="/create/dashboard/1"
            variant="contained"
            color="secondary"
          >
            Close Rules
          </Button>
          <Button
            component={RouterLink}
            to="/create/dashboard/1/services"
            variant="contained"
            color="secondary"
          >
            Continue
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default Rules;
