// src/components/BackButton.js
import React from "react";
import styled from "styled-components";
import backIcon from "../assets/images/back.svg";

const BackButton = () => {
  return (
    <BackContainer>
      <StyledBackIcon src={backIcon} alt="뒤로가기" />
      <BackText>Back</BackText>
    </BackContainer>
  );
};

export default BackButton;

const BackContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px; // 이 값을 필요한 위치로 변경할 수 있습니다.
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
