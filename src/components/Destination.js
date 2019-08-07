import React, {Fragment, useEffect, useRef} from 'react';
import PropTypes from "prop-types"

const Destination = ({ handleChange, step, stepOrder, text }) => {
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
        <label htmlFor="destination">Destination:</label>
        <input
          className="formControl"
          id="destination"
          name="destination"
          onChange={handleChange}
          placeholder="Destination path"
          ref={textInput}
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
