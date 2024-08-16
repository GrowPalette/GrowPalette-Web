import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // useNavigate를 import 합니다.
import LandingLogo from "../../assets/images/JaeWoo/Landing/랜딩로고.svg"

const Landing = () => {
    const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수를 생성합니다.

    const handleFooterClick = () => {
        navigate('/login'); // 클릭 시 로그인 페이지로 이동합니다.
    };

    return (
        <Container onClick={handleFooterClick}> {/* 클릭 시 handleFooterClick 함수 호출 */}
            <ContentContainer>
                <Logo><img src={LandingLogo} alt="로고"/></Logo>
            </ContentContainer>
            <FooterDesign/> 
        </Container>
    );
};

export default Landing;

const Container = styled.div`
    height: 844px; /* 전체 페이지 높이를 844px로 설정 */
    overflow: hidden; /* 넘치는 부분을 숨김 */
    position: relative; /* 자식 요소의 절대 위치를 설정할 때 필요 */
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15rem;
    position: relative;
    z-index: 1; /* FooterDesign보다 위에 표시되도록 설정 */
`;

const Logo = styled.div``;

const FooterDesign = styled.div`
    width: 100%;
    height: 15.9375rem;
    position: absolute; /* 절대 위치 설정 */
    bottom: -5rem; /* 하단에 위치하도록 설정 */
    left: 0; /* 좌측에 정렬 */
    border-radius: 25.5625rem;
    background: linear-gradient(90deg, #C7E2DD -0.01%, #EBDCB8 100%);
    filter: blur(50px);
    z-index: 0; /* ContentContainer보다 아래에 표시되도록 설정 */
    cursor: pointer; /* 클릭할 수 있는 요소로 표시 */
`;