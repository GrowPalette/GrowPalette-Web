import React from "react";
import styled from "styled-components";
import backIcon from "../../assets/images/back.svg";
const EnterGoalTerm = () => {
  return (
    <Container>
      <BackContainer>
        <StyledBackIcon src={backIcon} alt="뒤로가기" />
        <BackText>Back</BackText>
      </BackContainer>
    </Container>
  );
};

export default EnterGoalTerm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-bottom: 60px;
`;

const BackContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
  left: 24px;
  gap: 12px;
  z-index: 10;
`;

const StyledBackIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const BackText = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;
