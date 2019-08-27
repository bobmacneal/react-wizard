import React, {useState} from 'react'

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
            name: 'taskName',
            placeholder: 'Enter task name',
            type: 'text',
            value: '',
          },
          {
            display: 'Active',
            name: 'activeTask',
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
              {id: 'DEFAULT', text: 'Choose one'},
              {id: 'Daily', text: 'Daily'},
              {id: 'Hourly', text: 'Hourly'},
              {id: 'Monthly', text: 'Monthly'},
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
