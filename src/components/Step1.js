import React, {Fragment} from 'react';
import PropTypes from "prop-types"

const Step1 = ({ handleChange, email, step }) => {
  if (step !== 1) {
    return null
  }
  return(
    <Fragment>
      <div>
        <label htmlFor="email">Email</label>
        <input
          className="form-control"
          id="email"
          name="email"
          onChange={handleChange}
          placeholder="Enter email"
          type="text"
          value={email}
        />
      </div>
      <div className="formActionBar" />
    </Fragment>

  );
}

Step1.propTypes = {
  handleChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
};

export default Step1;

