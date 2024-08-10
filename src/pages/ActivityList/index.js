import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SearchBox from "./components/ActivityList/SearchBox";
import Ment from "./components/ActivityList/Ment";
import ActivityReportTabContainer from "./components/ActivityList/TabComponents/ActivityReportTabContainer";
import EnterIcon from "../../../src/assets/images/JaeWoo/ActivityList/EnterIcon.svg";

const ActivityList = () => {
    // useNavigate 훅을 사용하여 navigate 함수 생성
    const navigate = useNavigate();

    // 클릭 이벤트 핸들러 함수
    const handleEnterClick = () => {
        navigate("/enter_activity");
    };

    return (
        <Container>
            <GrowPaletteLogo>
                <img src="/images/로고.svg" alt="logo"/>                
            </GrowPaletteLogo>
            <SearchBox/>
            <MentEnterRow>
                <Ment>
                </Ment>
                <Enter onClick={handleEnterClick}>
                    <img src={EnterIcon} alt="EnterLogo" />
                </Enter>
            </MentEnterRow>
            <ActivityReportTabContainer/>
        </Container>
    );
};

export default ActivityList;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
`

const GrowPaletteLogo = styled.div`
    display: flex;
    width: 6.4375rem;
    height: 1.9375rem;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
`

const MentEnterRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 21.375rem;
    justify-content: space-between;
    margin-top: 2rem;
`

const Enter = styled.div`
    width: 1.25rem;
    height: 1.25rem;
    cursor: pointer; /* 클릭할 수 있음을 나타냄 */
`