// src/pages/Goal/EnterGoal.js
import React, { useState } from "react";
import styled from "styled-components";
import BackButton from "../../components/BackButton";
import termIcon from "../../assets/images/term.svg";
import addIcon from "../../assets/images/add.svg";
import categoryIcon from "../../assets/images/categoryIcon.svg";
import suggestIcon from "../../assets/images/suggest.svg";

const EnterGoal = () => {
  const [goalInput, setGoalInput] = useState("");
  const [suggestedInput, setSuggestedInput] = useState("");

  const handleGoalChange = (e) => {
    setGoalInput(e.target.value);
  };

  const handleSuggestedChange = (e) => {
    setSuggestedInput(e.target.value);
  };

  return (
    <Container>
      <BackButton />
      <ContentContainer>
        <GoalContainer>
          <UserContainer>00님의 목표</UserContainer>
        </GoalContainer>
        <Separator />
        <WhatGoal>어떤 목표를 시작할까요?</WhatGoal>
        <InputContainer>
          <Input
            value={goalInput}
            onChange={handleGoalChange}
            placeholder=" "
            aria-label="원하는 목표를 입력해주세요"
          />
          {!goalInput.length && (
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
          <AddButton backgroundColor="#9fc7c0">
            <AddButtonText>추가</AddButtonText>
            <AddButtonIcon src={addIcon} alt="추가" />
          </AddButton>
        </TermContainer>
        <TermContainer>
          <TermIcon src={suggestIcon} alt="추천 목표" />
          <TermText>추천 목표</TermText>
        </TermContainer>
        <InputContainer>
          <Input
            value={suggestedInput}
            onChange={handleSuggestedChange}
            placeholder=" "
            aria-label="랜덤으로 추천 목표 생성"
          />
          {!suggestedInput.length && (
            <InputPlaceholder>랜덤으로 추천 목표 생성</InputPlaceholder>
          )}
        </InputContainer>
      </ContentContainer>
      <ButtonContainer>
        <SaveButton>취소</SaveButton>
        <UploadButton>업로드</UploadButton>
      </ButtonContainer>
    </Container>
  );
};

export default EnterGoal;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-bottom: 60px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 20px 24px;
`;

const GoalContainer = styled.div`
  margin-top: 70px;
`;

const UserContainer = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  text-align: left;
`;

const Separator = styled.hr`
  margin: 20px 0;
  border: 0;
  border-top: 1px solid #000;
  width: 100%;
`;

const WhatGoal = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  text-align: left;
  margin-top: 20px;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 20px;
`;

const InputPlaceholder = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  color: #999;
  pointer-events: none;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid
    ${({ value }) => (value.length > 0 ? "#000" : "#ddd")};
  background: transparent;
  font-size: 13px;
  color: #000;
  padding: 8px 0;
  outline: none;
  text-align: left;

  &:focus {
    border-bottom: 1px solid #000;
  }

  &:not(:placeholder-shown) + ${InputPlaceholder} {
    display: none;
  }
`;

const TermContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  justify-content: space-between;
`;

const TermIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const TermText = styled.span`
  font-size: 16px;
  color: #000;
  margin-right: auto;
  font-weight: bold;
`;

const AddButton = styled.button`
  align-items: center;
  display: flex;
  width: 103px;
  height: 36px;
  background-color: ${({ backgroundColor }) => backgroundColor || "#c9bc9c"};
  border: none;
  border-radius: 3px;
  padding: 8px 28px;
  cursor: pointer;
  font-size: 12px;
  color: #000;
`;

const AddButtonText = styled.span`
  margin-right: 5px;
  font-weight: bold;
`;

const AddButtonIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 24px;
  bottom: 0;
  margin-top: 270px;
  background: #fff;
`;

const SaveButton = styled.button`
  flex: 1;
  height: 50px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
  color: #000;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;
`;

const UploadButton = styled.button`
  flex: 1;
  height: 50px;
  background-color: #000;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin-left: 10px;
`;
