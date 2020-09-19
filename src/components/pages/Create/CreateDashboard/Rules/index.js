import React from "react";

import { makeStyles } from "@material-ui/core";

import { CreateContext } from "../../../../../common/context";

import RightDrawerScaffold from "../RightDrawerScaffold";
import VICORadioButton from "../../../../atoms/VICORadioButton";
import VICOSlider from "../../../../atoms/VICOSlider";
import VICOTextField from "../../../../atoms/VICOTextField";
import VICOSwitch from "../../../../atoms/VICOSwitch";
import VICOButton from "../../../../atoms/VICOButton";

const useStyles = makeStyles((theme) => ({
  drawerContent: {
    width: 400,
    flexShrink: 0,
    marginTop: 40,
    margin: "30px 70px",
    [theme.breakpoints.down("xs")]: {
      width: "auto"
    }
  },
  innerContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
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
    marginTop: 20,
    flexWrap: "wrap"
  },
  response: {
    marginRight: 20,
    marginTop: 20
  },
  sliderResponseWrapper: {
    marginTop: 50,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center"
    }
  },
  yesNoResponseWrapper: {
    marginTop: 40,
    display: "flex",
    justifyContent: "space-around"
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
  },
  continueBtnWrapper: {
    textAlign: "center"
  }
}));

const Rules = (props) => {
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
  const isContinueBtnDisabled =
    !rules.minimumStay ||
    !rules.costGuestPerNight ||
    !rules.depositDiscount ||
    !rules.cleaningIncluded ||
    (!isSharedHouse && !rules.monthlyRentCost) ||
    (!isSharedHouse && !rules.couplePrice);
  return (
    <RightDrawerScaffold
      close={() => {
        props.history.push("/create/dashboard/1");
      }}
      save={() => {
        //props.history.push("/create/dashboard/1/services")
      }}
    >
      <div className={classes.innerContent}>
        <div className={classes.drawerContent}>
          <span className={classes.title}>Normas de la VICO</span>

          {/** QUESTION 1 : Required */}
          <div className={classes.question}>
            <span className={classes.questionTitle}>1. Estadía mínima</span>
            <p className={classes.questionDescription}>
              La mayoría de las personas se quedan entre 4 y 12 meses. Sin
              embargo, recomendamos una estancia mínima de un mes para evitar
              barreras al momento de realizar las reservas.
            </p>
            <div className={classes.responseWrapper}>
              <div className={classes.response}>
                <VICORadioButton
                  label="1 mes"
                  value={1}
                  checked={rules.minimumStay == 1}
                  onChange={(event) => {
                    setRules({
                      ...rules,
                      minimumStay: event.target.value
                    });
                  }}
                />
              </div>
              <div className={classes.response}>
                <VICORadioButton
                  label="3 meses"
                  value={3}
                  checked={rules.minimumStay == 3}
                  onChange={(event) => {
                    setRules({
                      ...rules,
                      minimumStay: event.target.value
                    });
                  }}
                />
              </div>
              <div className={classes.response}>
                <VICORadioButton
                  label="6 meses"
                  value={6}
                  checked={rules.minimumStay == 6}
                  onChange={(event) => {
                    setRules({
                      ...rules,
                      minimumStay: event.target.value
                    });
                  }}
                />
              </div>
            </div>
          </div>
          {/** QUESTION 2 : Required */}

          <div className={classes.question}>
            <span className={classes.questionTitle}>
              2. Costo por huésped adicional (por noche):
            </span>
            <p className={classes.questionDescription}>
              Nuestra recomendación es $20.000 COP
            </p>
            <div className={classes.responseWrapper}>
              <div className={classes.response}>
                <VICORadioButton
                  label="Sin costo"
                  value="Sin costo"
                  checked={rules.costGuestPerNight === "Sin costo"}
                  onChange={(event) => {
                    setRules({
                      ...rules,
                      costGuestPerNight: event.target.value
                    });
                  }}
                />
              </div>
              <div className={classes.response}>
                <VICORadioButton
                  label="$10.000 COP"
                  value="$10.000 COP"
                  checked={rules.costGuestPerNight === "$10.000 COP"}
                  onChange={(event) => {
                    setRules({
                      ...rules,
                      costGuestPerNight: event.target.value
                    });
                  }}
                />
              </div>
              <div className={classes.response}>
                <VICORadioButton
                  label="$20.000 COP"
                  value="$20.000 COP"
                  checked={rules.costGuestPerNight === "$20.000 COP"}
                  onChange={(event) => {
                    setRules({
                      ...rules,
                      costGuestPerNight: event.target.value
                    });
                  }}
                />
              </div>
              <div className={classes.response}>
                <VICORadioButton
                  label="Otro"
                  value="Otro"
                  checked={rules.costGuestPerNight === "Otro"}
                  onChange={(event) => {
                    setRules({
                      ...rules,
                      costGuestPerNight: event.target.value
                    });
                  }}
                />
              </div>
            </div>
          </div>

          {/** QUESTION 3: Required */}
          <div className={classes.question}>
            <span className={classes.questionTitle}>3. Valor del depósito</span>
            <p className={classes.questionDescription}>
              El valor final del depósito depende totalmente de ti. Selecciona
              un porcentaje, siendo 100% el valor de una (1) alquiler mensual.
            </p>
            <div className={classes.sliderResponseWrapper}>
              <VICOSlider
                value={rules.depositDiscount}
                setDeposit={(value) => {
                  setRules({
                    ...rules,
                    depositDiscount: value
                  });
                }}
              />
            </div>
          </div>

          {/** QUESTION 4 : Required */}
          <div className={classes.question}>
            <span className={classes.questionTitle}>
              4. ¿Está incluido el servicio de aseo?
            </span>
            <p className={classes.questionDescription}>
              Nos referimos al aseo total de las zonas sociales y se realizara
              minimo cada 15 días.
            </p>
            <div className={classes.yesNoResponseWrapper}>
              <div className={classes.response}>
                <VICORadioButton
                  label="Si"
                  value="true"
                  checked={rules.cleaningIncluded === "true"}
                  onChange={(event) => {
                    setRules({
                      ...rules,
                      cleaningIncluded: event.target.value
                    });
                  }}
                />
              </div>
              <div className={classes.response}>
                <VICORadioButton
                  label="No"
                  value={false}
                  checked={rules.cleaningIncluded === "false"}
                  onChange={(event) => {
                    setRules({
                      ...rules,
                      cleaningIncluded: event.target.value
                    });
                  }}
                />
              </div>
            </div>
          </div>
          {/** QUESTION 5: Optional */}
          <div className={classes.question}>
            <span className={classes.questionTitle}>5. Reglas adicionales</span>
            <div className={classes.TextAreaResponseWrapper}>
              <VICOTextField
                multiline
                rows={4}
                placeholder="Ejemplo: No se permite fumar dentro de la casa"
                value={rules.additionalRulesDescription}
                onChange={(event) => {
                  setRules({
                    ...rules,
                    additionalRulesDescription: event.target.value
                  });
                }}
              />
            </div>
          </div>
          {(house.type === "private" || house.type === "studio") && (
            /** MonthlyRentComponent */
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
                    value={rules.monthlyRentCost}
                    onChange={(event) => {
                      setRules({
                        ...rules,
                        monthlyRentCost: event.target.value
                      });
                    }}
                  />
                </div>

                <div className={classes.additionalDescription}>
                  <div className={classes.infoItem}>
                    <span className={classes.receivedAmount}>Tu recibes:</span>
                    <span className={classes.receivedAmount}>560.000 COP</span>
                  </div>
                  <div className={classes.infoItem}>
                    <span className={classes.commission}>
                      Comisión mensual (7%):
                    </span>
                    <span className={classes.commission}>140.000 COP</span>
                  </div>
                  <p className={classes.commissionDescription}>
                    "El valor de la comisión es de $560 mensual (7% de la renta
                    mensual), el cuál solo se cobrará cuando se complete una
                    intermediación y su habitación sea alquilada a través de
                    VICO."
                  </p>
                </div>
              </div>

              {/** QUESTION 7 */}
              <div className={classes.question}>
                <span className={classes.questionTitle}>Precio por pareja</span>
                <p className={classes.questionDescription}>
                  ¿Cual es el valor extra sobre el alquiler cobras por una
                  pareja?
                </p>
                <div className={classes.responseWrapper}>
                  <div className={classes.response}>
                    <VICORadioButton
                      label="Sin costo"
                      value="Sin costo"
                      checked={rules.couplePrice === "Sin costo"}
                      onChange={(event) => {
                        setRules({
                          ...rules,
                          couplePrice: event.target.value
                        });
                      }}
                    />
                  </div>
                  <div className={classes.response}>
                    <VICORadioButton
                      label="+100.000 COP"
                      value="+100.000 COP"
                      checked={rules.couplePrice === "+100.000 COP"}
                      onChange={(event) => {
                        setRules({
                          ...rules,
                          couplePrice: event.target.value
                        });
                      }}
                    />
                  </div>
                  <div className={classes.response}>
                    <VICORadioButton
                      label="+200.000 COP"
                      value="+200.000 COP"
                      checked={rules.couplePrice === "+200.000 COP"}
                      onChange={(event) => {
                        setRules({
                          ...rules,
                          couplePrice: event.target.value
                        });
                      }}
                    />
                  </div>
                  <div className={classes.response}>
                    <VICORadioButton
                      label="No se permite"
                      value="No se permite"
                      checked={rules.couplePrice === "No se permite"}
                      onChange={(event) => {
                        setRules({
                          ...rules,
                          couplePrice: event.target.value
                        });
                      }}
                    />
                  </div>
                </div>
              </div>

              {/** QUESTION 8 */}
              <div className={classes.question}>
                <div className={classes.titleWithSwitch}>
                  <span className={classes.questionTitle}>
                    Precios inteligentes
                  </span>
                  <VICOSwitch
                    checked={rules.smartPriceActive}
                    handleChange={(event) => {
                      setRules({
                        ...rules,
                        smartPriceActive: event.target.checked
                      });
                    }}
                  />
                </div>
                <p className={classes.questionDescription}>
                  En base a tus precios optimizamos el precio de tus
                  habitaciones según la demanda de tu VICO.
                </p>
              </div>
            </>
          )}
          <div className={classes.continueBtnWrapper}>
            <VICOButton
              onClick={() => props.history.push("/create/dashboard/1/services")}
              disabled={isContinueBtnDisabled}
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
      </div>
    </RightDrawerScaffold>
  );
};

export default Rules;
