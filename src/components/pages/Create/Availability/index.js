import React from "react";

import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { CreateConsumer, CreateContext } from "../../../../common/context";
import VICOMobileLinearProgress from "../../../atoms/VICOMobileLinearProgress";
import VICOSaveButton from "../../../atoms/VICOSaveButton";
import VICOReturnButton from "../../../atoms/VICOReturnButton";
import VICOButton from "../../../atoms/VICOButton";

import AvailabilityItem from "./AvailabilityItem";

const useStyles = makeStyles((theme) => ({
  availabilityViewContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 5px 4px 0px #AEA7A1",
    borderRadius: 8,
    padding: "40px 20px",
    margin: "150px 200px",
    [theme.breakpoints.down("sm")]: {
      boxShadow: "none",
      padding: "40px 20px",
      margin: "auto"
    }
  },
  title: {
    fontSize: 18,
    color: theme.palette.secondary.main,
    fontWeight: "bold"
  },

  formWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 20,
    marginTop: 20,
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      padding: 0
    }
  },
  actionsWrapper: {
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    width: "100%"
  },
  availableDates: {
    marginTop: 20
  }
}));

const Availability = (props) => {
  const classes = useStyles();
  const isMediumScreen = useMediaQuery("(max-width:960px)");
  const { house, changeState } = React.useContext(CreateContext);
  return (
    <div>
      {isMediumScreen && (
        <CreateConsumer>
          {(state) => {
            return (
              <div>
                <VICOMobileLinearProgress
                // step={state.createStep}
                />
                <div className={classes.actionsWrapper}>
                  <VICOReturnButton
                    action={() => {
                      props.history.push("/create/basic");
                      // state.changeState("createStep", 7);
                    }}
                  />
                  <VICOSaveButton
                    action={() => {
                      props.history.push(`/create/dashboard/${house.id}`);
                      changeState("createStep", 1);
                    }}
                  />
                </div>
              </div>
            );
          }}
        </CreateConsumer>
      )}
      <div className={classes.availabilityViewContent}>
        {!isMediumScreen && (
          <CreateConsumer>
            {(state) => {
              return (
                <div className={classes.actionsWrapper}>
                  <VICOReturnButton
                    action={() => {
                      props.history.push("/create/basic");
                      // state.changeState("createStep", 7);
                    }}
                  />
                  <VICOSaveButton
                    action={() => {
                      props.history.push(`/create/dashboard/${house.id}`);
                      changeState("createStep", 1);
                    }}
                  />
                </div>
              );
            }}
          </CreateConsumer>
        )}
        <div className={`${classes.formWrapper}`}>
          <span className={classes.title}>
            ¿A partir de cuándo está disponible este apartaestudio?
          </span>
          <Grid container spacing={3} className={classes.availableDates}>
            <Grid item xs={6} md={2}>
              <AvailabilityItem
                icon="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/Vkzl-today.png"
                description="A patir de hoy"
              />
            </Grid>
            <Grid item xs={6} md={2}>
              <AvailabilityItem
                icon="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/yHeP-nextWeek.png"
                description="Próxima semana"
              />
            </Grid>
            <Grid item xs={6} md={2}>
              <AvailabilityItem
                icon="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/8rnN-nextMonth.png"
                description="Proximo mes"
              />
            </Grid>
            <Grid item xs={6} md={2}>
              <AvailabilityItem
                icon="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/k50S-nextYear.png"
                description="Proximo año"
              />
            </Grid>
            <Grid item xs={6} md={2}>
              <AvailabilityItem
                icon="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/Oz3g-specificDate.png"
                description="Fecha especifica"
              />
            </Grid>
            <Grid item xs={6} md={2}>
              <AvailabilityItem
                icon="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/ffIJ-none.png"
                description="Nunca"
              />
            </Grid>
          </Grid>
        </div>

        <VICOButton
          onClick={() => {
            props.history.push(`/create/dashboard/${house.id}`);
            changeState("createStep", 1);
          }}
          variant="contained"
          color="primary"
          text="Continuar"
          style={{
            width: 267,
            marginTop: 46
          }}
        />
      </div>
    </div>
  );
};

export default Availability;
