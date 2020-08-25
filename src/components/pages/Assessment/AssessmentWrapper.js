import React from "react";
import AssessmentRoutes from "./AssessmentRoutes";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up("sm")]: {
      padding: "2rem",
      position: "fixed",
      width: "100%",
      height: "100%",
      left: "0",
      top: "0"
    }
  },
  container__backgroundImage: {
    display: "none",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    background:
      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(https://vico.imgix.net/City_filter_medellin.jpg?auto=format&q=40&w=1280), #C4C4C4",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    filter: "blur(4px)",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  container__inside: {
    background: "white",
    margin: "auto",
    borderRadius: "12px",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      boxShadow: "0 5px 8px rgba(0,0,0,0.6)"
    },
    [theme.breakpoints.up("md")]: {
      width: "70%"
    }
  },
  container__header: {
    height: "60px",
    padding: "1rem",
    color: "white",
    //background: theme.palette.primary.main,
    background: "#ef8e01",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      borderRadius: "12px 12px 0 0"
    },
    "& img": {
      maxHeight: "32px"
    }
  },
  container__content: {
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "2rem",
      paddingRight: "2rem"
    },
    [theme.breakpoints.down("sm")]: {}
  }
}));

const Assessment = () => {
  let history = useHistory();
  const classes = useStyles();
  return (
    <>
      <div className={classes.container__backgroundImage}></div>

      <Grid container className={classes.container}>
        <Grid container className={classes.container__inside}>
          <Grid
            container
            className={classes.container__header}
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={1}>
              <ArrowBackIosIcon onClick={() => history.goBack()} />
            </Grid>
            <Grid item xs={10}>
              <img
                src="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/X7w8-logo.png"
                alt="logo"
                id="vico-logo"
              />
            </Grid>
            <Grid item xs={1}>
              <CloseIcon onClick={() => history.goBack()} />
            </Grid>
          </Grid>
          <Grid
            alignItems="center"
            justify="center"
            container
            className={classes.container__content}
          >
            <AssessmentRoutes />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Assessment;
