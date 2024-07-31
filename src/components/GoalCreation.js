import React, { useState } from "react";
import styled from "styled-components";
import AddGoalIcon from "../assets/images/add_goal.svg"; // 아이콘 이미지 임포트
import LeftIcon from "../assets/images/left.svg"; // 왼쪽 화살표 아이콘 임포트
import RightIcon from "../assets/images/right.svg"; // 오른쪽 화살표 아이콘 임포트

const GoalCreation = () => {
  const [selectedTab, setSelectedTab] = useState("monthly");

  // 현재 월을 가져오는 함수
  const getCurrentMonth = () => {
    const date = new Date();
    const month = date.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더함
    return `${month}월`;
  };

  return (
    <GoalCreationContainer>
      <Header>
        <Title>OO님의 목표 작성</Title>
        <Icon src={AddGoalIcon} alt="add goal icon" />
      </Header>
      <Tabs>
        <Tab
          selected={selectedTab === "monthly"}
          onClick={() => setSelectedTab("monthly")}
        >
          월간
        </Tab>
        <Tab
          selected={selectedTab === "annually"}
          onClick={() => setSelectedTab("annually")}
        >
          연간
        </Tab>
      </Tabs>
      <LayoutContainer>
        <Navigation>
          <NavIcon src={LeftIcon} alt="left icon" />
          <MonthText>{getCurrentMonth()}</MonthText>
          <NavIcon src={RightIcon} alt="right icon" />
        </Navigation>
        <Box>
          <Stat>
            <StatTitle>완료한 목표</StatTitle>
            <StatValue>n개</StatValue>
          </Stat>
          <Stat>
            <StatTitle>남은 목표</StatTitle>
            <StatValue>n개</StatValue>
          </Stat>
          <Stat>
            <StatTitle>달성률</StatTitle>
            <StatValue>90%</StatValue>
          </Stat>
        </Box>
      </LayoutContainer>
    </GoalCreationContainer>
  );
};

export default GoalCreation;

const GoalCreationContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #ffffff; /* 배경 색상: 흰색 */
  border-radius: 20px 20px 0px 0px; /* 둥근 모서리 */
  display: flex;
  flex-direction: column;
  gap: 32px; /* 요소 간 간격 (확대된 간격) */
  position: absolute;
  top: 380px; /* 상단 위치 조정 */
  box-sizing: border-box; /* 테두리와 패딩을 포함하여 전체 크기 계산 */
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
`;

const Tabs = styled.div`
  width: 342px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const Tab = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: ${({ selected }) => (selected ? "#000000" : "#DFDFDF")};
  cursor: pointer;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: ${({ selected }) => (selected ? "#000000" : "#DFDFDF")};
  }
`;

const LayoutContainer = styled.div`
  width: 342px;
  height: 119px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 32px; /* LayoutContainer와 위의 요소들 간의 간격 확대 */
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 35px; /* 아이콘과 텍스트 간 간격 */
`;

const NavIcon = styled.img`
  width: 24px; /* 아이콘 너비 */
  height: 24px; /* 아이콘 높이 */
`;

const MonthText = styled.span`
  font-size: 16px; /* 텍스트 크기 */
  color: #000000; /* 텍스트 색상 */
`;

const Box = styled.div`
  width: 342px;
  height: 71px;
  padding: 12px 30px;
  gap: 48px;
  border-radius: 3px 0px 0px 0px;
  border: 0.5px solid #dfdfdf; /* 테두리 색상 및 두께 설정 */
  box-sizing: border-box; /* 패딩과 테두리를 포함하여 전체 크기 계산 */
  display: flex;
  justify-content: space-between; /* 항목 간의 공간 균등 배분 */
  align-items: center; /* 항목 수직 중앙 정렬 */
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatTitle = styled.span`
  font-size: 14px; /* 제목 텍스트 크기 */
  color: #000000; /* 제목 텍스트 색상 */
  margin-bottom: 8px; /* 제목과 값 사이의 간격 */
`;

const StatValue = styled.span`
  font-size: 16px; /* 값 텍스트 크기 */
  color: #000000; /* 값 텍스트 색상 */
  font-weight: bold; /* 값 텍스트 굵기 */
`;
