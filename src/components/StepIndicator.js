import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

const REACT_BLUE = '#61DAFB'
const BUBBLE_BACKGROUND = '#f2f2f2'

const StepContainer = styled.section`
  padding-bottom: 20px;
  display: flex;
`
const StepIndicatorItem = styled.div`
  width: 100px;
`
const StepItemBubble = styled.div`
  width: 80px;
  height: 70px;
  background-color: ${BUBBLE_BACKGROUND};
  border-radius: 50%;
  color: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding-top: 10px;
  position: relative;
`
const StepItemActionBubble = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${REACT_BLUE};
  position: absolute;
  top: 10px;
  left: 10px;
  border-radius: 50%;
`
const StepNumber = styled.div`
  && {
    color: #fff;
    font-size: 40px;
    position: relative;
    margin-top: 5px;
    z-index: 1;
  }
`
const StepTitle = styled.div`
  color: ${REACT_BLUE};
  font-weight: bold;
  text-align: center;
`
const RightPeg = styled.div`
  background-color: ${BUBBLE_BACKGROUND};
  position: absolute;
  top: 35px;
  left: 70px;
  width: 20px;
  height: 10px;
`
const LeftPeg = styled.div`
  background-color: ${BUBBLE_BACKGROUND};
  position: absolute;
  top: 35px;
  left: -10px;
  width: 20px;
  height: 10px;
`
const StepIndicator = ({ stepList = [], activeStepIndex }) => {
  const generateNavList = () =>
    stepList.map((navItem, index) => (
      <StepIndicatorItem key={index}>
        <StepItemBubble>
          {index === activeStepIndex && <StepItemActionBubble />}
          {index !== 0 && <LeftPeg />}
          {index !== stepList.length - 1 && <RightPeg />}
          <StepNumber>{index + 1}</StepNumber>
        </StepItemBubble>
        <StepTitle variant="body1">{navItem}</StepTitle>
      </StepIndicatorItem>
    ))

  return <StepContainer>{generateNavList()}</StepContainer>
}

StepIndicator.propTypes = {
  navList: propTypes.array,
  activeNavIndex: propTypes.number,
}

export default StepIndicator
