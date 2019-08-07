import React, {Fragment, useEffect, useRef} from 'react';
import PropTypes from 'prop-types'

const Task = ({ handleChange, step, stepOrder, text }) => {
  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

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
          ref={textInput}
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
