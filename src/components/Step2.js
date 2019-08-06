import React, {Fragment} from 'react';
import PropTypes from "prop-types"

const Step2 = ({ handleChange, step, text }) => {
  if (step !== 2) {
    return null
  }
  return(
    <Fragment>
      <div>
        <label htmlFor="text2">Text 2:</label>
        <input
          className="form-control"
          id="text2"
          name="text2"
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

Step2.propTypes = {
  handleChange: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Step2
