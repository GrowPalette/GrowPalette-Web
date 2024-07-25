import React from "react";
import styled from "styled-components";
import backIcon from "../../assets/images/back.svg"; // 이미지 경로를 올바르게 임포트

const EnterGoal = () => {
  return (
    <Container>
      <BackContainer>
        <StyledBackIcon src={backIcon} alt="뒤로가기" />
        <BackText>Back</BackText>
      </BackContainer>
    </Container>
  );
};

export default EnterGoal;

const Container = styled.div`
  position: relative; // 이미지를 절대 위치로 배치하기 위해 상대 위치로 설정
  width: 100%;
  height: 100%;
`;

const BackContainer = styled.div`
  display: flex;
  align-items: center; // 이미지와 텍스트를 수직 정렬
  position: absolute;
  top: 71px; // Figma 디자인에서 제공한 값으로 설정
  left: 24px; // Figma 디자인에서 제공한 값으로 설정
  gap: 12px; // 이미지와 텍스트 사이의 간격
`;

const StyledBackIcon = styled.img`
  width: 72px; // Figma 디자인에서 제공한 값으로 설정
  height: 24px; // Figma 디자인에서 제공한 값으로 설정
`;

const BackText = styled.span`
  font-size: 16px; // 필요에 따라 텍스트 크기 조절
`;
