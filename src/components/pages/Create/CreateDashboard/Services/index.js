import React from "react";
import { Button, Grid, makeStyles } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { CreateContext } from "../../../../../common/context";

import RightDrawerScaffold from "../RightDrawerScaffold";
import VICOSquareBtn from "../../../../atoms/VICOSquareBtn";
import VICOButton from "../../../../atoms/VICOButton";

import gas from "../../../../../assets/gas.png";
import wifi from "../../../../../assets/wifi.png";
import water from "../../../../../assets/water.png";
import light from "../../../../../assets/light.png";
import VICOCheckbox from "../../../../atoms/VICOCheckbox";

const useStyles = makeStyles((theme) => ({
  drawerContent: {
    width: 450,
    flexShrink: 0,
    marginLeft: 160,
    marginRight: 160,
    marginTop: 100
  },
  title: {
    fontSize: 20,
    color: theme.palette.secondary.main,
    fontWeight: "bold"
  },
  continueBtnWrapper: {
    textAlign: "center"
  },
  responseWrapper: {
    display: "flex",
    flexWrap: "wrap"
  },
  response: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    marginTop: 40
  },
  confirmCheckboxWrapper: {
    marginTop: 40
  }
}));

const Services = (props) => {
  const classes = useStyles();

  const { changeState } = React.useContext(CreateContext);

  return (
    <RightDrawerScaffold
      close={() => props.history.push("/create/dashboard/1")}
      save={() => {
        changeState("createStep", 2);
        props.history.push("/create/dashboard/1/services");
      }}
    >
      <div className={classes.drawerContent}>
        <span className={classes.title}>
          Los servicios públicos deben estar incluidos en el valor del alquiler
          mensual.
        </span>
        <div className={classes.responseWrapper}>
          <div className={classes.response}>
            <VICOSquareBtn
              color="primary"
              icon="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/1RiF-wifi.png"
            />
            <span>Wifi</span>
          </div>
          <div className={classes.response}>
            <VICOSquareBtn
              color="primary"
              icon="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/Pkk0-water.png"
            />
            <span>Agua</span>
          </div>
          <div className={classes.response}>
            <VICOSquareBtn
              color="primary"
              icon="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/_T7M-gas.png"
            />
            <span>Gas</span>
          </div>
          <div className={classes.response}>
            <VICOSquareBtn
              color="primary"
              icon="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/Xb8l-light.png"
            />
            <span>Luz</span>
          </div>
        </div>

        <div className={classes.confirmCheckboxWrapper}>
          <VICOCheckbox text="Confirmo que en el alquiler se incluyen los servicios de WIFI, agua, gas y luz." />
        </div>
        <div className={classes.continueBtnWrapper}>
          <VICOButton
            onClick={() => {
              changeState("createStep", 2);
              props.history.push("/create/dashboard/1");
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
    </RightDrawerScaffold>
    // <>
    //   <Grid container style={{ margin: "4rem", backgroundColor: "#dadada" }}>
    //     <Grid item xs={8}>
    //       <p>Services</p>
    //       <Button
    //         component={RouterLink}
    //         to="/create/dashboard/1"
    //         variant="contained"
    //         color="secondary"
    //       >
    //         Close Services
    //       </Button>
    //       <Button
    //         component={RouterLink}
    //         to="/create/dashboard/1"
    //         variant="contained"
    //         color="secondary"
    //         onClick={handleClick}
    //       >
    //         Continue
    //       </Button>
    //     </Grid>
    //   </Grid>
    // </>
  );
};

export default Services;
