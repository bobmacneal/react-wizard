import React, {Fragment, useState} from 'react';
import WizardNavigation from './WizardNavigation'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

const TOTAL_STEPS = 3

const WizardForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const {name, value} = event.target
    switch(name) {
      case 'email':
        setEmail(value)
        break;
      case 'username':
        setUsername(value)
        break;
      case 'password':
        setPassword(value)
        break;
      default: // update step
        setCurrentStep(value)
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    alert(`Your registration detail: \n 
           Email: ${email} \n 
           Username: ${username} \n
           Password: ${password}`)
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
      <p># {currentStep}</p>
      <form onSubmit={handleSubmit}>
        <Step1
          handleChange={handleChange}
          email={email}
          step={currentStep}
        />
        <Step2
          handleChange={handleChange}
          username={username}
          step={currentStep}
        />
        <Step3
          handleChange={handleChange}
          password={password}
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
