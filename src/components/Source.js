import React, {Fragment, useEffect, useRef} from 'react';
import PropTypes from "prop-types"

const Source = ({ handleChange, step, stepOrder, text }) => {
  const textRef = useRef(null);

  useEffect(() => {
    textRef.current.focus();
  }, []);

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
          ref={textRef}
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

