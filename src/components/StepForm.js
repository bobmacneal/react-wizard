import React, {useContext} from 'react'
import CheckPane from "./Input/CheckPane"
import SelectPane from "./Input/SelectPane"
import TextPane from "./Input/TextPane"
import styled from 'styled-components'
import {WizardContext} from "./WizardContext";

const Section = styled.section`
  height: 210px;
  width: 340px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
`
const ActionPanel = styled.div`
  text-align: right;
  width: 310px;
`
const StepForm = () => {
  const [state, setState] = useContext(WizardContext)
  const {activeStep, steps} = state
  const inputItems = steps[activeStep - 1].input
  const totalSteps = steps.length || 0

  const handleSubmit = event => {
    event.preventDefault()
    let postBody = []

    steps.forEach( (step) => {
      const payload = {id: step.id, input: []}
      step.input.forEach((item) => {
        payload.input.push({
          name: item.name,
          value: item.value
        })
      })
      postBody.push(payload)
    });
    console.log(JSON.stringify(postBody))
  }

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
      <ActionPanel>
        {
          activeStep === totalSteps &&
          <form onSubmit={handleSubmit}>
            <button
              children="Save"
              className="buttonSave"
              type="submit"
            />
          </form>
        }
      </ActionPanel>
    </Section>
  );
}

export default StepForm;

