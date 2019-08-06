import React, {Fragment} from 'react';
import PropTypes from 'prop-types'

const Schedule = ({ handleChange, step, text }) => {
  if (step !== 4) {
    return null
  }
  return(
    <Fragment>
      <div>
        <label htmlFor="schedule">Time:</label>
        <input
          className="form-control"
          id="schedule"
          name="schedule"
          onChange={handleChange}
          placeholder="Enter time"
          type="text"
          value={text}
        />
      </div>
      <div className="formActionBar">
        <button className="buttonSave">Save</button>
      </div>
    </Fragment>
  );
}

Schedule.propTypes = {
  handleChange: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Schedule
