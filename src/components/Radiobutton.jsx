
import PropTypes from "prop-types";
import { useState } from "react";

function Radiobutton(props) {
  const id = props.id;
  const value = props.value;
  const type = props.type;
  const name = props.name;
  const handleChange = props.handleChange;
  const formData = props.formData;
  
  

  return (
    <>
      <li>
        <input id={id} type={type} name={name} value={value} checked={formData.color === value} onChange={handleChange}/>
        <label htmlFor={id}>{value}</label>
      </li>
    </>
  );
}

export default Radiobutton;

Radiobutton.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  formData: PropTypes.object,
  type: PropTypes.string,
  name: PropTypes.string
};
