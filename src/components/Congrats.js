import React from "react";
import styled from "styled-components";
import CloseIcon from "../assets/images/close.svg"; // 아이콘 이미지 임포트
import CakeIcon from "../assets/images/cake.svg"; // 케이크 이미지 임포트

const Congrats = ({ onClose, goalText }) => {
  return (
    <CongratsContainer>
      <Header>
        <Icon src={CloseIcon} alt="close icon" onClick={onClose} />
      </Header>
      <Body>
        <CakeWrapper>
          <Cake src={CakeIcon} alt="cake icon" />
        </CakeWrapper>
        <Message>목표를 달성했어요!</Message>
        {goalText && <GoalText>{goalText}</GoalText>}
      </Body>
    </CongratsContainer>
  );
};

export default Congrats;

const CongratsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #c7e2dd; /* 배경 색상: 흰색 */
  border-radius: 20px 20px 0px 0px; /* 둥근 모서리 */
  display: flex;
  flex-direction: column;
  gap: 32px; /* 요소 간 간격 (확대된 간격) */
  position: absolute;
  top: 40%; /* 상단 위치 조정 */
  left: 50%; /* 수평 중앙 정렬 */
  transform: translateX(-50%); /* 중앙 정렬 조정 */
  box-sizing: border-box; /* 테두리와 패딩을 포함하여 전체 크기 계산 */
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end; /* 오른쪽 정렬 */
  align-items: center;
  width: 100%; /* 전체 너비 */
`;

const Body = styled.div`
  display: flex;
  flex-direction: column; /* 수직 정렬을 위해 컬럼 방향 설정 */
  align-items: center; /* 수평 가운데 정렬 */
  justify-content: center; /* 수직 가운데 정렬 */
  width: 100%; /* 전체 너비 */
`;

const Icon = styled.img`
  width: 20px; /* 아이콘 너비 */
  height: 20px; /* 아이콘 높이 */
  cursor: pointer; /* 클릭 가능한 커서 */
`;

const CakeWrapper = styled.div`
  margin-bottom: 16px; /* 케이크와 문구 사이의 간격 조정 */
`;

const Cake = styled.img`
  width: 48px; /* 아이콘 너비 */
  height: 48px; /* 아이콘 높이 */
`;

const Message = styled.h3`
  font-size: 16px; /* 문구의 폰트 크기 설정 */
  color: #000000; /* 문구 색상 설정 */
  margin: 0; /* 기본 마진 제거 */
`;

const GoalText = styled.p`
  font-size: 14px; /* 목표 텍스트의 폰트 크기 설정 */
  color: #333333; /* 목표 텍스트 색상 설정 */
  margin-top: 8px; /* 목표 텍스트와 문구 사이의 간격 조정 */
  text-align: center; /* 목표 텍스트 중앙 정렬 */
`;
