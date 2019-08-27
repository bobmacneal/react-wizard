import React, {useContext} from 'react';
import styled from 'styled-components'
import {WizardContext} from "./WizardContext";

const Section = styled.section`
  border-top: solid 1px whitesmoke;
  display: flex;
  justify-content: space-between;
  width: 30%;
`
const Column = styled.div`
  width: 32%;
`
const StepNavigator = () => {
  const [state, setState] = useContext(WizardContext)
  const {activeStep, steps} = state
  const totalSteps = steps.length || 0

  const handleClickNext = () => {
    const currentStep = activeStep >= totalSteps - 1 ? totalSteps: activeStep + 1
    updateActiveStep(currentStep)
  }

  const handleClickPrevious = ()  => {
    const currentStep = activeStep <= 1 ? 1: activeStep - 1
    updateActiveStep(currentStep)
  }

  const updateActiveStep = (activeStep)  => {
    setState(prevState => {
      return { ...prevState, activeStep }
    })
  }

  const renderPrevButton = () => {
    if (activeStep === 1) {
      return (
        <button
          children="Previous"
          className="buttonStepDisabled"
          disabled
          type="button"
        />
      )

    }
    else if(activeStep !== 1){
      return (
        <button
          children="Previous"
          className="buttonStep"
          type="button"
          onClick={() => handleClickPrevious()}
        />
      )
    } else {return null}
  }

  const renderNextButton = () =>{
    if(activeStep < totalSteps){
      return (
        <button
          children="Next"
          className="buttonStep"
          type="button"
          onClick={() => handleClickNext()}
        />
      )
    } else if (activeStep === totalSteps) {
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
    <Section>
      <Column>
        {renderPrevButton()}
      </Column>
      <Column />
      <Column style={{textAlign: 'right'}}>
        {renderNextButton()}
      </Column>
    </Section>
  )
}

export default StepNavigator
