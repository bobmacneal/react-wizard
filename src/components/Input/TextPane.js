import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`
const Label = styled.div`
  font-size: 14px;
  font-weight: 800;
  padding: 5px;
`
const Input = styled.input`
  background: #fafafa;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  height: 30px;
  padding: 5px;
  text-align: left;
  width: 300px;
`;

const TextPane = ({item, onChange}) => {
  return(
    <Section>
      <Label>
        {item.display}
      </Label>
      <div>
        <Input
          id={item.name}
          name={item.name}
          onChange={onChange}
          type="text"
          placeholder={item.placeholder}
          value={item.value}
        />
      </div>
    </Section>
  );
}

TextPane.propTypes = {
  item: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default TextPane;

