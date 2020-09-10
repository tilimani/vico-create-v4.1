import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles, Input } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  input: {
    width: 311,
    height: 70,
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: 6,
    paddingLeft: 20,
    paddingTop: 20
  },
  codeLabel: {
    fontSize: 16,
    color: theme.palette.secondary.main
  },
  numbersWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

const CustomTextField = withStyles((theme) => ({
  input: {
    borderBottom: "2px solid #C4C4C4",
    paddingLeft: 20,
    marginRight: 10,
    width: 24
  }
}))(Input);

const VICOCodeInput = () => {
  const classes = useStyles();
  return (
    <div className={classes.input}>
      <span className={classes.codeLabel}>Código</span>
      <div className={classes.numbersWrapper}>
        <CustomTextField
          type="number"
          InputLabelProps={{
            shrink: true
          }}
        />
        <CustomTextField
          type="number"
          InputLabelProps={{
            shrink: true
          }}
        />
        <CustomTextField
          type="number"
          InputLabelProps={{
            shrink: true
          }}
        />
        <CustomTextField
          type="number"
          InputLabelProps={{
            shrink: true
          }}
        />
      </div>
    </div>
  );
};

export default VICOCodeInput;
