import React from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core";
import RadioGroup from "@material-ui/core/RadioGroup";
import Grid from "@material-ui/core/Grid";
import { CreateContext } from "../../../../../common/context";
import RightDrawerScaffold from "../RightDrawerScaffold";

import VICORadioButton from "../../../../atoms/VICORadioButton";
import VICOSlider from "../../../../atoms/VICOSlider";
import VICOTextField from "../../../../atoms/VICOTextField";
import VICOSwitch from "../../../../atoms/VICOSwitch";
import VICOButton from "../../../../atoms/VICOButton";

const useStyles = makeStyles((theme) => ({
  drawerContent: {
    width: 550,
    flexShrink: 0,
    marginLeft: 160,
    marginRight: 160,
    marginTop: 50
  },
  title: {
    fontSize: 20,
    color: theme.palette.secondary.main,
    fontWeight: "bold"
  },
  continueBtnWrapper: {
    textAlign: "center"
  },
  description: {
    fontSize: 16,
    color: theme.palette.secondary.main,
    marginTop: 10,
    textAlign: "center",
    width: "50%"
  },
  availableDates: {
    marginTop: 20
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  date: {
    fontSize: 16,
    color: theme.palette.secondary.light,
    marginTop: 4,
    textAlign: "center"
  }
}));

const Availability = (props) => {
  /** Styles */
  const classes = useStyles();
  /** Context */
  const { house, createStep, changeState } = React.useContext(CreateContext);
  /** local state */
  const [rules, setRules] = React.useState({
    minimumStay: null,
    costGuestPerNight: null,
    depositDiscount: 50,
    cleaningIncluded: null,
    additionalRulesDescription: null,
    monthlyRentCost: null,
    couplePrice: null,
    smartPriceActive: false
  });

  const isSharedHouse = house.type === "shared";

  const [selectedItem, setSelectedItem] = React.useState(null);

  return (
    <div className={classes.drawerContent} id="room_availibility">
      <span className={classes.title}>
        ¿A partir de cuándo está disponible este apartaestudio?
      </span>
      <RadioGroup
        name="availability"
        value={selectedItem}
        onChange={(event) => {
          setSelectedItem(event.target.value);
        }}
      >
        <Grid container spacing={3} className={classes.availableDates}>
          <Grid item xs={6} className={classes.grid}>
            <VICORadioButton
              icon="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/Vkzl-today.png"
              value="a_patir_de_hoy"
              checked={selectedItem == "a_patir_de_hoy"}
            />
            <span className={classes.description}>A patir de hoy</span>
            <span className={classes.date}>Lun., 17.08.2020</span>
          </Grid>
          <Grid item xs={6} className={classes.grid}>
            <VICORadioButton
              icon="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/yHeP-nextWeek.png"
              value="próxima_semana"
              checked={selectedItem == "próxima_semana"}
            />
            <span className={classes.description}>Próxima semana</span>
            <span className={classes.date}>Lun., 17.08.2020</span>
          </Grid>
          <Grid item xs={6} className={classes.grid}>
            <VICORadioButton
              icon="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/8rnN-nextMonth.png"
              value="proximo_mes"
              checked={selectedItem == "proximo_mes"}
            />
            <span className={classes.description}>Proximo mes</span>
            <span className={classes.date}>Lun., 17.08.2020</span>
          </Grid>
          <Grid item xs={6} className={classes.grid}>
            <VICORadioButton
              icon="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/k50S-nextYear.png"
              value="proximo_año"
              checked={selectedItem == "proximo_año"}
            />
            <span className={classes.description}>Proximo año</span>
            <span className={classes.date}>Lun., 17.08.2020</span>
          </Grid>
          <Grid item xs={6} className={classes.grid}>
            <VICORadioButton
              icon="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/Oz3g-specificDate.png"
              value="fecha_especifica"
              checked={selectedItem == "fecha_especifica"}
            />
            <span className={classes.description}>Fecha especifica</span>
          </Grid>
          <Grid item xs={6} className={classes.grid}>
            <VICORadioButton
              icon="https://uploads.codesandbox.io/uploads/user/129a52fa-24c5-45b6-8b1e-048cf0197deb/ffIJ-none.png"
              value="nunca"
              checked={selectedItem == "nunca"}
            />
            <span className={classes.description}>Nunca</span>
          </Grid>
        </Grid>
      </RadioGroup>
      <div className={classes.continueBtnWrapper}>
        <VICOButton
          onClick={props.handleClick}
          disabled={selectedItem === null}
          variant="contained"
          color="primary"
          text="Continuar"
          style={{
            width: 267,
            marginTop: 46,
            marginBottom: 40,
            color: "white"
          }}
        />
      </div>
    </div>
  );
};

export default Availability;
