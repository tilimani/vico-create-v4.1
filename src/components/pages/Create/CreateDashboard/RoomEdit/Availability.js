import React from "react";
import clsx from "clsx";

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
  sliderResponseWrapper: {
    marginTop: 50
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
        //props.history.push("/create/dashboard/1")
      }}
      save={() => {
        //props.history.push("/create/dashboard/1/services")
      }}
    >
      <div className={classes.drawerContent}>
        <Availability />
      </div>
    </RightDrawerScaffold>
  );
};

export default Availability;
