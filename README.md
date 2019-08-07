
# react-wizard 

This is an example for implementing a step-by-step _wizard_ using [React](https://reactjs.org/). 

I demonstrate an easy-to-understand template for setting up a wizard using React's useState hook.


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

Beyond bootstrapping react-wizard with [Create React App](https://github.com/facebook/create-react-app), 
I added the following npm packages:

- [node-sass](https://www.npmjs.com/package/node-sass) for styling ease.

    `yarn add node-sass` 

- [prop-types](https://www.npmjs.com/package/prop-types) for runtime type checking. 

    `yarn add prop-types` 


- [styled-components](https://www.npmjs.com/package/styled-components) to make it obvious where a component's styling 
comes from. 

    `yarn add styled-components` 
    
- [babel-plugin-styled-components](https://www.npmjs.com/package/babel-plugin-styled-components) so Babel knows
how to transpile css in style-components. 

    `yarn add babel-plugin-styled-components` 
