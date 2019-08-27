import React, {useContext} from 'react';
import { WizardContext } from "./WizardContext";
import TextPane from "./Input/TextPane"
import CheckPane from "./Input/CheckPane"
import SelectPane from "./Input/SelectPane"
import styled from 'styled-components'

const StepForm = () => {
  const [state, setState] = useContext(WizardContext)
  const {activeStep, steps} = state
  const inputItems = steps[activeStep - 1].input

  const handleChange = event => {
    const {name, value} = event.target
    // switch(name) {
    //   case 'source':
    //     setSource(value)
    //     break;
    //   case 'destination':
    //     setDestination(value)
    //     break;
    //   case 'taskName':
    //     setTaskName(value)
    //     break;
    //   case 'schedule':
    //     setSchedule(value)
    //     break;
    //   default:
    //     // setState(value)
    // }
  }

  const renderFormControl = item => {
    switch(item.type) {
      case 'checkbox':
        return (
          <CheckPane
            item={item}
            onChange={() => handleChange()}
          />
        )
      case 'select':
        return (
          <SelectPane
            item={item}
            onChange={() => handleChange()}
          />
        )
      default:
        return (
          <TextPane
            item={item}
            onChange={() => handleChange()}
          />
        )
    }
  }

  return(
    <div style={{height: '160px', width: '100%', paddingLeft: '15px', paddingTop: '15px'}}>
      {
        inputItems.map((item) => {
          return (
            <div>
              {renderFormControl(item)}
            </div>
          )})
      }
    </div>
  );
}

export default StepForm;

