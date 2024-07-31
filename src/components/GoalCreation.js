import React, { useState } from "react";
import styled from "styled-components";
import AddGoalIcon from "../assets/images/add_goal.svg";
import LeftIcon from "../assets/images/left.svg";
import RightIcon from "../assets/images/right.svg";
import CheckGoalIcon from "../assets/images/check_goal.svg";
import CheckboxIcon from "../assets/images/checkbox.svg";
import FilledCheckboxIcon from "../assets/images/filled_checkbox.svg";
import Congrats from "./Congrats"; // Congrats 컴포넌트 임포트

const GoalCreation = () => {
  const [selectedTab, setSelectedTab] = useState("monthly");
  const [congratsIndex, setCongratsIndex] = useState(null); // 축하 메시지가 표시될 인덱스
  const [checkedGoals, setCheckedGoals] = useState([
    false,
    false,
    false,
    false,
  ]);

  const handleGoalClick = (index) => {
    const newCheckedGoals = [...checkedGoals];
    newCheckedGoals[index] = !newCheckedGoals[index];
    setCheckedGoals(newCheckedGoals);
    if (!checkedGoals[index]) {
      setCongratsIndex(index); // 목표가 완료되면 축하 메시지를 표시할 인덱스를 설정
    }
  };

  const handleCloseCongrats = () => {
    setCongratsIndex(null); // 축하 메시지 닫기
  };

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
            <StatValue>{checkedGoals.filter(Boolean).length}개</StatValue>
          </Stat>
          <Stat>
            <StatTitle>남은 목표</StatTitle>
            <StatValue>
              {checkedGoals.length - checkedGoals.filter(Boolean).length}개
            </StatValue>
          </Stat>
          <Stat>
            <StatTitle>달성률</StatTitle>
            <StatValue>
              {Math.round(
                (checkedGoals.filter(Boolean).length / checkedGoals.length) *
                  100
              )}
              %
            </StatValue>
          </Stat>
        </Box>
      </LayoutContainer>
      <NewContainer>
        <GoalText>OO님의 목표</GoalText>
        <CheckIcon src={CheckGoalIcon} alt="check goal icon" />
        <Separator />
        {[
          "독서 3권 하기",
          "영어 단어 매일 10개 외우기",
          "대외활동 지원하고 합격하기",
          "아침 7시 기상하기",
        ].map((goal, index) => (
          <GoalItem key={index} onClick={() => handleGoalClick(index)}>
            <GoalText>{goal}</GoalText>
            <GoalCheckbox
              src={checkedGoals[index] ? FilledCheckboxIcon : CheckboxIcon}
              alt="checkbox icon"
            />
          </GoalItem>
        ))}
      </NewContainer>
      {congratsIndex !== null && (
        <Congrats
          onClose={handleCloseCongrats}
          goal={
            [
              "독서 3권 하기",
              "영어 단어 매일 10개 외우기",
              "대외활동 지원하고 합격하기",
              "아침 7시 기상하기",
            ][congratsIndex]
          }
        />
      )}
    </GoalCreationContainer>
  );
};

export default GoalCreation;

const GoalCreationContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 20px 20px 0px 0px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: absolute;
  top: 380px;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 16px;
  color: #000000;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
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
  margin-top: 32px;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 35px;
`;

const NavIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const MonthText = styled.span`
  font-size: 16px;
  color: #000000;
`;

const Box = styled.div`
  width: 342px;
  height: 71px;
  padding: 12px 30px;
  gap: 48px;
  border-radius: 3px 0px 0px 0px;
  border: 0.5px solid #dfdfdf;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatTitle = styled.span`
  font-size: 14px;
  color: #000000;
  margin-bottom: 8px;
`;

const StatValue = styled.span`
  font-size: 16px;
  color: #000000;
  font-weight: bold;
`;

const NewContainer = styled.div`
  width: 342px;
  height: 212.5px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 40px;
  position: relative;
`;

const GoalText = styled.span`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
  line-height: 18.75px;
  text-align: left;
`;

const CheckIcon = styled.img`
  width: 19.5px;
  height: 20px;
  position: absolute;
  top: 2px;
  right: 4px;
`;

const Separator = styled.hr`
  width: 342px;
  height: 0;
  border: 0;
  border-top: 1px solid #dfdfdf;
`;

const GoalItem = styled.div`
  width: 342px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const GoalCheckbox = styled.img`
  width: 24px;
  height: 24px;
`;
