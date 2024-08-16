/* /enter_activity_category */

import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BackButtonImg from "../../assets/images/JaeWoo/ActivityList/뒤로가기버튼.svg";
import CategoryIcon from "../../assets/images/JaeWoo/ActivityList/CategoryIcon.svg";

const EnterActivityCategory = () => {
    const navigate = useNavigate(); // useNavigate 훅 사용
    const [selectedCategories, setSelectedCategories] = useState([]);

    const categories = ["동아리", "스터디", "대외활동", "어학", "전공", "취미", "기타", "시험", "공모전", "자격증"];

    const handleBackButtonClick = () => {
        navigate(-1); // 이전 페이지로 이동
    };

    const handleCategoryClick = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(c => c !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const handleApplyClick = () => {
        navigate('/enter_activity'); // 버튼 클릭 시 이동
    };

    return (
        <Container>
            <LargeContainer>

                <BackButton onClick={handleBackButtonClick}>
                    <img src={BackButtonImg} alt="뒤로가기 버튼"/>
                </BackButton>

                <CategoryContainer>
                    <img src={CategoryIcon} alt="카테고리 아이콘"/>
                </CategoryContainer>

                <CategoriesContainer>
                    {categories.map((category, index) => (
                        <CategoryBox
                            key={index}
                            selected={selectedCategories.includes(category)}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </CategoryBox>
                    ))}
                </CategoriesContainer>

            </LargeContainer>
            <ApplyButton onClick={handleApplyClick}>
                    적용
            </ApplyButton>
        </Container>
    );
};

export default EnterActivityCategory;

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
    cursor: pointer; /* 클릭 가능한 커서 */
`;

const CategoryContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; /* 중앙 정렬 */
`;

const CategoriesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
`;

const CategoryBox = styled.div`
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
    margin-top: 65%;
    cursor: pointer; /* 클릭 가능한 커서 */
    margin-top: 115%;
`