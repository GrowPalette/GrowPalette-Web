import React from "react";
import styled from "styled-components";
import BackButton from "../../components/BackButton"; // BackButton 컴포넌트 임포트

const EnterGoalTerm = () => {
  return (
    <Container>
      <BackButton /> {/* BackButton 컴포넌트 사용 */}
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
`;
