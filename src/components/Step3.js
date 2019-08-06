import React, {Fragment} from 'react';
import PropTypes from 'prop-types'

const Step3 = ({ handleChange, step, text }) => {
  if (step !== 3) {
    return null
  }
  return(
    <Fragment>
      <div>
        <label htmlFor="secret">Secret:</label>
        <input
          className="form-control"
          id="secret"
          name="secret"
          onChange={handleChange}
          placeholder="Enter secret"
          type="password"
          value={text}
        />
      </div>
      <div className="formActionBar">
        <button className="buttonSave">Save</button>
      </div>
    </Fragment>
  );
}

Step3.propTypes = {
  handleChange: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Step3
