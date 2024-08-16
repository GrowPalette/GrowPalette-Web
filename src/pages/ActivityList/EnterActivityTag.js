/* /enter_activity_tag */

import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BackButtonImg from "../../assets/images/JaeWoo/ActivityList/뒤로가기버튼.svg";
import TagIcon from "../../assets/images/JaeWoo/ActivityList/TagIcon.svg";

const EnterActivityTag = () => {
    const navigate = useNavigate(); // useNavigate hook
    const [selectedTags, setSelectedTags] = useState([]);

    const tags = ["IT", "기획", "마케팅", "코딩", "HR", "교육", "기타", "영업", "경영"];

    const handleBackButtonClick = () => {
        navigate(-1); // Navigate to the previous page
    };

    const handleTagClick = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(t => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    const handleApplyClick = () => {
        navigate('/enter_activity'); // 버튼 클릭 시 이동
    };

    return (
        <Container>
            <LargeContainer>
                <BackButton onClick={handleBackButtonClick}>
                    <img src={BackButtonImg} alt="뒤로가기 버튼" />
                </BackButton>

                <TagContainer>
                    <img src={TagIcon} alt="태그 아이콘" />
                </TagContainer>

                <TagsContainer>
                    {tags.map((tag, index) => (
                        <TagBox
                            key={index}
                            selected={selectedTags.includes(tag)}
                            onClick={() => handleTagClick(tag)}
                        >
                            {tag}
                        </TagBox>
                    ))}
                </TagsContainer>

            </LargeContainer>
            <ApplyButton onClick={handleApplyClick}>
                적용
            </ApplyButton>
        </Container>
    );
};

export default EnterActivityTag;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LargeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 21.375rem;
    padding-top: 1.5rem;
    gap: 3rem;
`;

const BackButton = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
`;

const TagContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
`;

const TagBox = styled.div`
    display: flex;
    padding: 0.5rem 1.5rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.1875rem;
    background: ${({ selected }) => (selected ? 'var(--Blue-500, #9FC7C0)' : 'var(--Gray-200, #DFDFDF)')};
    color: var(--Gray-900, #222);
    font-family: Roboto;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
    transition: background 0.3s;
`;

const ApplyButton = styled.div`
    display: flex;
    width: 21.375rem;
    height: 3.5rem;
    padding: 0.875rem 4.25rem;
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
    margin-top: 115%;
    cursor: pointer; /* 클릭 가능한 커서 */
`