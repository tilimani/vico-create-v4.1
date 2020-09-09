import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "date-fns";

import DatePicker from "react-datepicker";
import Button from "@material-ui/core/Button";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import "react-datepicker/dist/react-datepicker.css";

import "./index.css";

const useStyles = makeStyles((theme) => ({
  calendar: {
    color: theme.palette.secondary.light
  },
  custom_input: {
    position: "relative",
    width: "100%",
    height: "100%",
    color: theme.palette.secondary.light,
    fontSize: 16,
    backgroundColor: "white",
    borderRadius: 12
  }
}));

const VICOCalendar = ({ date, setDate }) => {
  const [selectedDate, setSelectedDate] = useState(date);

  const [isOpen, setIsOpen] = useState(false);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setDate(date);
  };

  const classes = useStyles();
  const CustomInput = ({ value, onClick }) => (
    <Button
      startIcon={<DateRangeOutlinedIcon />}
      className={`${classes.custom_input} custom_input`}
      onClick={onClick}
    >
      {value}
    </Button>
  );
  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      customInput={<CustomInput />}
    />
  );
};

export default VICOCalendar;
