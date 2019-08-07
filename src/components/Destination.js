import React, {Fragment} from 'react';
import PropTypes from "prop-types"

const Destination = ({ handleChange, step, stepOrder, text }) => {
  if (step !== stepOrder) {
    return null
  }
  return(
    <Fragment>
      <div>
        <label htmlFor="destination">Destination:</label>
        <input
          className="formControl"
          id="destination"
          name="destination"
          onChange={handleChange}
          placeholder="Destination path"
          type="text"
          value={text}
        />
      </div>
      <div className="formActionPanel" />
    </Fragment>
  );
}

Destination.propTypes = {
  handleChange: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  stepOrder: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Destination
