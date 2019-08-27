import React from 'react'
import StepForm from "./StepForm"
import StepIndicator from "./StepIndicator"
import StepNavigator from './StepNavigator'
import styled from 'styled-components'
import {WizardProvider} from "./WizardContext";

const H2 = styled.h2`
  margin-left: 10px;
`
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
      <H2>Wizard</H2>
      <StepIndicator/>
      <form onSubmit={handleSubmit}>
        <StepForm />
      </form>
      <StepNavigator />
    </WizardProvider>
  )
}


export default WizardForm
