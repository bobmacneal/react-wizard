import React from 'react';
import StepNavigator from './StepNavigator'
import StepIndicator from "./StepIndicator"
import { WizardProvider } from "./WizardContext";
import StepForm from "./StepForm"

const WizardForm = () => {
  const handleSubmit = event => {
    event.preventDefault()
    // alert(`POST to server: \n
    //        Source: ${source} \n
    //        Destination: ${destination} \n
    //        Name: ${taskName} \n
    //        Time: ${schedule}`)
  }

  return (
    <WizardProvider>
      <h2>Context Wizard</h2>
      <StepIndicator/>
      <form onSubmit={handleSubmit}>
        <StepForm />
      </form>
      <StepNavigator />
    </WizardProvider>
  )
}


export default WizardForm
