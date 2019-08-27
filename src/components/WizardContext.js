import React, { useState } from 'react'

const WizardContext = React.createContext([{}, () => {}])

const WizardProvider = (props) => {
  const [state, setState] = useState({
    activeStep: 1,
    steps: [
      {
        id: 1,
        title: 'Source',
        input: [
          {
            display: 'Source Path',
            name: 'source',
            placeholder: 'Enter source path',
            type: 'text',
            value: '',
          },
        ],
      },
      {
        id: 2,
        title: 'Destination',
        input: [
          {
            display: 'Destination Path',
            name: 'destination',
            placeholder: 'Enter destination path',
            type: 'text',
            value: '',
          },
        ],
      },
      {
        id: 3,
        title: 'Task',
        input: [
          {
            display: 'Task Name',
            name: 'name',
            placeholder: 'Enter task name',
            type: 'text',
            value: '',
          },
          {
            display: 'Active',
            name: 'active',
            type: 'checkbox',
            value: true,
          },
        ],
      },
      {
        id: 4,
        title: 'Schedule',
        input: [
          {
            display: 'Occurs',
            name: 'occurrence',
            options: [
              {value: 1, text: 'Daily'},
              {value: 2, text: 'Hourly'},
              {value: 3, text: 'Monthly'},
              {value: 4, text: 'Every minute'}
              ],
            type: 'select',
            value: '',
          },
          {
            display: 'Start Date (MM-DD-YYYY)',
            name: 'startDate',
            placeholder: 'Enter start date',
            type: 'text',
            value: '',
          },

        ],
      },
    ]
  })

  return (
    <WizardContext.Provider value={[state, setState]}>
      {props.children}
    </WizardContext.Provider>
  );
}

export { WizardContext, WizardProvider };
