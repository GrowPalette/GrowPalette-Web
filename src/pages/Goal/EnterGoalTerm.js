import React, { useState } from "react";
import styled from "styled-components";
import BackButton from "../../components/BackButton";
import CalendarIcon from "../../assets/images/Calendar.svg";
import MonthlyView from "../../components/MonthlyView";
import YearlyView from "../../components/YearlyView";

const EnterGoalTerm = () => {
  const [selectedTab, setSelectedTab] = useState("monthly");
  const [selectedMonth, setSelectedMonth] = useState(null); // 선택된 월 상태 관리

  return (
    <Container>
      <BackButton />
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
      {selectedTab === "monthly" ? (
        <MonthlyView
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
      ) : (
        <YearlyView
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
      )}
      <ApplyButton>적용</ApplyButton>
    </Container>
  );
};

export default EnterGoalTerm;

// Styled Components는 그대로 사용

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-bottom: 60px;
  position: relative;
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
  width: 390px;
  height: 42px;
  position: absolute;
  top: 179px;
  gap: 0;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  position: relative;
  margin-bottom: 2px;
`;

const Tab = styled.div`
  font-size: 16px;
  color: ${({ isSelected }) => (isSelected ? "#000000" : "#DFDFDF")};
  cursor: pointer;
  padding: 12px 48px;
  border-radius: ${({ isSelected }) =>
    isSelected ? "3px 0 0 3px" : "0 3px 3px 0"};
  text-align: center;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SeparatorContainer = styled.div`
  display: flex;
  width: 390px;
  height: 2px;
  position: relative;
`;

const EditTermLine = styled.div`
  width: 50%;
  height: 2px;
  background-color: ${({ isSelected, position }) =>
    isSelected ? "#000000" : "#DFDFDF"};
  position: absolute;
  top: 0;
  left: ${({ position }) => (position === "left" ? "0" : "50%")};
`;

const ApplyButton = styled.button`
  width: 342px;
  height: 56px;
  position: absolute;
  top: 708px;
  left: 24px;
  padding: 14px 68px;
  gap: 4px;
  border-radius: 3px 0 0 0;
  background-color: #222222;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  opacity: 1;
  border: none;
  cursor: pointer;
`;
