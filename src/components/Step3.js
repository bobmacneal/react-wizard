import React, {Fragment} from 'react';
import PropTypes from 'prop-types'


const Step3 = ({ handleChange, password, step }) => {
  if (step !== 3) {
    return null
  }
  return(
    <Fragment>
      <div>
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          id="password"
          name="password"
          onChange={handleChange}
          placeholder="Enter password"
          type="password"
          value={password}
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
  password: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
};

export default Step3
