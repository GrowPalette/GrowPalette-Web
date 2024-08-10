import React from "react";
import styled from "styled-components";
import SearchBox from "./components/ActivityList/SearchBox";
import Ment from "./components/ActivityList/Ment";
import ActivityReportTabContainer from "./components/ActivityList/TabComponents/ActivityReportTabContainer";
import EnterIcon from "../../../src/assets/images/JaeWoo/ActivityList/EnterIcon.svg";


const ActivityList = () => {
    return (
        <Container>
            <GrowPaletteLogo>
                <img src="/images/로고.svg" alt="logo"/>                
            </GrowPaletteLogo>
            <SearchBox/>
            <MentEnterRow>
                <Ment>
                </Ment>
                <Enter>
                    <img src={EnterIcon} alt="EnterLogo" />
                </Enter>
            </MentEnterRow>
            <ActivityReportTabContainer/>
        </Container>
    );
};

export default ActivityList

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
`