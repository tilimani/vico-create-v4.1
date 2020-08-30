import React from "react";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";

const CustomAutoComplete = withStyles((theme) => ({
  root: {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#fcfcfb",
    height: 58,
    paddingLeft: 20,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    "&:hover": {
      backgroundColor: "#fff",
      boxShadow: `0px 2px 4px ${theme.palette.primary.main}`,
      borderColor: theme.palette.primary.main
    },
    "&:active": {
      backgroundColor: "#fff",
      boxShadow: `0px 2px 4px ${theme.palette.primary.main}`,
      borderColor: theme.palette.primary.main
    },
    "&:focus": {
      backgroundColor: "#fff",
      boxShadow: `0px 2px 4px ${theme.palette.primary.main}`,
      borderColor: theme.palette.primary.main
    }
  },
  colorPrimary: {
    backgroundColor: "rgba(196, 196, 196, 0.51)"
  },
  barColorPrimary: {
    backgroundColor: "#07A529"
  }
}))(Autocomplete);

function VICOAutoComplete(props) {
  return (
    <CustomAutoComplete
      options={props.options}
      noOptionsText="No hay opciones"
      value={props.VICOAddress}
      onChange={(event, newValue) => {
        props.setVICOAddress(newValue);
      }}
      renderInput={(params) => (
        <TextField
          placeholder="Calle 33c  # 88a-115"
          label={props.label}
          {...params}
        />
      )}
    />
  );
}

export default VICOAutoComplete;
