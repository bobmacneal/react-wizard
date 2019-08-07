import React, {Fragment} from 'react';
import PropTypes from 'prop-types'

const Task = ({ handleChange, step, stepOrder, text }) => {
  if (step !== stepOrder) {
    return null
  }
  return(
    <Fragment>
      <div>
        <label htmlFor="taskName">Task:</label>
        <input
          className="formControl"
          id="taskName"
          name="taskName"
          onChange={handleChange}
          placeholder="Task name"
          type="text"
          value={text}
        />
      </div>
      <div className="formActionPanel" />
    </Fragment>
  );
}

Task.propTypes = {
  handleChange: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  stepOrder: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Task
