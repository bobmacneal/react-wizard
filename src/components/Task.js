import React, {Fragment} from 'react';
import PropTypes from 'prop-types'

const Task = ({ handleChange, step, text }) => {
  if (step !== 3) {
    return null
  }
  return(
    <Fragment>
      <div>
        <label htmlFor="taskName">Task:</label>
        <input
          className="form-control"
          id="taskName"
          name="taskName"
          onChange={handleChange}
          placeholder="Task name"
          type="text"
          value={text}
        />
      </div>
      <div className="formActionBar" />
    </Fragment>
  );
}

Task.propTypes = {
  handleChange: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Task
