import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
`
const Label = styled.div`
  font-size: 14px;
  font-weight: 800;
  padding-left: 5px;
  padding-top: 10px;
  padding-right: 5px;
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

const CheckPane = ({item, onChange}) => {
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
          type="checkbox"
          checked={item.value}
          value={item.value}
        />
      </div>
    </Section>
  );
}

CheckPane.propTypes = {
  item: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default CheckPane;

