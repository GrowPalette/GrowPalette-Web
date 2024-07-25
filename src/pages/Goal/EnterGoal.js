// src/pages/Goal/EnterGoal.js
import React, { useState } from "react";
import styled from "styled-components";
import backIcon from "../../assets/images/back.svg";
import termIcon from "../../assets/images/term.svg"; // term.svg 이미지 추가

const EnterGoal = () => {
  const [inputValue, setInputValue] = useState(""); // 입력값 상태 관리

  const handleChange = (e) => {
    setInputValue(e.target.value); // 입력값 상태 업데이트
  };

  return (
    <Container>
      <BackContainer>
        <StyledBackIcon src={backIcon} alt="뒤로가기" />
        <BackText>Back</BackText>
      </BackContainer>
      <ContentContainer>
        <GoalContainer>
          <UserContainer>00님의 목표</UserContainer>
        </GoalContainer>
        <Separator isActive={inputValue.length > 0} /> {/* 수평선 추가 */}
        <WhatGoal>어떤 목표를 시작할까요?</WhatGoal>
        <InputContainer>
          <Input
            value={inputValue}
            onChange={handleChange} // 입력값 상태 업데이트
            placeholder=" " // 플레이스홀더를 공백으로 설정하여 실제 플레이스홀더 텍스트를 숨김
          />
          {/* 플레이스홀더가 입력값이 있을 때 사라지도록 설정 */}
          {!inputValue.length && (
            <InputPlaceholder>원하는 목표를 입력해주세요.</InputPlaceholder>
          )}
        </InputContainer>
        <TermContainer>
          <TermIcon src={termIcon} alt="기간" />
          <TermText>기간</TermText>
        </TermContainer>
      </ContentContainer>
    </Container>
  );
};

export default EnterGoal;

const Container = styled.div`
  display: flex;
  flex-direction: column; /* 수직 방향으로 정렬 */
  align-items: center; /* 수평 중앙 정렬 */
  width: 100%;
  height: 100%;
  padding-bottom: 60px; /* BottomNavbar의 높이 만큼의 여백을 추가 */
`;

const BackContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px; /* 상단 여백 조정 */
  left: 24px;
  gap: 12px;
  z-index: 10; /* 다른 요소 위에 표시되도록 설정 */
`;

const StyledBackIcon = styled.img`
  width: 24px; /* 아이콘 크기 조정 */
  height: 24px;
`;

const BackText = styled.span`
  font-size: 16px;
  font-weight: bold; /* 텍스트 강조 */
  color: #333; /* 텍스트 색상 조정 */
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column; /* 수직 방향으로 정렬 */
  align-items: flex-start; /* 왼쪽 정렬 */
  width: 100%;
  padding: 20px 24px; /* 여백 설정 */
`;

const GoalContainer = styled.div`
  margin-top: 70px; /* 상단 여백 추가 */
`;

const UserContainer = styled.div`
  font-size: 20px;
  font-weight: bold; /* 사용자 목표 텍스트 강조 */
  color: #000; /* 텍스트 색상 */
  text-align: left; /* 텍스트 왼쪽 정렬 */
`;

const Separator = styled.hr`
  margin: 20px 0; /* 상하 여백 추가 */
  border: 0; /* 기본 테두리 제거 */
  border-top: 1px solid ${({ isActive }) => (isActive ? "#000" : "#ddd")}; /* 수평선 색상 */
  width: 100%; /* 전체 너비 사용 */
`;

const WhatGoal = styled.div`
  font-size: 18px;
  font-weight: bold; /* 사용자 목표 텍스트 강조 */
  color: #000; /* 텍스트 색상 */
  text-align: left; /* 텍스트 왼쪽 정렬 */
  margin-top: 20px; /* 상단 여백 추가 */
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 20px; /* 상단 여백 추가 */
`;

const InputPlaceholder = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  color: #999; /* 기본 회색 텍스트 색상 */
  pointer-events: none; /* 텍스트 클릭 방지 */
`;

const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid
    ${({ value }) => (value.length > 0 ? "#000" : "#ddd")}; /* 기본 회색 테두리 */
  background: transparent;
  font-size: 13px;
  color: #000; /* 기본 텍스트 색상 */
  padding: 8px 0; /* 수직 여백 추가 */
  outline: none; /* 기본 테두리 제거 */
  text-align: left;

  &:focus {
    border-bottom: 1px solid #000; /* 포커스 시 검정색 테두리 */
  }

  &:not(:placeholder-shown) + ${InputPlaceholder} {
    display: none; /* 플레이스홀더가 비워지면 숨김 */
  }
`;

const TermContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px; /* 상단 여백 추가 */
`;

const TermIcon = styled.img`
  width: 24px; /* 아이콘 크기 조정 */
  height: 24px;
  margin-right: 8px; /* 아이콘과 텍스트 간격 조정 */
`;

const TermText = styled.span`
  font-size: 16px;
  color: #000; /* 텍스트 색상 */
`;
