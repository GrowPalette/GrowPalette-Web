import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BackButtonImg from "../../assets/images/JaeWoo/ActivityList/뒤로가기버튼.svg";


const Template = () => {
    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleBackButtonClick = () => {
        navigate(-1); // 이전 페이지로 이동
    };

    return (
        <Container>
            <LargeContainer>
                <BackButton onClick={handleBackButtonClick}>
                    <img src={BackButtonImg} alt="뒤로가기 버튼"/>
                </BackButton>

                
            </LargeContainer>
        </Container>
    );
};

export default Template

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const LargeContainer = styled.div`
    width: 21.375rem;
    padding-top: 1.5rem;
`;

const BackButton = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer; /* 클릭 가능한 커서 */
`;