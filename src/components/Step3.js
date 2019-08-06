import React, {Fragment} from 'react';
import PropTypes from 'prop-types'

const Step3 = ({ handleChange, step, text }) => {
  if (step !== 3) {
    return null
  }
  return(
    <Fragment>
      <div>
        <label htmlFor="text3">Text 3:</label>
        <input
          className="form-control"
          id="text3"
          name="text3"
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

Step3.propTypes = {
  handleChange: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Step3
