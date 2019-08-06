import React, {Fragment, useState} from 'react';
import WizardNavigation from './WizardNavigation'
import Source from './Source'
import Destination from './Destination'
import Task from './Task'
import Schedule from './Schedule'
import StepIndicator from "./StepIndicator"

const TOTAL_STEPS = 4

const WizardForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [taskName, setTaskName] = useState('');
  const [schedule, setSchedule] = useState('');

  const handleChange = event => {
    const {name, value} = event.target
    switch(name) {
      case 'source':
        setSource(value)
        break;
      case 'destination':
        setDestination(value)
        break;
      case 'taskName':
        setTaskName(value)
        break;
      case 'schedule':
        setSchedule(value)
        break;
      default:
        setCurrentStep(value)
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    alert(`POST to server: \n 
           Source: ${source} \n 
           Destination: ${destination} \n
           Name: ${taskName} \n
           Time: ${schedule}`)
  }

  const handleNextStep = () => {
    const newStep = currentStep >= TOTAL_STEPS - 1 ? TOTAL_STEPS: currentStep + 1
    setCurrentStep(newStep)
  }

  const handlePreviousStep = ()  =>{
    const newStep = currentStep <= 1 ? 1: currentStep - 1
    setCurrentStep(newStep)
  }

  return (
    <Fragment>
      <h1>Wizard</h1>
      <StepIndicator
        stepList={['Source', 'Destination', 'Task', 'Schedule']}
        activeStepIndex={currentStep - 1}
      />
      <form onSubmit={handleSubmit}>
        <Source
          handleChange={handleChange}
          text={source}
          step={currentStep}
        />
        <Destination
          handleChange={handleChange}
          text={destination}
          step={currentStep}
        />
        <Task
          handleChange={handleChange}
          text={taskName}
          step={currentStep}
        />
        <Schedule
          handleChange={handleChange}
          text={schedule}
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
