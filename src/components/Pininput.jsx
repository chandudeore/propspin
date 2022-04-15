import React, { forwardRef } from "react";
import PropsTypes from "prop-types";

const style = {
  padding: 10,
  width: 15,
  fontSize: 15,
  margin: 5,
};

export const Pininput = forwardRef(({ max, onChange, onBackspace }, ref) => {
  const handlekey = (e) => {
    switch (e.keyCode) {
      case 8: {
        if (!e.target.value) onBackspace(e.target.value);
        break;
      }
      case 9: {
        e.preventDefault();
        break;
      }
      default: {
        onChange(e.target.value);
      }
    }
  };
  return (
    <>
      <input onKeyUp={handlekey} maxLength={max} style={style} ref={ref} />
    </>
  );
});

Pininput.propTypes = {
  max: PropsTypes.number,
  onchange: PropsTypes.func,
  onBackspace: PropsTypes.func,
};

Pininput.defaultProps = {
  label: "Label",
  max: 1,
};
