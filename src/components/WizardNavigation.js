import React from 'react';
import PropTypes from 'prop-types'

const WizardNavigation = ({onNextStep, onPreviousStep, step, totalSteps}) => {
  const renderPreviousButton = () =>{
    if(step !== 1){
      return (
        <button
          children="Previous"
          className="buttonStep"
          type="button"
          onClick={() => onPreviousStep()}
        />
      )
    }
    return null;
  }

  const renderNextButton = () =>{
    if(step < totalSteps){
      return (
        <button
          children="Next"
          className="buttonStep"
          type="button"
          onClick={() => onNextStep()}
        />
      )
    }
    return null;
  }

  return (
    <div className="flex-grid-thirds">
      <div className="col">{renderPreviousButton()}</div>
      <div className="col" />
      <div className="col">{renderNextButton()}</div>
    </div>
  )
}

WizardNavigation.propTypes = {
  onNextStep: PropTypes.func.isRequired,
  onPreviousStep: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired,
};


export default WizardNavigation
