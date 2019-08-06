import React, {Fragment} from 'react';
import PropTypes from "prop-types"

const Source = ({ handleChange, step, text }) => {
  if (step !== 1) {
    return null
  }
  return(
    <Fragment>
      <div>
        <label htmlFor="source">Source:</label>
        <input
          className="form-control"
          id="source"
          name="source"
          onChange={handleChange}
          placeholder="Source path"
          type="text"
          value={text}
        />
      </div>
      <div className="formActionBar" />
    </Fragment>
  );
}

Source.propTypes = {
  handleChange: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Source;

