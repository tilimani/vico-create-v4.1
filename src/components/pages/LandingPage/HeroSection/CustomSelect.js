import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

//For styling a customized select with "react-select" lib
import chroma from "chroma-js";
import Select, { components } from "react-select";
import "./CustomSelect.css";

// Icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import SvgIcon from "@material-ui/core/SvgIcon";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const colors = {
  white: "#ffffff",
  darkGray: "",
  lightgray: "#BDBDBD",
  orange: "#EF8E01"
};

const useStyles = makeStyles(theme => ({
  expandMore_icon: {
    fontSize: 30,
    color: colors.lightgray
  },
  placeholder_text: { color: colors.lightgray, fontSize: 16 },
  option_icon: {
    fontSize: 16,
    marginRight: 5,
    paddingTop: 4
  }
}));

const selectedColor = chroma(colors.orange);
const customStyles = {
  option: (base, state) => ({
    ...base,
    color: state.isFocused
      ? colors.lightgray
      : state.isSelected
      ? colors.white
      : colors.lightgray,
    backgroundColor: state.isFocused
      ? selectedColor.alpha(0.2).css()
      : state.isSelected
      ? selectedColor.alpha(1).css()
      : colors.white,
    ":active": {
      backgroundColor:
        !state.isDisabled &&
        (state.isSelected ? selectedColor : selectedColor.alpha(0.2).css())
    }
  }),
  control: (base, state) => ({
    ...base,
    height: "100%",
    "&:hover": { borderColor: "gray" },
    border: "1px solid lightgray",
    borderRadius: 12,
    boxShadow: "none"
  }),
  valueContainer: base => ({
    ...base,
    paddingLeft: 12,
    color: colors.lightgray
  }),
  singleValue: base => ({
    ...base,
    color: colors.lightgray
  })
};
const CustomSelect = ({
  name,
  title,
  options,
  isSearchable,
  value,
  setValue
}) => {
  const [selectedOption, setSelectedOption] = useState(value);

  const classes = useStyles();

  const handleChange = value => {
    setSelectedOption(value);
    setValue(value.value);
  };

  const getIcon = isOption => {
    return name === "city" ? (
      <RoomOutlinedIcon className={isOption ? classes.option_icon : ""} />
    ) : (
      <HomeIcon className={isOption ? classes.option_icon : ""} />
    );
  };

  const DropdownIndicator = props => {
    return (
      components.DropdownIndicator &&
      !isSearchable && (
        <components.DropdownIndicator {...props}>
          <ExpandMoreIcon className={classes.expandMore_icon} />
        </components.DropdownIndicator>
      )
    );
  };

  const Option = props => (
    <components.Option {...props}>
      {getIcon(true)}
      <span>{props.data.label}</span>
    </components.Option>
  );

  const Placeholder = props => (
    <components.Placeholder {...props}>
      <span className={classes.placeholder_text}>{title}</span>
    </components.Placeholder>
  );

  const ValueContainer = ({ children, ...props }) => (
    <components.ValueContainer {...props}>
      {!!children && getIcon(false)}
      <span style={!!children && { marginLeft: 4 }}>{children}</span>
    </components.ValueContainer>
  );

  return (
    <Select
      className="custom_select_wrapper"
      isMulti={false}
      isSearchable={isSearchable}
      options={options}
      value={selectedOption}
      onChange={handleChange}
      styles={customStyles}
      components={{
        DropdownIndicator,
        IndicatorSeparator: () => null,
        Option,
        Placeholder,
        ValueContainer
      }}
    />
  );
};

export default CustomSelect;
