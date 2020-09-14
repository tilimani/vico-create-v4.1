import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import theme from "../../../common/theme";
import clsx from "clsx";
import "./index.css";
const useStyles = makeStyles(() => ({
  active: {
    backgroundColor: "#EF8E01 !important",
    boxShadow: `0px 2px 4px ${theme.palette.primary.main} !important`,
    color: "white"
  },
  primary: {
    backgroundColor: theme.palette.primary.main
  }
}));
const SquareButton = withStyles({
  root: {
    boxShadow: "0px 2px 4px #C4C4C4",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "none",
    backgroundColor: "white",
    height: 80,
    width: 88,
    borderRadius: 12,
    lineHeight: 1,
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
})(Button);

const VICOSquareBtn = (props) => {
  const classes = useStyles();
  const { text, icon, active, color, action, selected } = props;
  return (
    <SquareButton
      className={active || selected ? clsx(classes.active, "active") : null}
      style={color && color === "primary" ? { backgroundColor: "#EF8E01" } : {}}
      onClick={action && action}
    >
      {text && text} {icon && <img src={icon} alt="icon" />}
    </SquareButton>
  );
};

export default VICOSquareBtn;
