import React, { useState } from "react";
import styled from "styled-components";
import BackButtonImg from "../../assets/images/JaeWoo/ActivityList/뒤로가기버튼.svg";
import TitleIcon from "../../assets/images/JaeWoo/ActivityList/TitleIcon.svg";
import TagIcon from "../../assets/images/JaeWoo/ActivityList/TagIcon.svg";
import TermIcon from "../../assets/images/JaeWoo/ActivityList/TermIcon.svg";
import CategoryIcon from "../../assets/images/JaeWoo/ActivityList/CategoryIcon.svg";
import SummarizeIcon from "../../assets/images/JaeWoo/ActivityList/SummerizeIcon.svg";
import AddTermButton from "../../assets/images/JaeWoo/ActivityList/기간추가버튼.svg";
import AddCategoryButton from "../../assets/images/JaeWoo/ActivityList/카테고리추가버튼.svg";

import DetailWriteIcon from "../../assets/images/JaeWoo/ActivityList/세부기록작성.svg";
import DetailWriteButton from "../../assets/images/JaeWoo/ActivityList/세부기록작성버튼.svg";
import GrowthIcon from "../../assets/images/JaeWoo/ActivityList/성장일지작성.svg";
import GrowthButton from "../../assets/images/JaeWoo/ActivityList/성장일지작성버튼.svg";




const EnterActivity = () => {
    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    return (
        <Container>
            <LargeContainer>

                <BackButton>
                    <img src={BackButtonImg} alt="뒤로가기 버튼"/>
                </BackButton>

                <ImageInsertColumn>
                    <ImageBox>
                        {image && <img src={image} alt="선택된 이미지" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
                    </ImageBox>
                    <InsertButton onClick={() => document.getElementById('fileInput').click()}>
                        사진 변경
                    </InsertButton>
                    <input
                        id="fileInput"
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                    />
                </ImageInsertColumn>
                
                <ColumnContainer>
                    <TitleContainer>
                        <Subtitle>
                            <img src={TitleIcon} alt="제목 아이콘"/>
                            <Input placeholder="활동 제목을 입력해주세요" />
                        </Subtitle>
                    </TitleContainer>

                    <TagContainer>
                        <Subtitle>
                            <img src={TagIcon} alt="태그 아이콘"/>
                            <Input placeholder="키워드를 선택해주세요" />
                        </Subtitle>
                    </TagContainer>

                    <TermContainer>
                        <img src={TermIcon} alt="기간 아이콘"/>
                        <img src={AddTermButton} alt="기간 추가버튼"/>
                    </TermContainer>

                    <CategoryContainer>
                        <img src={CategoryIcon} alt="카테고리 아이콘"/>
                        <img src={AddCategoryButton} alt="카테고리 추가버튼"/>
                    </CategoryContainer>

                    <SummarizeContainer>
                        <Subtitle>
                            <img src={SummarizeIcon} alt="활동 한줄 요약 아이콘"/>
                            <Input placeholder="활동을 한줄로 요약해주세요" />
                        </Subtitle>
                    </SummarizeContainer>

                    <DetailWriteContainer>
                        <img src={DetailWriteIcon} alt="세부기록 작성 아이콘"/>
                        <img src={DetailWriteButton} alt="세부기록 작성하러가기 버튼"/>
                    </DetailWriteContainer>

                    <GrowthContainer>
                        <img src={GrowthIcon} alt="성장일지 작성 아이콘"/>
                        <img src={GrowthButton} alt="성장일지 작성하러가기 버튼"/>
                    </GrowthContainer>                
                </ColumnContainer>

                <ButtonContainerRow>
                    <CancelButton>
                        취소
                    </CancelButton>
                    <UploadButton>
                        업로드
                    </UploadButton>

                </ButtonContainerRow>
            </LargeContainer>
        </Container>
    );
};

export default EnterActivity;

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
`;

const ImageInsertColumn = styled.div`
    width: 21.375rem;
    height: 21.375rem;
    flex-shrink: 0;
    border-radius: 0.1875rem;
    background: var(--Gray-100, #F5F5F5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`;

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
`;

const InsertButton = styled.div`
    display: flex;
    width: 21.375rem;
    height: 2.9375rem;
    padding: 0.875rem 0rem;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 0rem 0rem 0.1875rem 0.1875rem;
    background: rgba(238, 238, 238, 0.50);
    position: absolute;
    bottom: 0;
    cursor: pointer;
`;

const Subtitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* 왼쪽 정렬 */
    width: 100%;
    margin-bottom: 1rem;
    position: relative;
    gap: 1rem;
`;

const Input = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid var(--Gray-200, #DFDFDF); /* 회색 줄 */
    background: none;
    padding: 0.5rem 0;
    font-family: Roboto;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: #000; /* 입력할 때 텍스트 색상 */
    
    &:focus {
        outline: none; /* 포커스 시 아웃라인 제거 */
        border-bottom: 1px solid #000; /* 포커스 시 밑줄 색상 */
    }
`;

const TitleContainer = styled.div`

`;

const TagContainer = styled.div`

`;

const TermContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CategoryContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
`;

const SummarizeContainer = styled.div`
    margin-top: 1rem;
`;

const DetailWriteContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const GrowthContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
`;

const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
`

const ButtonContainerRow = styled.div`
    display: flex;
    margin-bottom: 2rem;
    justify-content: space-between;
`

const CancelButton = styled.div`
    display: flex;
    width: 10.375rem;
    height: 2.9375rem;
    padding: 0.875rem;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    flex-shrink: 0;
    border-radius: 0.1875rem;
    border: 0.5px solid var(--Gray-900, #222);
    color: var(--Gray-900, #222);
    font-family: Roboto;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const UploadButton = styled.div`
    display: flex;
    width: 10.375rem;
    height: 2.9375rem;
    padding: 0.875rem;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    flex-shrink: 0;
    border-radius: 0.1875rem;
    background: var(--Gray-900, #222);
    color: var(--White, #FFF);
    font-family: Roboto;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

