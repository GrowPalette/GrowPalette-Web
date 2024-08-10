import React, { useState } from "react";
import styled from "styled-components";
import ReportTabDummyImg from "../../../../../assets/images/JaeWoo/ActivityList/ReportTabDummy.svg";

const ActivityTab = () => {
    // 드롭다운 열림/닫힘 상태를 관리하기 위한 상태 변수
    const [isOpen, setIsOpen] = useState(false);

    // 드롭다운을 열고 닫는 함수
    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <Container>
            <AlignPaddingContainer>
                <AlignDropDown onClick={toggleDropdown}>
                    정렬 기준
                    <DropdownIcon />
                    {isOpen && (
                        <DropdownMenu>
                            <DropdownItem>카테고리 순</DropdownItem>
                            <DropdownItem>최근 업로드 순</DropdownItem>
                            <DropdownItem>가나다 순</DropdownItem>
                        </DropdownMenu>
                    )}
                </AlignDropDown>
            </AlignPaddingContainer>

            <ActivityBoxRow>
                <ActivityN>
                    <Thumbnail>
                        <Date>2024.05.16</Date>
                        <img src={ReportTabDummyImg} alt="활동보기 더미 이미지"/>
                    </Thumbnail>
                    <ActivityTitle>
                        제목입니다.
                    </ActivityTitle>
                    <Tags>
                        태그 들어갈 자리
                    </Tags>
                </ActivityN>
            </ActivityBoxRow>
        </Container>
    );
};

// styled-components를 사용하여 스타일 정의
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 21.375rem;
`;

const AlignPaddingContainer = styled.div`
    padding-left: 70%;
`

const AlignDropDown = styled.div`
    position: relative; /* 드롭다운 메뉴의 위치를 위해 상대 위치 설정 */
    display: flex;
    align-items: center;
    background-color: #fff; /* 하얀색 배경 */
    border: none; /* 경계선 없음 */
    border-radius: 0.25rem; /* 둥근 모서리 */
    padding: 0.5rem 1rem;
    cursor: pointer;
    margin-right: 0; /* 오른쪽 여백 없음 */
    width: 7.4rem;
`;

const DropdownIcon = styled.div`
    width: 0; 
    height: 0; 
    margin-left: 0.5rem; 
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-top: 0.5rem solid #999; /* 회색 역삼각형 */
    margin-left: auto; /* 버튼의 오른쪽 끝으로 이동 */
`;

const DropdownMenu = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 0.25rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    width: 100%;
    z-index: 10; /* 높은 z-index로 설정하여 다른 요소 위에 표시되도록 함 */
`;

const DropdownItem = styled.div`
    padding: 0.5rem 1rem;
    font-family: Roboto;
    font-size: 0.875rem;
    color: #333;
    cursor: pointer;
    &:hover {
        background-color: #f0f0f0; /* 호버 시 배경색 변경 */
    }
`;

const ActivityBoxRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1rem; /* 위쪽 여백 추가 */
`;

const ActivityN = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.7rem;
`;

const Thumbnail = styled.div`
    width: 10.3125rem;
    height: 9.8125rem;
    position: relative; /* position: relative로 설정하여 내부의 절대 위치 요소에 대한 기준을 제공합니다 */
    border-radius: 0.1875rem 0.1875rem 0rem 0rem;
`;

const Date = styled.div`
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    color: white;
    font-family: Roboto;
    font-size: 0.75rem;
    font-weight: 700;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0.2rem 0.5rem;
    border-radius: 0.2rem;
    z-index: 0; /* 낮은 z-index로 설정하여 드롭다운이 위에 표시되도록 함 */
`;

const ActivityTitle = styled.div`
    color: var(--Gray-900, #222);
    font-family: Roboto;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const Tags = styled.div`
    /* 스타일 추가 필요 */
`;

export default ActivityTab;