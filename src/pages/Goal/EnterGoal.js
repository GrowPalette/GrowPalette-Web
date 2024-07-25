import React from "react";
import styled from "styled-components";
import backIcon from "../../assets/images/back.svg"; // 이미지 경로를 올바르게 임포트
import categoryIcon from "../../assets/images/categoryIcon.svg";
const EnterGoal = () => {
  return (
    <Container>
      <BackContainer>
        <StyledBackIcon src={backIcon} alt="뒤로가기" />
        <BackText>Back</BackText>
      </BackContainer>
      <CategoryContainer>
        <StyledCategoryIcon src={categoryIcon} alt="카테고리 아이콘" />
        <CategoryText>카테고리</CategoryText>
      </CategoryContainer>
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

const CategoryContainer = styled.div`
  display: flex;
  align-items: center; // 이미지와 텍스트를 수직 정렬
  position: absolute;
  top: 110px; // Figma 디자인에서 제공한 값으로 설정 (BackContainer 아래)
  left: 24px; // Figma 디자인에서 제공한 값으로 설정
  gap: 12px; // 이미지와 텍스트 사이의 간격
`;

const StyledCategoryIcon = styled.img`
  width: 72px; // 필요에 따라 이미지 크기 조절
  height: 24px; // 필요에 따라 이미지 크기 조절
`;

const CategoryText = styled.span`
  font-size: 16px; // 텍스트 크기
  font-weight: bold; // 텍스트를 볼드체로
  // 또는 font-weight: 700; // 또는 숫자를 사용하여 볼드체로 설정
`;
