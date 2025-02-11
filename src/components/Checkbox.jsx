
import PropTypes from "prop-types";
import { useState } from "react";

function Checkbox(props) {
  const name = props.name;
  const value = props.value;
  const type = props.type;
  const description = props.description;
  const handleChange = props.handleChange;

  return (
    <>
      <li>
        <label>
          <input name={name} type={type} checked={value} value={value} onChange={handleChange}/>
          {description}
        </label>
      </li>
    </>
  );
}

export default Checkbox;

Checkbox.propTypes = {
  value: PropTypes.bool,
  name: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
  handleChange: PropTypes.func
};
