import PropTypes from 'prop-types'
import React from 'react'
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
const Select = styled.select`
  background: #fafafa;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  font-size: 14px;
  font-weight: 300;
  height: 30px;
  padding: 5px;
  text-align: left;
  width: 300px;
`
const SelectPane = ({item, onChange}) => {
  const {display, name, options, value} = item
  return(
    <Section>
      <Label>
        {display}
      </Label>
      <div>
        <Select
          id={name}
          name={name}
          onChange={onChange}
        >
          {
            options.map((option) => {
                const {id, text} = option
                if (value === id) {
                  return (
                    <option selected value={id}>{text}</option>
                  )

                } else {
                  return (
                    <option value={id}>{text}</option>
                  )
                }
              }
            )
          }
        </Select>
      </div>
    </Section>
  );
}

SelectPane.propTypes = {
  item: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default SelectPane;

