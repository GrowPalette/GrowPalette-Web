import React, { useState } from "react";
import styled from "styled-components";
import BackButton from "../../components/BackButton"; // BackButton 컴포넌트 임포트
import CalendarIcon from "../../assets/images/Calendar.svg";

const EnterGoalTerm = () => {
  const [selectedTab, setSelectedTab] = useState("monthly"); // 선택된 탭 상태 관리

  return (
    <Container>
      <BackButton /> {/* BackButton 컴포넌트 사용 */}
      <CategoryContainer>
        <StyledCategoryIcon src={CalendarIcon} alt="달력 아이콘" />
        <CategoryText>기간</CategoryText>
      </CategoryContainer>
      <EditTermContainer>
        <TabContainer>
          <Tab
            isSelected={selectedTab === "monthly"}
            onClick={() => setSelectedTab("monthly")}
          >
            월간
          </Tab>
          <Tab
            isSelected={selectedTab === "yearly"}
            onClick={() => setSelectedTab("yearly")}
          >
            연간
          </Tab>
        </TabContainer>
        <SeparatorContainer>
          <EditTermLine
            isSelected={selectedTab === "monthly"}
            position="left"
          />
          <EditTermLine
            isSelected={selectedTab === "yearly"}
            position="right"
          />
        </SeparatorContainer>
      </EditTermContainer>
      <ApplyButton>적용</ApplyButton> {/* ApplyButton 컴포넌트 사용 */}
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
  position: relative; /* 상대적인 위치 지정 */
`;

const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 110px;
  left: 24px;
  gap: 12px;
`;

const StyledCategoryIcon = styled.img`
  width: 72px;
  height: 24px;
`;

const CategoryText = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const EditTermContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 390px; /* 고정 너비 */
  height: 42px; /* 고정 높이 */
  position: absolute;
  top: 179px; /* 절대 위치 지정 */
  gap: 0;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%; /* 전체 너비 */
  height: 40px; /* 고정 높이 */
  position: relative;
  margin-bottom: 2px; /* 선과의 간격 조정 */
`;

const Tab = styled.div`
  font-size: 16px; /* 글자 크기 */
  color: ${({ isSelected }) =>
    isSelected ? "#000000" : "#DFDFDF"}; /* 텍스트 색상 */
  cursor: pointer; /* 커서 모양 변경 */
  padding: 12px 48px; /* 패딩 */
  border-radius: ${({ isSelected }) =>
    isSelected ? "3px 0 0 3px" : "0 3px 3px 0"}; /* 테두리 반경 */
  text-align: center; /* 텍스트 가운데 정렬 */
  flex: 1; /* 균등 분할 */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SeparatorContainer = styled.div`
  display: flex;
  width: 390px; /* 고정 너비 */
  height: 2px; /* 고정 높이 */
  position: relative;
`;

const EditTermLine = styled.div`
  width: ${({ position }) =>
    position === "left" ? "50%" : "50%"}; /* 각 절반 너비 */
  height: 2px; /* 고정 높이 */
  background-color: ${({ isSelected, position }) =>
    isSelected
      ? "#000000"
      : position === "left"
      ? "#DFDFDF"
      : position === "right"
      ? "#DFDFDF"
      : "#DFDFDF"}; /* 배경색 */
  position: absolute;
  top: 0;
  left: ${({ position }) =>
    position === "left"
      ? "0"
      : position === "right"
      ? "50%"
      : "0"}; /* 선택 상태에 따라 위치 조정 */
`;

const ApplyButton = styled.button`
  width: 342px; /* 고정 너비 */
  height: 56px; /* 고정 높이 */
  position: absolute;
  top: 708px; /* 절대 위치 지정 */
  left: 24px; /* 절대 위치 지정 */
  padding: 14px 68px; /* 패딩 */
  gap: 4px; /* 간격 */
  border-radius: 3px 0 0 0; /* 테두리 반경 */
  background-color: #222222; /* 배경색 */
  color: #ffffff; /* 글자색 */
  font-size: 16px; /* 글자 크기 */
  font-weight: bold; /* 글자 두께 */
  opacity: 1; /* 투명도 */
  border: none; /* 테두리 없앰 */
  cursor: pointer; /* 커서 모양 변경 */
`;
