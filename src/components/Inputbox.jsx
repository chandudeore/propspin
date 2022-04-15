import React, { useRef, useState } from "react";
import PropTypes, { number } from "prop-types";
import { Pininput } from "./Pininput";

export const Inputbox = ({ length, label, max, onChange }) => {
  const [values, setValues] = useState(new Array(length).fill(""));
  //console.log(values);
  const element = useRef(new Array(length).fill(0));

  const handleChange = (value, index) => {
    //console.log(value, index);
    const val = [...values];
    val[index] = value;
    setValues(val);
    if (values.length > 0 && value.length === max && index < length - 1) {
      element.current[index + 1]?.focus();
    }
    onChange(val.join(""));
  };
  const handleBackspace = (value, index) => {
    if (index > 0) {
      element.current[index - 1].focus();
    }
    const val = [...values];
    val[index] = value;
    setValues(val);
    onChange(val.join(""));
  };
  const handlePaste = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div onPaste={handlePaste}>
        <h1
          style={{
            color: "#f78490",
          }}
        >
          {label}
        </h1>
        {values.map((e, index) => (
          <Pininput
            key={index}
            max={max}
            ref={(n) => (element.current[index] = n)}
            onChange={(v) => handleChange(v, index)}
            onBackspace={(v) => handleBackspace(v, index)}
          />
        ))}
      </div>
    </>
  );
};

Inputbox.propTypes = {
  length: PropTypes.number.isRequired,
  label: PropTypes.string,
  max: PropTypes.number,
  onchange: PropTypes.func,
};

Inputbox.defaultProps = {
  label: "PinInput",
  max: 1,
};
