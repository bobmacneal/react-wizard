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
  return (
    <WizardProvider>
      <H2>Wizard</H2>
      <StepIndicator/>
      <StepForm/>
      <StepNavigator />
    </WizardProvider>
  )
}

export default WizardForm
