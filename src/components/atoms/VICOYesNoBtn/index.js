import React from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import theme from "../../../common/theme";

const SquareButton = withStyles({
  root: {
    boxShadow: "0px 2px 4px #C4C4C4",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "none",
    backgroundColor: "white",
    height: 58,
    width: 50,
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

const VICOYesNoBtn = (props) => {
  const { text } = props;
  return <SquareButton>{text}</SquareButton>;
};

export default VICOYesNoBtn;
