import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import LandingLogo from "../../assets/images/JaeWoo/Landing/랜딩로고.svg";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loginAttempts, setLoginAttempts] = useState(0);
    const navigate = useNavigate();

    const handleLogin = () => {
        if (!email) {
            setError("이메일을 입력해주세요.");
        } else if (!password) {
            setError("비밀번호를 입력해주세요.");
        } else {
            // 로그인 로직 추가
            // 실패 시:
            setLoginAttempts(prev => prev + 1);
            if (loginAttempts >= 4) {
                setError("5회 로그인 실패 시, 로그인이 10분 동안 제한됩니다. (1/5)");
                // 로그인 시도 제한 로직 추가
            }
        }
    };

    const handleSignUp = () => {
        navigate('/signup');
    };

    return (
        <Container>
            <Logo><img src={LandingLogo} alt="로고"/></Logo>
            <EnterEmail 
                type="email" 
                placeholder="이메일" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <EnterPassWord 
                type="password" 
                placeholder="비밀번호" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {error && <Alert>{error}</Alert>}
            <LoginButton onClick={handleLogin}>로그인</LoginButton>
            <SignUpRow>
                <NotMember>아직 Grow Palette의 회원이 아니신가요?</NotMember>
                <GoSignUpButton onClick={handleSignUp}>회원가입하기</GoSignUpButton>
            </SignUpRow>
        </Container>
    );
};

export default Login;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem; /* 패딩 추가 */
    padding-top: 9rem;
`;

const Logo = styled.div`
    margin-bottom: 2rem; /* 로고와 나머지 요소 사이에 간격 추가 */
    height: 10rem;
    margin-bottom: 5rem;
`;

const EnterEmail = styled.input`
    width: 21.375rem;
    height: 2.8125rem;
    padding: 0.875rem;
    border: none;
    border-bottom: 1px solid #ccc;
    margin-bottom: 1rem;
    color: var(--Gray-900, #222);
    font-family: Roboto;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &::placeholder {
        color: #888;
    }

    &:focus {
        border-color: var(--Blue-500, #9FC7C0);
        outline: none;
    }
`;

const EnterPassWord = styled.input`
    width: 21.375rem;
    height: 2.8125rem;
    padding: 0.875rem;
    border: none;
    border-bottom: 1px solid #ccc;
    margin-bottom: 1rem;
    color: var(--Gray-900, #222);
    font-family: Roboto;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &::placeholder {
        color: #888;
    }

    &:focus {
        border-color: var(--Blue-500, #9FC7C0);
        outline: none;
    }
`;

const Alert = styled.div`
    color: #FC3A2D;
    font-family: Roboto;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 1rem;
    width: 100%;
    text-align: left;
`;

const LoginButton = styled.div`
    display: flex;
    width: 21.375rem;
    height: 2.8125rem;
    padding: 0.875rem 8rem;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    border-radius: 0.1875rem;
    background: var(--Blue-500, #9FC7C0);
    color: var(--White, #FFF);
    text-align: center;
    font-family: Roboto;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background: var(--Blue-400, #C7E2DD);
    }
`;

const SignUpRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%; /* Ensure the container takes full width */
    margin-top: 2rem;
`;

const NotMember = styled.div`
    color: var(--Black, #000);
    font-family: Roboto;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const GoSignUpButton = styled.div`
    color: var(--Blue-500, #9FC7C0);
    font-family: Roboto;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
        color: var(--Blue-400, #C7E2DD);
    }
`;