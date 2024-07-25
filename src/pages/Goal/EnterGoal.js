// src/pages/Goal/EnterGoal.js
import React, { useState } from "react";
import styled from "styled-components";
import backIcon from "../../assets/images/back.svg";
import termIcon from "../../assets/images/term.svg";
import addIcon from "../../assets/images/add.svg"; // add.svg 이미지 추가
import categoryIcon from "../../assets/images/categoryIcon.svg";
import suggestIcon from "../../assets/images/suggest.svg";

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
          <AddButton>
            <AddButtonText>추가</AddButtonText>
            <AddButtonIcon src={addIcon} alt="추가" />
          </AddButton>
        </TermContainer>
        <TermContainer>
          <TermIcon src={categoryIcon} alt="카테고리" />
          <TermText>카테고리</TermText>
          <AddButton2>
            <AddButtonText>추가</AddButtonText>
            <AddButtonIcon src={addIcon} alt="추가" />
          </AddButton2>
        </TermContainer>
        <TermContainer>
          <TermIcon src={suggestIcon} alt="추천 목표" />
          <TermText>추천 목표</TermText>
          {/* 버튼이 없는 경우를 처리하기 위해 추가적인 스타일을 설정할 수 있습니다. */}
        </TermContainer>
        <InputContainer>
          <Input
            value={inputValue}
            onChange={handleChange} // 입력값 상태 업데이트
            placeholder=" " // 플레이스홀더를 공백으로 설정하여 실제 플레이스홀더 텍스트를 숨김
          />
          {/* 플레이스홀더가 입력값이 있을 때 사라지도록 설정 */}
          {!inputValue.length && (
            <InputPlaceholder>랜덤으로 추천 목표 생성</InputPlaceholder>
          )}
        </InputContainer>
      </ContentContainer>
      <ButtonContainer>
        <SaveButton>임시 저장</SaveButton>
        <UploadButton>업로드</UploadButton>
      </ButtonContainer>
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
  width: 100%; /* 전체 너비 사용 */
  justify-content: space-between; /* 아이콘, 텍스트, 버튼을 양 끝에 배치 */
`;

const TermIcon = styled.img`
  width: 24px; /* 아이콘 크기 조정 */
  height: 24px;
  margin-right: 8px; /* 아이콘과 텍스트 간격 조정 */
`;

const TermText = styled.span`
  font-size: 16px;
  color: #000; /* 텍스트 색상 */
  margin-right: auto; /* 텍스트를 아이콘에 가깝게 붙이기 */
  font-weight: bold;
`;

const AddButton = styled.button`
  align-items: center; /* 수평 중앙 정렬 */
  display: flex;
  width: 103px;
  height: 36px;
  background-color: #c9bc9c; /* 버튼 배경색 */
  border: none;
  border-radius: 3px;
  padding: 8px 28px;
  cursor: pointer; /* 클릭 시 포인터 모양으로 변경 */
  font-size: 12px;
  color: #000; /* 버튼 텍스트 색상 */
`;

const AddButton2 = styled.button`
  align-items: center; /* 수평 중앙 정렬 */
  display: flex;
  width: 103px;
  height: 36px;
  background-color: #9fc7c0; /* 버튼 배경색 */
  border: none;
  border-radius: 3px;
  padding: 8px 28px;
  cursor: pointer; /* 클릭 시 포인터 모양으로 변경 */
  font-size: 12px;
  color: #000; /* 버튼 텍스트 색상 */
`;

const AddButtonText = styled.span`
  margin-right: 5px; /* 텍스트와 아이콘 간격 조정 */
  font-weight: bold;
`;

const AddButtonIcon = styled.img`
  width: 16px; /* 아이콘 크기 조정 */
  height: 16px;
`;

// 추가된 부분
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 24px;
  bottom: 0;
  margin-top: 270px;
  background: #fff; /* 배경색 설정 */
`;

const SaveButton = styled.button`
  flex: 1;
  height: 50px;
  background-color: #fff; /* 흰색 배경 */
  border: 1px solid #000; /* 검정 테두리 */
  border-radius: 5px;
  color: #000; /* 검정색 텍스트 */
  font-size: 16px;
  cursor: pointer; /* 클릭 시 포인터 모양으로 변경 */
  margin-right: 10px; /* 버튼 간격 조정 */
`;

const UploadButton = styled.button`
  flex: 1;
  height: 50px;
  background-color: #000; /* 검정색 배경 */
  border: none;
  border-radius: 5px;
  color: #fff; /* 흰색 텍스트 */
  font-size: 16px;
  cursor: pointer; /* 클릭 시 포인터 모양으로 변경 */
  margin-left: 10px; /* 버튼 간격 조정 */
`;
