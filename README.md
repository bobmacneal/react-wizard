
# react-wizard 

**react-wizard** is a step-by-step _wizard_ workflow written in JavaScript with [React](https://reactjs.org/).
It demonstrates an implementation of the [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext) hook to 
share a user's form input (application's "state") across components.

The step-by-step workflow is applied to a hypothetical task scheduling feature.

All form input in this application, whether text input, checkbox, or select, is auto-generated from the initial 
state of the context in WizardContext.js.

___
<img src="./public/Screenshot.png" width="50%">.
___
 
### Setup

1. Clone the repository 
    `$ git clone https://github.com/bobmacneal/react-wizard.git`
2. Install [Yarn](https://yarnpkg.com) for package management. 
3. Install dependencies using yarn
    `$ yarn`

### Run

`$ yarn start`


### Additional Info

Beyond bootstrapping with [Create React App](https://github.com/facebook/create-react-app), 
the following npm packages were added:

- [prop-types](https://www.npmjs.com/package/prop-types) to provide runtime type checking. 

    `yarn add prop-types` 


- [styled-components](https://www.npmjs.com/package/styled-components) to embed CSS styles within 
components which makes the component's styling quicker/easier to find and update.

    `yarn add styled-components` 

- [babel-plugin-styled-components](https://www.npmjs.com/package/babel-plugin-styled-components) so Babel knows
how to transpile CSS in the [styled-components](https://www.npmjs.com/package/styled-components) mentioned above. 

    `yarn add babel-plugin-styled-components` 

- [node-sass](https://www.npmjs.com/package/node-sass) for styling advantages over vanilla CSS, like variables and 
simple inheritance via extension.

    `yarn add node-sass` 

    
