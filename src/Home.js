import React, {Fragment} from 'react';

const Home = () => {
  return (
    <Fragment>
      <h1>Home</h1>
      <p>
        <b>react-wizard</b> is a step-by-step _wizard_ application written in JavaScript with
        <a href="https://reactjs.org/">React</a>. It demonstrates an implementation of the
        <a href="https://reactjs.org/docs/hooks-reference.html#usecontext">useContext</a> hook to
        share a user's input form data, i.e., application "state", across components.

        All form input in this application, whether text input, checkbox, or select, is auto-generated from the
        initial state of the context in _WizardContext.js_.
      </p>
      <p>
        Click <a href='/wizard'>Wizard</a> to try demo.
      </p>
    </Fragment>
  );
}

export default Home;
