
import PropTypes from "prop-types";

import { useState } from "react";
import Radiobutton from "./Radiobutton";


function RadiobuttonList(props) {
    const handleChange = props.handleChange;
    const formData = props.formData

    return (
    <>
      <ul>
        <Radiobutton id="color-one" type="radio" name="color" value="1"  handleChange={handleChange} formData={formData}/>
        <Radiobutton id="color-two" type="radio" name="color" value="2" handleChange={handleChange} formData={formData}/>
        <Radiobutton id="color-three" type="radio" name="color" value="3" handleChange={handleChange} formData={formData}/>
        <Radiobutton id="color-four" type="radio" name="color" value="4" handleChange={handleChange} formData={formData}/>
      </ul>
    </>
  );
}

export default RadiobuttonList;

RadiobuttonList.propTypes = {
  handleChange: PropTypes.func,
  formData: PropTypes.object
};