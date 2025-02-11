
import { useState } from "react";
import Checkbox from "./Checkbox";
import PropTypes from "prop-types";


function CheckboxList(props) {
  const handleChange = props.handleChange;
  const formData = props.formData;

  return (
    <>
      <ul>
        <Checkbox name="swimming" type="checkbox"  value={formData.swimming} description="Swimming" handleChange={handleChange}/>
        <Checkbox name="bathing" type="checkbox"  value={formData.bathing} description="Bathing" handleChange={handleChange}/>
        <Checkbox name="chatting" type="checkbox"  value={formData.chatting} description="Chatting" handleChange={handleChange}/>
        <Checkbox name="notime" type="checkbox" value={formData.notime} description="I don't like to spend time with it" handleChange={handleChange}/>
      </ul>
    </>
  );
}

export default CheckboxList;

CheckboxList.propTypes = {
  handleChange: PropTypes.func,
  formData: PropTypes.object
};
