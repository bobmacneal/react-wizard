import React, {Fragment} from 'react';
import PropTypes from 'prop-types'

const Schedule = ({ handleChange, step, stepOrder, text }) => {
  if (step !== stepOrder) {
    return null
  }
  return(
    <Fragment>
      <div>
        <label htmlFor="schedule">Schedule:</label>
        <input
          className="formControl"
          id="schedule"
          name="schedule"
          onChange={handleChange}
          placeholder="Enter time"
          type="text"
          value={text}
        />
      </div>
      <div className="formActionPanel">
        <button className="buttonSave">Save</button>
      </div>
    </Fragment>
  );
}

Schedule.propTypes = {
  handleChange: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  stepOrder: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Schedule
