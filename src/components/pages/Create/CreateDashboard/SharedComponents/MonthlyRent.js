import React from "react";
import { makeStyles } from "@material-ui/core";
import RadioGroup from "@material-ui/core/RadioGroup";

import VICOTextField from "../../../../atoms/VICOTextField";
import VICORadioButton from "../../../../atoms/VICORadioButton";
import VICOSwitch from "../../../../atoms/VICOSwitch";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 20,
    color: theme.palette.secondary.main,
    fontWeight: "bold"
  },
  question: {
    marginTop: 40
  },
  questionTitle: {
    fontSize: 16,
    color: theme.palette.secondary.main,
    fontWeight: "bold"
  },
  questionDescription: {
    fontSize: 16,
    color: theme.palette.secondary.main
  },
  responseWrapper: {
    display: "flex",
    marginTop: 20
  },
  response: {
    marginRight: 20
  },

  TextAreaResponseWrapper: {
    marginTop: 20
  },
  additionalDescription: {
    display: "flex",
    flexDirection: "column"
  },
  infoItem: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 20
  },
  receivedAmount: {
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.53)",
    fontWeight: "bold"
  },
  commission: {
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.53)"
  },
  commissionDescription: {
    fontSize: 13,
    color: "rgba(0, 0, 0, 0.53)",
    marginTop: 30
  },
  titleWithSwitch: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  secondTitle: {
    marginTop: 100
  }
}));

const MonthlyRent = (props) => {
  const classes = useStyles();

  const {
    monthlyRentCost,
    couplePrice,
    smartPriceActive,
    setMonthlyRentCost,
    setCouplePrice,
    setSmartPriceActive
  } = props;
  return (
    <>
      <div className={classes.secondTitle}>
        <span className={classes.title}>Alquiler mensual</span>
      </div>

      {/** QUESTION 6 */}
      <div className={classes.question}>
        <span className={classes.questionTitle}>
          ¿Cuánto es el alquiler mensual por esta habitación?
        </span>
        <p className={classes.questionDescription}>Precio individual</p>
        <div className={classes.TextAreaResponseWrapper}>
          <VICOTextField
            placeholder="$1.000.000 COPxmes"
            value={monthlyRentCost}
            onChange={setMonthlyRentCost}
          />
        </div>

        <div className={classes.additionalDescription}>
          <div className={classes.infoItem}>
            <span className={classes.receivedAmount}>Tu recibes:</span>
            <span className={classes.receivedAmount}>560.000 COP</span>
          </div>
          <div className={classes.infoItem}>
            <span className={classes.commission}>Comisión mensual (7%):</span>
            <span className={classes.commission}>140.000 COP</span>
          </div>
          <p className={classes.commissionDescription}>
            "El valor de la comisión es de $560 mensual (7% de la renta
            mensual), el cuál solo se cobrará cuando se complete una
            intermediación y su habitación sea alquilada a través de VICO."
          </p>
        </div>
      </div>

      {/** QUESTION 7 */}
      <div className={classes.question}>
        <span className={classes.questionTitle}>Precio por pareja</span>
        <p className={classes.questionDescription}>
          ¿Cual es el valor extra sobre el alquiler cobras por una pareja?
        </p>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={couplePrice}
          onChange={setCouplePrice}
        >
          <div className={classes.responseWrapper}>
            <div className={classes.response}>
              <VICORadioButton label="Sin costo" value="Sin costo" />
            </div>
            <div className={classes.response}>
              <VICORadioButton label="+100.000 COP" value="+100.000 COP" />
            </div>
            <div className={classes.response}>
              <VICORadioButton label="+200.000 COP" value="+200.000 COP" />
            </div>
            <div className={classes.response}>
              <VICORadioButton label="No se permite" value="No se permite" />
            </div>
          </div>
        </RadioGroup>
      </div>

      {/** QUESTION 8 */}
      <div className={classes.question}>
        <div className={classes.titleWithSwitch}>
          <span className={classes.questionTitle}>Precios inteligentes</span>
          <VICOSwitch
            checked={smartPriceActive}
            handleChange={setSmartPriceActive}
          />
        </div>
        <p className={classes.questionDescription}>
          En base a tus precios optimizamos el precio de tus habitaciones según
          la demanda de tu VICO.
        </p>
      </div>
    </>
  );
};

export default MonthlyRent;
