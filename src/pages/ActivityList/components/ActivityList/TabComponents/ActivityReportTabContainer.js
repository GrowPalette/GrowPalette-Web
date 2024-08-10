import React, { useState } from "react";
import styled from "styled-components";
import ActivityTab from "./ActivityTab";
import ReportTab from "./ReportTab";

const ActivityReportContainer = () => {
    // 탭 선택 상태를 관리하기 위한 상태 변수
    const [activeTab, setActiveTab] = useState("activity");

    // 탭을 선택할 때 호출되는 함수
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <Container>
            <TabContainerRow>
                <TabButton
                    isActive={activeTab === "activity"}
                    onClick={() => handleTabClick("activity")}
                >
                    활동 보기
                </TabButton>
                <TabButton
                    isActive={activeTab === "report"}
                    onClick={() => handleTabClick("report")}
                >
                    리포트 보기
                </TabButton>
            </TabContainerRow>
            <ContentContainer>
                {activeTab === "activity" && <ActivityTab />}
                {activeTab === "report" && <ReportTab />}
            </ContentContainer>
        </Container>
    );
};

// styled-components를 사용하여 스타일 정의
const Container = styled.div`
    width: 21.375rem;
    margin-top: 2rem;
`;

const TabContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    border-bottom: 1px solid #000; /* 아래쪽 경계선 */
`;

const TabButton = styled.div`
    color: var(--Black, #000);
    font-family: Roboto, sans-serif;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 0.5rem 3.5rem;
    cursor: pointer;
    border-bottom: ${(props) => (props.isActive ? "2px solid #000" : "none")};
    transition: border-bottom 0.3s;

    &:hover {
        border-bottom: 2px solid #000;
    }
`;

const ContentContainer = styled.div`
    margin-top: 1rem;
`;

export default ActivityReportContainer;