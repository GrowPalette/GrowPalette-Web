import React from "react";
import styled from "styled-components";

const GoalCreation = () => {
  return <GoalCreationContainer></GoalCreationContainer>;
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
  gap: 16px; /* 요소 간 간격 */
  position: absolute;
  top: 350px; /* 상단 위치 조정 */\
`;
