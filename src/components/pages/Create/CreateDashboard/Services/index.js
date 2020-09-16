import React, { useState } from "react";
import { makeStyles, useMediaQuery } from "@material-ui/core";
import { CreateContext } from "../../../../../common/context";

import RightDrawerScaffold from "../RightDrawerScaffold";
import VICOSquareBtn from "../../../../atoms/VICOSquareBtn";
import VICOButton from "../../../../atoms/VICOButton";
import VICOCheckbox from "../../../../atoms/VICOCheckbox";

const useStyles = makeStyles((theme) => ({
  drawerContent: {
    width: 450,
    flexShrink: 0,
    marginLeft: 160,
    marginRight: 160,
    marginTop: 100,
    [theme.breakpoints.down("md")]: {
      width: "auto",
      margin: "30px 70px"
    },
    [theme.breakpoints.down("sm")]: {
      margin: "30px 20px"
    }
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
    flexWrap: "wrap",
    justifyContent: "center"
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
  },
  responseText: {
    marginTop: 10,
    fontSize: 16,
    color: theme.palette.secondary.main
  }
}));

const Services = (props) => {
  const classes = useStyles();
  const isMediumScreen = useMediaQuery("(max-width:960px)");
  const { changeState } = React.useContext(CreateContext);
  const [utilitiesIncluded, setUtilitiesIncluded] = useState(false);
  return (
    <RightDrawerScaffold
      close={() => {
        // props.history.push("/create/dashboard/1")
      }}
      save={() => {
        // changeState("createStep", 2);
        // props.history.push("/create/dashboard/1/services");
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
            <span className={classes.responseText}>Wifi</span>
          </div>
          <div className={classes.response}>
            <VICOSquareBtn
              color="primary"
              icon="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/Pkk0-water.png"
            />
            <span className={classes.responseText}>Agua</span>
          </div>
          <div className={classes.response}>
            <VICOSquareBtn
              color="primary"
              icon="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/_T7M-gas.png"
            />
            <span className={classes.responseText}>Gas</span>
          </div>
          <div className={classes.response}>
            <VICOSquareBtn
              color="primary"
              icon="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/Xb8l-light.png"
            />
            <span className={classes.responseText}>Luz</span>
          </div>
        </div>

        <div className={classes.confirmCheckboxWrapper}>
          <VICOCheckbox
            handleChange={(event) => {
              setUtilitiesIncluded(event.target.checked);
            }}
            text="Confirmo que en el alquiler se incluyen los servicios de WIFI, agua, gas y luz."
          />
        </div>
        <div className={classes.continueBtnWrapper}>
          <VICOButton
            onClick={() => {
              changeState("createStep", 2);
              props.history.push("/create/dashboard/1");
            }}
            disabled={!utilitiesIncluded}
            variant="contained"
            color="primary"
            text="Continuar"
            style={{
              width: 267,
              marginTop: 46,
              color: "white"
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
