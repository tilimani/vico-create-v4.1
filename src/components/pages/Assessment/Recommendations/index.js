import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import VICOButton from "../../../atoms/VICOButton";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({}));

const PlacesSection = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <p>Recomendacion 1</p>
      </Grid>
      <Grid item xs={12}>
        <p>Recomendacion 1</p>
      </Grid>
      <Grid item xs={12}>
        <p>Recomendacion 1</p>
      </Grid>
      <VICOButton
        onClick={() => console.log("test")}
        component={RouterLink}
        to="/assessment/"
        variant="contained"
        color="primary"
        text="Back to Start"
      />
    </Grid>
  );
};

export default PlacesSection;
