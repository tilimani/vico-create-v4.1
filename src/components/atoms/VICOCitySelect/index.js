import React, { useState } from "react";
import VICOSelect from "../VICOSelect";


function VICOCitySelect(props) {
  const [city, setCity] = useState("");
  const cityOptions = [
    { value: "medellin", label: "Medellín" },
    { value: "bogota", label: "Bogotá" }
  ];
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  return (
        <VICOSelect
          {...props}
          disableUnderline={true}
          options={cityOptions}
          value={city}
          onChange={handleCityChange}
        />
  );
}

export default VICOCitySelect;
