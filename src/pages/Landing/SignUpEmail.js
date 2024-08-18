import React from "react";
import styled from "styled-components";
import backIcon from "../../assets/images/Back.svg";
import JoinIcon from "../../assets/images/Join.svg";
import lineIcon from "../../assets/images/Ing1.svg";

const SignUpEmail = () => {
  return (
    <Container>
      <Header>
        <BackButton src={backIcon} alt="뒤로가기" />
        <JoinButton src={JoinIcon} alt="조인" />
      </Header>
      <LineImage src={lineIcon} alt="진행" />
      <Content>
        <Subtitle>인증 번호를 입력해주세요.</Subtitle>
        <InputContainer>
          <Input type="email" />
        </InputContainer>
      </Content>
      <ButtonWrapper>
        <Button>인증번호 전송</Button>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  height: 708px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-top: 71px;
  margin-left: 24px;
  margin-bottom: 24px;
`;

const BackButton = styled.img`
  width: 36px;
  height: 36px;
`;

const JoinButton = styled.img`
  padding: 10px;
  background-repeat: no-repeat;
  background-position: 10px center;
  padding-left: 16px; //아이콘 공간
`;

const LineImage = styled.img`
  width: 100%;
  height: 2px;
  margin-bottom: 73px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

const Subtitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const InputContainer = styled.div`
  width: 100%;
  margin-top: 24px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid #6f6f6f;
  font-size: 16px;
  box-sizing: border-box;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: auto;
  padding: 24px;
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #9fc7c0;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
  color: white;
`;

export default SignUpEmail;
