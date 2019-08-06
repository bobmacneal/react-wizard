import React, {Fragment} from 'react';
import PropTypes from "prop-types"

const Step2 = ({ handleChange, username, step }) => {
  if (step !== 2) {
    return null
  }
  return(
    <Fragment>
      <div>
        <label htmlFor="username">Username</label>
        <input
          className="form-control"
          id="username"
          name="username"
          onChange={handleChange}
          placeholder="Enter username"
          type="text"
          value={username}
        />
      </div>
      <div className="formActionBar" />
    </Fragment>
  );
}

Step2.propTypes = {
  handleChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
};

export default Step2
