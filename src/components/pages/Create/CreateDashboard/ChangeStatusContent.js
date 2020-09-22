import React from "react";
import { makeStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import VICOButton from "../../../atoms/VICOButton";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "46px 20px 20px"
  },
  legend: {
    color: theme.palette.secondary.main,
    fontSize: 20,
    fontWeight: "bold"
  },
  radioComponents: {
    marginTop: 16,
    marginBottom: 16
  },
  radioLabel: {
    color: theme.palette.secondary.main,
    fontSize: 16
  }
}));

const GreenRadio = withStyles({
  root: {
    //color: green[400],
    "&$checked": {
      color: "#07A529"
    }
  },
  checked: {}
})((props) => <Radio color="default" {...props} />);

const GrayRadio = withStyles({
  root: {
    //color: green[400],
    "&$checked": {
      color: "#C4C4C4"
    }
  },
  checked: {}
})((props) => <Radio color="default" {...props} />);

const RedRadio = withStyles({
  root: {
    //color: green[400],
    "&$checked": {
      color: "#EA3131"
    }
  },
  checked: {}
})((props) => <Radio color="default" {...props} />);

const ChangeStatusContent = (props) => {
  const classes = useStyles();

  const { status, setStatus } = props;

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div className={classes.container}>
      <FormControl component="fieldset">
        <FormLabel component="legend">
          <span className={classes.legend}>Status de tu VICO</span>
        </FormLabel>
        <div className={classes.radioComponents}>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={status}
            onChange={handleChange}
          >
            <FormControlLabel
              value="En linea"
              control={<GreenRadio />}
              label={<span className={classes.radioLabel}>En linea</span>}
            />
            <FormControlLabel
              value="Fuera de linea"
              control={<GrayRadio />}
              label={<span className={classes.radioLabel}>Fuera de linea</span>}
            />
            <FormControlLabel
              value="Pendiente"
              control={<RedRadio />}
              label={<span className={classes.radioLabel}>Pendiente</span>}
            />
          </RadioGroup>
        </div>
      </FormControl>
      <VICOButton
        onClick={props.close}
        variant="contained"
        color="primary"
        text="Guardar"
        style={{
          width: 267
          //marginTop: 46
        }}
      />
    </div>
  );
};

export default ChangeStatusContent;
