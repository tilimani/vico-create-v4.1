import React, { useState } from "react";

import { makeStyles } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import { CreateConsumer, CreateContext } from "../../../../common/context";
import VICOMobileLinearProgress from "../../../atoms/VICOMobileLinearProgress";
import VICOSaveButton from "../../../atoms/VICOSaveButton";
import VICOReturnButton from "../../../atoms/VICOReturnButton";
import VICOButton from "../../../atoms/VICOButton";
import BasicInfoItem from "./BasicInfoItem";

const useStyles = makeStyles((theme) => ({
  vicoNameViewContent: {
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
    fontSize: 30,
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
    width: "100%",
    paddingLeft: 60,
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
  sharedInfoWrapper: {
    marginTop: 20
  }
}));

const BasicInfoView = (props) => {
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
                <VICOMobileLinearProgress step={6} />
                <div className={classes.actionsWrapper}>
                  <VICOReturnButton
                    action={() => {
                      props.history.push("/create/address");
                    }}
                  />
                  <VICOSaveButton
                    action={() => {
                      if (house.type === "shared") {
                        props.history.push(`/create/dashboard/${house.id}`);
                        changeState("createStep", 1);
                      } else {
                        props.history.push("/create/availability");
                      }
                    }}
                  />
                </div>
              </div>
            );
          }}
        </CreateConsumer>
      )}
      <div className={classes.vicoNameViewContent}>
        {!isMediumScreen && (
          <CreateConsumer>
            {(state) => {
              return (
                <div className={classes.actionsWrapper}>
                  <VICOReturnButton
                    action={() => {
                      props.history.push("/create/address");
                    }}
                  />
                  <VICOSaveButton
                    action={() => {
                      if (house.type === "shared") {
                        props.history.push(`/create/dashboard/${house.id}`);
                      } else {
                        props.history.push("/create/availability");
                      }
                    }}
                  />
                </div>
              );
            }}
          </CreateConsumer>
        )}
        <div className={`${classes.formWrapper}`}>
          <span className={classes.title}>INFORMACIÓN DE TU VICO</span>
          {/** HOUSE TYPE = SHARED  */}
          {house.type === "shared" && (
            <Grid container spacing={3} className={classes.sharedInfoWrapper}>
              <Grid item xs={12} md={6}>
                <BasicInfoItem
                  yesNoQuestion
                  title="¿Tu vives en la VICO?"
                  subtitle="Queremos saber si vas a convivir con tus invitados."
                  value={house.is_manager_in_house}
                  action={(value) =>
                    changeState("house", {
                      ...house,
                      is_manager_in_house: value
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <BasicInfoItem
                  title="¿Cuántas habitaciones tiene tu VICO en total?"
                  subtitle="Pon el número total de habitaciones, incluso aunque no las vayas a alquilar todas."
                  numericValue={house.rooms_quantity}
                  action={(value) =>
                    changeState("house", {
                      ...house,
                      rooms_quantity: value
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <BasicInfoItem
                  title="¿Cuántos baños tiene tu VICO?"
                  subtitle="Número total de baños en toda la casa."
                  numericValue={house.baths_quantity}
                  action={(value) =>
                    changeState("house", {
                      ...house,
                      baths_quantity: value
                    })
                  }
                />
              </Grid>
            </Grid>
          )}
          {/** HOUSE TYPE = STUDIO */}
          {house.type === "studio" && (
            <Grid container spacing={3} className={classes.sharedInfoWrapper}>
              <Grid item xs={12} md={6}>
                <BasicInfoItem
                  title="Cuántas personas pueden dormir en tu VICO"
                  subtitle="Número de personas que podrían hospedarse en tu VICO en total."
                  numericValue={house.capacity}
                  action={(value) =>
                    changeState("house", {
                      ...house,
                      capacity: value
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <BasicInfoItem
                  title="¿Cuántos baños tiene tu VICO?"
                  subtitle="Número total de baños en toda la casa."
                  numericValue={house.baths_quantity}
                  action={(value) =>
                    changeState("house", {
                      ...house,
                      baths_quantity: value
                    })
                  }
                />
              </Grid>
            </Grid>
          )}
        </div>
        {/** HOUSE TYPE = PRIVATE */}
        {house.type === "private" && (
          <Grid container spacing={3} className={classes.sharedInfoWrapper}>
            <Grid item xs={12} md={6}>
              <BasicInfoItem
                title="¿Cuántos baños tiene tu VICO?"
                subtitle="Número total de baños en toda la casa."
                numericValue={house.baths_quantity}
                action={(value) =>
                  changeState("house", {
                    ...house,
                    baths_quantity: value
                  })
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <BasicInfoItem
                title="¿Cuántas habitaciones tiene tu VICO en total?"
                subtitle="Pon el número total de habitaciones, incluso aunque no las vayas a alquilar todas."
                numericValue={house.rooms_quantity}
                action={(value) =>
                  changeState("house", {
                    ...house,
                    rooms_quantity: value
                  })
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <BasicInfoItem
                title="Cuántas personas pueden dormir en tu VICO"
                subtitle="Número de personas que podrían hospedarse en tu VICO en total."
                numericValue={house.capacity}
                action={(value) =>
                  changeState("house", {
                    ...house,
                    capacity: value
                  })
                }
              />
            </Grid>
          </Grid>
        )}
        <VICOButton
          onClick={() => {
            if (house.type === "shared") {
              props.history.push(`/create/dashboard/${house.id}`);
              changeState("createStep", 1);
            } else {
              props.history.push("/create/availability");
            }
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

export default BasicInfoView;
