import React from "react";
import styled from "styled-components";
import background from "../../assets/images/SplashEdit2.svg"; // 배경 이미지 경로
import logoImage from "../../assets/images/logo.svg"; // 로고 이미지 경로

const Landing = () => {
  return (
    <Container>
      <Logo src={logoImage} alt="Logo" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 92vh;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 20px;
`;

const Logo = styled.img`
  width: 255px;
  height: 104px;
  margin-bottom: 20px;
`;

export default Landing; // Landing 컴포넌트를 기본 내보내기
