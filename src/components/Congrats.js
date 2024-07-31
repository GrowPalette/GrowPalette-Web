import React from "react";
import styled from "styled-components";
import CloseIcon from "../assets/images/close.svg"; // 아이콘 이미지 임포트

const Congrats = ({ onClose }) => {
  return (
    <CongratsContainer>
      <Header>
        <Title>축하합니다!</Title>
        <Icon src={CloseIcon} alt="close icon" onClick={onClose} />
      </Header>
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
  box-sizing: border-box; /* 테두리와 패딩을 포함하여 전체 크기 계산 */

  left: 0%; /* 중앙 위치 */
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 16px; /* 텍스트 크기 */
  color: #000000; /* 텍스트 색상 */
`;

const Icon = styled.img`
  width: 20px; /* 아이콘 너비 */
  height: 20px; /* 아이콘 높이 */
  cursor: pointer; /* 클릭 가능한 커서 */
`;
