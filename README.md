
# react-wizard 

This is a step-by-step _wizard_ application using [React](https://reactjs.org/) that demonstrates 
using React's [useContext hook](https://reactjs.org/docs/hooks-reference.html#usecontext) to 
share a user's input form data, i.e., application "state", across components.

All form input whether requiring text input, a checkbox, or a select is auto-generated from the
initial state of the context WizardContext.js.

___
<img src="./public/Screenshot.png" width="50%">.
___
 
### Setup

1. Clone the repository 
    `$ git clone https://github.com/bobmacneal/react-wizard.git`
2. Install [Yarn](https://yarnpkg.com) for package management. 
3. Install node dependencies using yarn
    `$ yarn`

### Run

`$ yarn start`


### Additional Info

Beyond bootstrapping react-wizard with the standard [Create React App](https://github.com/facebook/create-react-app), 
the following npm packages were added:

- [prop-types](https://www.npmjs.com/package/prop-types) to provide runtime type checking. 

    `yarn add prop-types` 


- [styled-components](https://www.npmjs.com/package/styled-components) to embed CSS styles within 
components, making the component's styling quicker/easier to locate.

    `yarn add styled-components` 

- [babel-plugin-styled-components](https://www.npmjs.com/package/babel-plugin-styled-components) so Babel knows
how to transpile CSS in the [styled-components](https://www.npmjs.com/package/styled-components). 

    `yarn add babel-plugin-styled-components` 

- [node-sass](https://www.npmjs.com/package/node-sass) for styling advantages like variables and 
simple inheritance via extension.

    `yarn add node-sass` 

    
