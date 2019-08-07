import React, {Fragment} from 'react';
import PropTypes from "prop-types"

const Source = ({ handleChange, step, stepOrder, text }) => {
  if (step !== stepOrder) {
    return null
  }
  return(
    <Fragment>
      <div>
        <label htmlFor="source">Source:</label>
        <input
          className="formControl"
          id="source"
          name="source"
          onChange={handleChange}
          placeholder="Source path"
          type="text"
          value={text}
        />
      </div>
      <div className="formActionPanel" />
    </Fragment>
  );
}

Source.propTypes = {
  handleChange: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  stepOrder: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Source;

