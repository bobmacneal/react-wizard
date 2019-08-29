import React, {Fragment} from 'react'
import styled from 'styled-components'

const Paragraph = styled.p`
  width: 340px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
`
const H2 = styled.h2`
  margin-left: 12px;
`
const Code = styled.code`
  font-size: 14px;
`
const Home = () => {
  return (
    <Fragment>
      <H2>Home</H2>
      <Paragraph>
        <b>react-wizard</b> is a step-by-step <i>wizard</i> written in JavaScript with
        using <a href="https://reactjs.org/">React</a>. It demonstrates the <a href="https://reactjs.org/docs/hooks-reference.html#usecontext">useContext</a> hook
        to share form data across components.
      </Paragraph>
      <Paragraph>
        A step-by-step workflow is applied to a hypothetical task scheduling feature.
      </Paragraph>
      <Paragraph>
        All form input, whether text input, checkbox, or select, is auto-generated from the
        initial state of the context in <Code>WizardContext.js</Code>.
      </Paragraph>
      <Paragraph>
        Click <a href='/wizard'>react-wizard</a> to try the demo.
      </Paragraph>
    </Fragment>
  );
}

export default Home;
