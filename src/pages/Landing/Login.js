import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loginFailCnt, setLoginFailCnt] = useState(0);
  const [isCompleted, setComplete] = useState(false);
  const navigate = useNavigate();
  const emailErrorMsg = "아이디를 입력해주세요";
  const passwordErrorMsg = "비밀번호를 입력해주세요";
  const loginFailErrMsg = `5회 로그인 실패 시, 로그인이 10분 동안 제한됩니다.${loginFailCnt}/5`;
  const tryLaterErrMsg =
    "로그인 시도 가능 횟수를 초과했습니다. 10분 뒤 다시 시도해주세요.";

  useEffect(() => {
    const token = localStorage.getItem("tok en");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    if (email && password) {
      // 아이디 패스워드 모두 입력
      setErrorMessage("");
      setComplete(true);
    } else if (!email && !password) {
      // 아이디 패스워드 모두 미입력
      setErrorMessage("");
      setComplete(false);
    } else if (email && !password) {
      // 아이디 입력 패스워드 미입력
      setErrorMessage(passwordErrorMsg);
      setComplete(false);
    } else if (password && !email) {
      // 아이디 미입력 패스워드 입력
      setErrorMessage(emailErrorMsg);
      setComplete(false);
    }
  }, [email, password]);

  const handleLogin = async () => {
    try {
      // TODO API 작업 끝나면 수정 필요
      const response = await axios.post("/users/login", {
        email,
        password,
      });
      if (response.httpStatus === 200) {
        // 로그인 성공
        const token = response.data.token;
        localStorage.setItem("token", token);
        // navigate("/");
        setLoginFailCnt(0);
        setErrorMessage("");
      } else {
        // 로그인 실패
        const cnt = loginFailCnt + 1;
        setLoginFailCnt(cnt);
        if (cnt >= 5) setErrorMessage(tryLaterErrMsg);
        else setErrorMessage(loginFailErrMsg);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
      } else {
      }
    }
  };

  return (
    <Container>
      <Logo src={logo} alt="Logo" />
      <div style={{ marginBottom: "31px" }}> </div>
      <Input
        type="email"
        placeholder="이메일"
        onChange={(e) => [
          e.stopPropagation(),
          e.preventDefault(),
          setEmail(e.target.value),
        ]}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        onChange={(e) => [
          e.stopPropagation(),
          e.preventDefault(),
          setPassword(e.target.value),
        ]}
      />
      <div style={{ marginBottom: "10px" }}> </div>
      <ErrorText>{errorMessage}</ErrorText>
      <div style={{ marginBottom: "31px" }}> </div>
      <Button
        className={isCompleted ? "" : "disabled"}
        onClick={(e) => [
          e.stopPropagation(),
          e.preventDefault(),
          handleLogin(),
        ]}
      >
        로그인
      </Button>
      <FooterText>
        아직 Grow Palette의 회원이 아니신가요?{" "}
        <Link href="/agreement" onClick={(e) => {}}>
          회원가입하기
        </Link>
      </FooterText>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 103vh;
  padding: 20px;
`;

const Logo = styled.img`
  width: 255px; // 로고의 너비
  height: 104px; // 로고의 높이
  margin-bottom: 150px; // 아래 여백
  position: absolute; // 절대 위치 설정
  top: 172px; // Y 좌표
  left: 67px; // X 좌표
`;

const Input = styled.input`
  width: 100%;
  margin: 10px 0;
  padding-bottom: 8px;
  border: none;
  border-bottom: 1px solid #222222;
  &:focus {
    outline: none;
  }
`;

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

const FooterText = styled.p`
  margin-top: 40px;
  margin-bottom: 70px;
  font-size: 14px;
  color: #4a4a4a;
`;

const Link = styled.a`
  color: #000000;
  text-decoration: underline;
  margin-left: 43px;
`;
const ErrorText = styled.div`
  width: 100%;
  color: #fc3a2d;
  font-size: 12px;
`;

export default Login;
