import React, {Fragment, useState} from 'react';
import WizardNavigation from './WizardNavigation'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

const TOTAL_STEPS = 3

const WizardForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [secret, setSecret] = useState('');

  const handleChange = event => {
    const {name, value} = event.target
    switch(name) {
      case 'text1':
        setText1(value)
        break;
      case 'text2':
        setText2(value)
        break;
      case 'secret':
        setSecret(value)
        break;
      default:
        setCurrentStep(value)
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    alert(`Your registration detail: \n 
           Text1: ${text1} \n 
           Text2: ${text2} \n
           Secret: ${secret}`)
  }

  const handleNextStep = () => {
    const newStep = currentStep >= 2 ? TOTAL_STEPS: currentStep + 1
    setCurrentStep(newStep)
  }

  const handlePreviousStep = ()  =>{
    const newStep = currentStep <= 1 ? 1: currentStep - 1
    setCurrentStep(newStep)
  }

  return (
    <Fragment>
      <h1>Wizard</h1>
      <p>Step #{currentStep}</p>
      <form onSubmit={handleSubmit}>
        <Step1
          handleChange={handleChange}
          text={text1}
          step={currentStep}
        />
        <Step2
          handleChange={handleChange}
          text={text2}
          step={currentStep}
        />
        <Step3
          handleChange={handleChange}
          text={secret}
          step={currentStep}
        />
        <WizardNavigation
          onNextStep={handleNextStep}
          onPreviousStep={handlePreviousStep}
          step={currentStep}
          totalSteps={TOTAL_STEPS}
        />
      </form>
    </Fragment>
  )
}


export default WizardForm
