import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

const Wrapper = styled.section`
  background: #fff;
  padding: 8px 0;
  display: flex;
  justify-content: center;
`
const NavContainer = styled.div`
  width: 100px;
  color: red;
`
const NavBubbleWrapper = styled.div`
  width: 80px;
  height: 70px;
  background: #f2f2f2;
  border-radius: 50%;
  color: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding-top: 10px;
  position: relative;
`
const NavActiveBubble = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ce3e48;
  position: absolute;
  top: 10px;
  left: 10px;
  border-radius: 50%;
`
const SNumber = styled.div`
  && {
    color: #fff;
    font-size: 40px;
    position: relative;
    margin-top: 5px;
    z-index: 1;
  }
`
const STitle = styled.div`
  color: #ce3e48;
  text-align: center;
`
const RightPeg = styled.div`
  background: #f2f2f2;
  position: absolute;
  top: 35px;
  left: 70px;
  width: 20px;
  height: 10px;
`
const LeftPeg = styled.div`
  background: #f2f2f2;
  position: absolute;
  top: 35px;
  left: -10px;
  width: 20px;
  height: 10px;
`
const StepIndicator = ({ navList = [], activeNavIndex }) => {
  const generateNavList = () =>
    navList.map((navItem, index) => (
      <NavContainer key={index}>
        <NavBubbleWrapper>
          {index === activeNavIndex && <NavActiveBubble />}
          {index !== 0 && <LeftPeg />}
          {index !== navList.length - 1 && <RightPeg />}
          <SNumber>{index + 1}</SNumber>
        </NavBubbleWrapper>
        <STitle variant="body1">{navItem}</STitle>
      </NavContainer>
    ))

  return <Wrapper>{generateNavList()}</Wrapper>
}

StepIndicator.propTypes = {
  navList: propTypes.array,
  activeNavIndex: propTypes.number,
}

export default StepIndicator
