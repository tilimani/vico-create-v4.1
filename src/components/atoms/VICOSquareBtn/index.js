import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import theme from "../../../common/theme";

const useStyles = makeStyles(() => ({
  active: {
    backgroundColor: "white",
    boxShadow: `0px 2px 4px ${theme.palette.primary.main}`,
    color: theme.palette.primary.main
  }
}));
const SquareButton = withStyles({
  root: {
    boxShadow: "0px 2px 4px #C4C4C4",
    textTransform: "none",
    fontSize: 18,
    padding: "6px 12px",
    border: "none",
    backgroundColor: "white",
    height: 80,
    width: 88,
    borderRadius: 12,
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
  const { text, icon, active } = props;
  return (
    <SquareButton className={active && classes.active}>
      {text && text} {icon && <img src={icon} alt="icon" />}
    </SquareButton>
  );
};

export default VICOSquareBtn;
