import React from "react";
import { makeStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import VICOYesNoBtn from "../../../atoms/VICOYesNoBtn";
import VICORadioButton from "../../../atoms/VICORadioButton";
import theme from "../../../../common/theme";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 20,
    color: theme.palette.secondary.main,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 16,
    color: theme.palette.secondary.main
  },
  yesNoBtnsWrapper: {
    position: "relative",
    width: "50%",
    display: "flex",
    justifyContent: "space-between",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "80%"
    }
  },
  numericValue: { fontSize: 16, color: theme.palette.secondary.main },
  handleNumericValueWrapper: {
    position: "relative",
    width: "50%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "auto",
    marginTop: 40,
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    }
  }
}));

const PlusButton = withStyles({
  root: {
    boxShadow: "0px 2px 4px #C4C4C4",
    border: "none",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "white",
      boxShadow: `0px 2px 4px ${theme.palette.primary.main}`,
      color: theme.palette.primary.main
    },
    "&:active": {
      boxShadow: `0px 2px 4px ${theme.palette.primary.main}`,
      backgroundColor: "white",
      color: theme.palette.primary.main
    },
    "&:focus": {
      boxShadow: `0px 2px 4px ${theme.palette.primary.main}`,
      color: theme.palette.primary.main
    }
  }
})(IconButton);

const BasicInfoItem = (props) => {
  const classes = useStyles();
  const { title, subtitle, numericValue, action, yesNoQuestion, value } = props;
  return (
    <div>
      <span className={classes.title}>{title}</span>
      <p className={classes.subtitle}>{subtitle}</p>
      {yesNoQuestion ? (
        <div className={classes.yesNoBtnsWrapper}>
          <VICORadioButton
            label="Si"
            value="Si"
            checked={value === true}
            onChange={() => action(true)}
          />
          <VICORadioButton
            label="No"
            value="No"
            checked={value === false}
            onChange={() => action(false)}
          />
        </div>
      ) : (
        <div className={classes.handleNumericValueWrapper}>
          <PlusButton
            onClick={() => {
              if (numericValue > 1) {
                action(numericValue - 1);
              }
            }}
          >
            <RemoveIcon />
          </PlusButton>
          <span className={classes.numericValue}>{numericValue}</span>
          <PlusButton onClick={() => action(numericValue + 1)}>
            <AddIcon />
          </PlusButton>
        </div>
      )}
    </div>
  );
};

export default BasicInfoItem;
