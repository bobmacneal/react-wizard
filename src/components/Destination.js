import React, {Fragment} from 'react';
import PropTypes from "prop-types"

const Destination = ({ handleChange, step, text }) => {
  if (step !== 2) {
    return null
  }
  return(
    <Fragment>
      <div>
        <label htmlFor="destination">Destination:</label>
        <input
          className="form-control"
          id="destination"
          name="destination"
          onChange={handleChange}
          placeholder="Destination path"
          type="text"
          value={text}
        />
      </div>
      <div className="formActionBar" />
    </Fragment>
  );
}

Destination.propTypes = {
  handleChange: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Destination
