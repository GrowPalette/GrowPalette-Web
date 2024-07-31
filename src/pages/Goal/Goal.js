import React from "react";
import styled from "styled-components";
import LogoWhite from "../../assets/images/logo_white.svg"; // 로고 이미지 임포트
import SearchIcon from "../../assets/images/search.svg"; // 돋보기 아이콘 임포트
import GoalCreation from "../../components/GoalCreation"; // GoalCreation 컴포넌트 임포트

const GoalMain = () => {
  return (
    <Container>
      <Logo src={LogoWhite} alt="로고" />
      <SearchContainer>
        <SearchBar />
        <SearchIconImg src={SearchIcon} alt="검색 아이콘" />
      </SearchContainer>
      <GoalBarContainer>
        <GoalText>
          반가워요 00님,
          <br />곧 목표를 달성해요!
        </GoalText>
        <GoalStatusContainer>
          <GoalLabel>내 목표</GoalLabel>
          <GoalBarWrapper>
            <GoalBar>
              <GoalProgress />{" "}
              {/* 목표 진행 상태에 따라 여기에 흰색 또는 회색 영역이 표시됨 */}
            </GoalBar>
          </GoalBarWrapper>
        </GoalStatusContainer>
      </GoalBarContainer>
      <GoalCreation /> {/* GoalCreation 컴포넌트 추가 */}
    </Container>
  );
};

export default GoalMain;

// 기존 스타일 컴포넌트들
const Container = styled.div`
  height: 100vh; /* 전체 높이를 채우기 위해 100vh 설정 */
  background: linear-gradient(180deg, #c7e2dd 0%, #ebdcb8 100%);
  background-size: 390px 844px; /* #root의 크기에 맞춰 그라데이션 사이즈 설정 */
  background-position: top; /* 배경 그라데이션의 위치를 상단으로 조정 */
  background-repeat: no-repeat; /* 배경이 반복되지 않도록 설정 */
  position: relative; /* 자식 요소를 절대 위치로 설정할 수 있도록 */
`;

const Logo = styled.img`
  width: 103px;
  height: 31px;
  position: absolute;
  top: 71px;
  left: 143px;
`;

const SearchContainer = styled.div`
  position: absolute;
  top: 119px;
  left: 24px;
  width: 342px; /* 전체 검색창 너비 */
  height: 42px;
  display: flex;
  align-items: center;
  border-radius: 3px;
  background-color: transparent; /* 배경색 투명 */
  border: 1px solid #6f6f6f; /* 테두리 색상 */
`;

const SearchBar = styled.input`
  width: 100%; /* 검색창 전체 너비 */
  height: 100%;
  border: none; /* 테두리 제거 */
  border-radius: 3px;
  padding: 0 16px; /* 내부 여백 */
  font-size: 16px; /* 글자 크기 */
  color: #000000; /* 글자 색상 */
  background-color: transparent; /* 투명한 배경색 */
  box-sizing: border-box; /* 테두리와 패딩을 포함하여 전체 크기 계산 */

  /* 포커스 상태에서의 스타일 유지 */
  &:focus {
    outline: none; /* 포커스 시 기본 테두리 제거 */
    border-color: #6f6f6f; /* 포커스 시 테두리 색상 유지 */
  }
`;

const SearchIconImg = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 9px;
  right: 10px; /* 검색창의 우측 여백 조정 */
  opacity: 0.8; /* 아이콘의 투명도 설정 (필요에 따라 조정) */
`;

const GoalBarContainer = styled.div`
  width: 342px;
  height: auto; /* 높이 자동 조정 */
  position: absolute;
  top: 209px;
  left: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px; /* 위아래 간격 좁힘 */
  opacity: 1; /* opacity를 1로 설정하여 보이게 함 */
`;

const GoalText = styled.div`
  width: 200px;
  height: 50px;
  font-size: 20px; /* 텍스트 크기 설정 */
  font-weight: bold; /* 텍스트 굵기 설정 */
  color: #000000; /* 텍스트 색상 설정 */
  opacity: 1; /* opacity를 1로 설정하여 보이게 함 */
`;

const GoalStatusContainer = styled.div`
  width: 342px;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 20px; /* 목표 레이블과 바 간의 간격 조정 */
  opacity: 1; /* opacity를 1로 설정하여 보이게 함 */
`;

const GoalLabel = styled.div`
  width: 80px; /* 텍스트 폭을 조정하여 한 줄로 표시되도록 함 */
  height: 14px;
  font-size: 10px; /* 텍스트 크기 설정 */
  font-weight: bold; /* 텍스트 굵기 설정 */
  color: #000000; /* 텍스트 색상 설정 */
  opacity: 1; /* opacity를 1로 설정하여 보이게 함 */
  display: flex;
  align-items: center;
  white-space: nowrap; /* 텍스트가 한 줄로 유지되도록 함 */
`;

const GoalBarWrapper = styled.div`
  width: 290px; /* GoalBar의 부모 컨테이너 너비 */
  height: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-end; /* GoalBar를 오른쪽으로 이동 */
`;

const GoalBar = styled.div`
  width: 290px;
  height: 8px;
  border-radius: 20px; /* 좌측 둥근 모서리 설정 */
  background-color: #6f6f6f; /* 기본 배경색 (미완료 상태) */
  position: relative; /* 자식 요소의 위치를 상대적으로 설정 */
`;

const GoalProgress = styled.div`
  height: 100%;
  background-color: #ffffff; /* 실현된 목표 부분 색상 */
  border-radius: 20px; /* 좌측 둥근 모서리 설정 */
  position: absolute;
  top: 0;
  left: 0;
  width: 50%; /* 예시로 50% 설정, 실제 목표 진행에 따라 변경 */
`;
