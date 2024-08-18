import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AgreementScreen = () => {
  const navigate = useNavigate();
  const [checkAll, setCheckAll] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [isChecked, setCheck] = useState(false);

  useEffect(() => {
    // setCheck(check1 && check2 && check3);
  }, [check1, check2, check3]);

  useEffect(() => {
    // setCheckAll(check1 && check2 && check3 && check4);
  }, [check1, check2, check3, check4]);

  const handleClickNext = (e) => {
    e.stopPropagation();
    e.preventDefault();
    navigate("/signup");
  };

  const handleClickAll = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCheck1(e.target.value);
    setCheck2(e.target.value);
    setCheck3(e.target.value);
    setCheck4(e.target.value);
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={(e) => [e.preventDefault, navigate(-1)]}>
          ←
        </BackButton>
        <Title onClick={(e) => [e.preventDefault, navigate(-1)]}>Join</Title>
      </Header>
      <Subtitle>Grow Palette</Subtitle>
      <Subtitle>서비스 이용약관</Subtitle>
      <List>
        <ListItem>
          <Checkbox
            id="checkAll"
            checked={check1 && check2 && check3 && check4}
            value={check1 && check2 && check3 && check4}
            onChange={(e) => [
              setCheck1(e.target.value),
              setCheck2(e.target.value),
              setCheck3(e.target.value),
              setCheck4(e.target.value),
            ]}
          />
          <Checkbox.Lable htmlFor="checkAll">
            모두 동의 (선택 정보 포함)
          </Checkbox.Lable>
        </ListItem>
        <ListItem>
          <Checkbox
            id="check1"
            checked={check1}
            value={check1}
            onChange={(e) => {
              console.log(e.target.value);
              setCheck1(e.target.value);
            }}
          />
          <Checkbox.Lable htmlFor="check1">
            만 14세 이상입니다. (필수)
          </Checkbox.Lable>
          <Terms>보기</Terms>
        </ListItem>
        <ListItem>
          <Checkbox
            id="check2"
            checked={check2}
            value={check2}
            onChange={(e) => setCheck2(e.target.value)}
          />
          <Checkbox.Lable htmlFor="check2">
            서비스 이용약관에 동의 (필수)
          </Checkbox.Lable>
          <Terms>보기</Terms>
        </ListItem>
        <ListItem>
          <Checkbox
            id="check3"
            checked={check3}
            value={check3}
            onChange={(e) => setCheck3(e.target.value)}
          />
          <Checkbox.Lable htmlFor="check3">
            개인정보 수집 및 이용에 동의 (필수)
          </Checkbox.Lable>
          <Terms>보기</Terms>
        </ListItem>
        <ListItem>
          <Checkbox
            id="check4"
            checked={check4}
            value={check4}
            onChange={(e) => setCheck4(e.target.value)}
          />
          <Checkbox.Lable htmlFor="check4">
            광고 및 마케팅 수신에 동의 (선택)
          </Checkbox.Lable>
          <Terms>보기</Terms>
        </ListItem>
      </List>
      <Button
        className={isChecked ? "" : "disabled"}
        onClick={(e) => handleClickNext(e)}
      >
        다음
      </Button>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  background-color: white;
  height: 92vh;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

const BackButton = styled.span`
  font-size: 16px;
  margin-right: 10px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;

const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: 16px;
  margin: 10px 0;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 10px;
`;
Checkbox.Lable = styled.label``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #9fc7c0;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  transition: background-color 0.3s;

  &.disabled {
    background-color: #c7e2dd;
    cursor: default;
  }
`;

const Terms = styled.span`
  float: right;
  cursor: pointer;
  text-decoration: underline;
`;

export default AgreementScreen;
