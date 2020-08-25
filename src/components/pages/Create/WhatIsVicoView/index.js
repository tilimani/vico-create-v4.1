import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import VICOButton from "../../../atoms/VICOButton";

import furnished from "../../../../assets/furnished.png";
import calendar from "../../../../assets/calendar.png";
import inclusive from "../../../../assets/inclusive.png";
import VICOTypeItem from "./VICOTypeItem";

const useStyles = makeStyles(() => ({
  whatIsVicoViewWrapper: {
    minHeight: "98vh",
    height: "98vh"
  },
  whatIsVicoViewContent: {
    border: "1px solid #848080",
    borderRadius: 8,
    minHeight: "60vh",
    padding: "40px 50px 0 0"
  },
  whatIsVicoViewTitle: {
    fontSize: 30,
    color: "#2A3C44",
    fontWeight: "bold"
  },
  whatIsVicoViewSubtitle: {
    color: "#2A3C44",
    fontSize: 16
  }
}));
const WhatIsVicoView = () => {
  const classes = useStyles();
  return (
    <div className={classes.whatIsVicoViewWrapper}>
      <div className={classes.whatIsVicoViewContent}>
        <span className={classes.whatIsVicoViewTitle}>¿QUÉ ES UNA VICO?</span>
        <p className={classes.whatIsVicoViewSubtitle}>
          Cada casa puede ser una VICO. Entiende qué es el concepto VICO y cómo
          puedes volverte parte.
        </p>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <VICOTypeItem
              icon={furnished}
              title="Completamente amoblada"
              subtitle="La sala, cocina y las habitaciones deben estar completamente equipados y listos para mudarse."
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <VICOTypeItem
              icon={calendar}
              title="Estadías de mínimo 30 días"
              subtitle="Tanto la estadía mínima como el tiempo de cancelación son de 30 días."
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <VICOTypeItem
              icon={inclusive}
              title="Todo incluído"
              subtitle="El wifi y los servicios públicos deben estar incluidos en el valor del alquiler mensual."
            />
          </Grid>
        </Grid>
        <VICOButton
          component={RouterLink}
          to="/create/howto"
          variant="contained"
          color="primary"
          text="Continuar"
          style={{ width: 267, marginTop: 40 }}
        />
      </div>
      {/* What Is Vico
      <VICOButton
        component={RouterLink}
        to="/create/howto"
        variant="contained"
        color="primary"
        text="Continuar"
      /> */}
    </div>
  );
};

export default WhatIsVicoView;
