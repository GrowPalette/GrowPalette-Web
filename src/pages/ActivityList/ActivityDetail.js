/* /activity_detail */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackButtonImg from "../../assets/images/JaeWoo/ActivityList/뒤로가기버튼.svg";

import DeleteIcon from "../../assets/images/JaeWoo/ActivityList/활동삭제버튼.svg";
import EditIcon from "../../assets/images/JaeWoo/ActivityList/활동상세제목수정.svg";
import RightArrowIcon from "../../assets/images/JaeWoo/ActivityList/RightArrow.svg";

import BookIcon from "../../assets/images/JaeWoo/ActivityList/책아이콘.svg";
import CalendarIcon from "../../assets/images/JaeWoo/ActivityList/달력아이콘.svg";
import GlassesIcon from "../../assets/images/JaeWoo/ActivityList/안경아이콘.svg";

const ActivityDetail = () => {
    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleBackButtonClick = () => {
        navigate(-1); // 이전 페이지로 이동
    };

    return (
        <Container>
            <LargeContainer>

                <HeaderButtonContainerRow>
                    <BackButton onClick={handleBackButtonClick}>
                        <img src={BackButtonImg} alt="뒤로가기 버튼"/>
                    </BackButton>

                    <DeleteButton>
                        <img src={DeleteIcon} alt="활동삭제버튼"/>
                    </DeleteButton>
                </HeaderButtonContainerRow>

                <ImageBox>

                </ImageBox>
                
                <ColumnContainer>
                    <TitleRow>
                        <TitleContainer>
                            활동제목 들어가는 곳
                        </TitleContainer>
                        <EditButton>
                            <img src={EditIcon} alt="수정버튼"/>
                        </EditButton>
                    </TitleRow>

                    <TagContainer>
                        태그 들어가는 곳
                    </TagContainer>

                    <SummarizeContainer>
                        5월을 알차게 보냈다 (활동한줄 요약 들어가는곳)
                    </SummarizeContainer>

                    <DetailRecordContainerColumn>
                        <TitleContainer>
                            세부기록
                        </TitleContainer>

                        <MultipleDetailRecordColumn>

                            <DetailRecordContainerRow>
                                <DetailRecordIcon><img src={BookIcon} alt="책 아이콘"/></DetailRecordIcon>
                                <DetailRecordTitleDateColumn>
                                    <DetailRecordTitle>5월 스터디 아카이빙(세부기록 제목)</DetailRecordTitle>
                                    <DetailRecordDate>2024-06-01</DetailRecordDate>
                                </DetailRecordTitleDateColumn>
                            </DetailRecordContainerRow>

                            <DetailRecordContainerRow>

                            </DetailRecordContainerRow>

                        </MultipleDetailRecordColumn>
                    </DetailRecordContainerColumn>

                    <TitleRow>
                        <TitleContainer>성장일지 보기</TitleContainer>
                        <GoGrowthButton><img src={RightArrowIcon} alt="오른쪽 버튼"/></GoGrowthButton>
                    </TitleRow>


                </ColumnContainer>

            </LargeContainer>
        </Container>
    );
};

export default ActivityDetail;

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const LargeContainer = styled.div`
    width: 21.375rem;
    padding-top: 1.5rem;
`;

const HeaderButtonContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 2rem;
`

const BackButton = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer; /* 클릭 가능한 커서 */
`;

const DeleteButton = styled.div`
    width: 1.5rem;
    height: 1.5rem;
`

const ImageBox = styled.div`
    width: 21.375rem;
    height: 21.375rem;
    flex-shrink: 0;
    border-radius: 0.1875rem;
    background: var(--Gray-100, #F5F5F5);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
`;

const TitleContainer = styled.div`
    color: var(--Black, #000);
    font-family: Roboto;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const SummarizeContainer = styled.div`
    margin-top: 1rem;
    background-color: skyblue;
`;

const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

const TitleRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const EditButton = styled.div`
    width: 1.5rem;
    height: 1.5rem;
`

const TagContainer = styled.div`
    height: 4rem;
    background-color: grey;
`

const DetailRecordContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const MultipleDetailRecordColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const DetailRecordContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.7rem;

    width: 21.375rem;
    height: 5.875rem;
    flex-shrink: 0;
    border-radius: 0.1875rem;
    border: 1px solid var(--Gray-200, #DFDFDF);

    padding-left: 1rem;
`

const DetailRecordIcon = styled.div`
    display: flex;
    width: 3rem;
    height: 3rem;
    justify-content: center;
    align-items: center;
`

const DetailRecordTitleDateColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.7rem;
`

const DetailRecordTitle = styled.div`
    color: var(--Black, #000);
    font-family: Roboto;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const DetailRecordDate = styled.div`
    color: var(--Gray-700, #6F6F6F);
    font-family: Roboto;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const GoGrowthButton = styled.div`
    width: 1.5rem;
    height: 1.5rem;
`