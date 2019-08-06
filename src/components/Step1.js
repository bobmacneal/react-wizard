import React, {Fragment} from 'react';
import PropTypes from "prop-types"

const Step1 = ({ handleChange, step, text }) => {
  if (step !== 1) {
    return null
  }
  return(
    <Fragment>
      <div>
        <label htmlFor="text1">Text 1:</label>
        <input
          className="form-control"
          id="text1"
          name="text1"
          onChange={handleChange}
          placeholder="Enter text"
          type="text"
          value={text}
        />
      </div>
      <div className="formActionBar" />
    </Fragment>
  );
}

Step1.propTypes = {
  handleChange: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Step1;

