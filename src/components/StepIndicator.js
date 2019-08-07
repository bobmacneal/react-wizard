import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

const REACT_BLUE = '#61DAFB'
const BUBBLE_BACKGROUND = '#f2f2f2'

const Container = styled.section`
  display: flex;
  padding-bottom: 20px;
`
const StepItem = styled.div`
  width: 100px;
`
const ItemBackground = styled.div`
  background-color: ${BUBBLE_BACKGROUND};
  border-radius: 50%;
  color: #fff;
  display: flex;
  height: 70px;
  justify-content: center;
  margin: 0 auto;
  padding-top: 10px;
  position: relative;
  width: 80px;
`
const ItemBalloon = styled.div`
  background-color: ${REACT_BLUE};
  border-radius: 50%;
  height: 60px;
  left: 10px;
  position: absolute;
  top: 10px;
  width: 60px;
`
const StepNumber = styled.div`
  && {
    color: #fff;
    font-size: 40px;
    margin-top: 5px;
    position: relative;
    z-index: 1;
  }
`
const StepTitle = styled.div`
  color: ${REACT_BLUE};
  text-align: center;
  font-weight: bold;
`
const RightArm = styled.div`
  background-color: ${BUBBLE_BACKGROUND};
  height: 10px;
  left: 70px;
  position: absolute;
  top: 35px;
  width: 20px;
`
const LeftArm = styled.div`
  background-color: ${BUBBLE_BACKGROUND};
  height: 10px;
  left: -10px;
  position: absolute;
  top: 35px;
  width: 20px;
`
const StepIndicator = ({ stepItems = [], activeStep }) => {
  const generateNavList = () =>
    stepItems.map((stepTitle, index) => (
      <StepItem key={index}>
        <ItemBackground>
          {index === activeStep && <ItemBalloon />}
          {index !== 0 && <LeftArm />}
          {index !== stepItems.length - 1 && <RightArm />}
          <StepNumber>{index + 1}</StepNumber>
        </ItemBackground>
        <StepTitle variant="body1">{stepTitle}</StepTitle>
      </StepItem>
    ))

  return (
    <Container>
      {generateNavList()}
    </Container>
  )
}

StepIndicator.propTypes = {
  stepItems: propTypes.array,
  activeStep: propTypes.number,
}

export default StepIndicator
