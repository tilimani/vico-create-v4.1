import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, LinearProgress } from "@material-ui/core";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({}));

const PlacesSection = () => {
  const [progress, setProgress] = useState(0);
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    console.log(true);
    const timer = setInterval(() => {
      setProgress((progress) => {
        return Math.min(progress + 10, 100);
      });
    }, 100);
    setTimeout(() => setRedirect(`/assessment/recommendations`), 1500);
  }, []);
  const classes = useStyles();
  if (redirect) {
    return <Redirect to={redirect} />;
  }
  return (
    <Grid container>
      <Grid item xs={12}>
        <p>Loading</p>
        <LinearProgress variant="determinate" value={progress} />
      </Grid>
    </Grid>
  );
};

export default PlacesSection;
