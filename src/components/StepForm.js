import React, {useContext} from 'react'
import CheckPane from "./Input/CheckPane"
import SelectPane from "./Input/SelectPane"
import TextPane from "./Input/TextPane"
import styled from 'styled-components'
import {WizardContext} from "./WizardContext";

const Section = styled.section`
  height: 160px;
  width: 100%;
  padding-left: 15px;
  padding-top: 15px;
`
const StepForm = () => {
  const [state, setState] = useContext(WizardContext)
  const {activeStep, steps} = state
  const inputItems = steps[activeStep - 1].input

  const handleChange = event => {
    const {name, value} = event.target
    const stepsToUpdate = [...steps];
    const step = stepsToUpdate[activeStep - 1]
    const inputItem = step.input[step.input.findIndex(item => item.name === name)]
    inputItem.value = inputItem.type === 'checkbox' ?  value !== 'true' : value
    setState(prevState => {
      return { ...prevState, steps: stepsToUpdate }
    })
  }

  const renderFormControl = item => {
    switch(item.type) {
      case 'checkbox':
        return (
          <CheckPane
            item={item}
            onChange={handleChange}
          />
        )
      case 'select':
        return (
          <SelectPane
            item={item}
            onChange={handleChange}
          />
        )
      default:
        return (
          <TextPane
            item={item}
            onChange={handleChange}
          />
        )
    }
  }

  return(
    <Section>
      {
        inputItems.map((item, index) => {
          return (
            <div key={index}>
              {renderFormControl(item)}
            </div>
          )})
      }
    </Section>
  );
}

export default StepForm;

