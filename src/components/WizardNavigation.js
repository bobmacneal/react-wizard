import React from 'react';
import PropTypes from 'prop-types'

const WizardNavigation = ({onNextStep, onPreviousStep, step, totalSteps}) => {
  const renderPreviousButton = () => {
    if (step === 1) {
      return (
        <button
          children="Previous"
          className="buttonStepDisabled"
          disabled
          type="button"
        />
      )

    }
    else if(step !== 1){
      return (
        <button
          children="Previous"
          className="buttonStep"
          type="button"
          onClick={() => onPreviousStep()}
        />
      )
    } else {return null}
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
    } else if (step === totalSteps) {
      return (
        <button
          children="Next"
          className="buttonStepDisabled"
          disabled
          type="button"
        />
      )
    } else {return null}
  }

  return (
    <div className="navigationPanel">
      <div className="col">{renderPreviousButton()}</div>
      <div className="col" />
      <div className="col" style={{textAlign: 'right'}}>{renderNextButton()}</div>
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
