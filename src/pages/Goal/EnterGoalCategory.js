import React, { useState } from "react";
import styled from "styled-components";
import backIcon from "../../assets/images/back.svg";
import categoryIcon from "../../assets/images/categoryIcon.svg";

const EnterGoalCategory = () => {
  const [selectedTag, setSelectedTag] = useState(null); // 선택된 태그를 상태로 관리

  const handleTagClick = (tag) => {
    // 클릭된 태그가 현재 선택된 태그와 같으면 선택 취소
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag); // 클릭한 태그를 선택된 태그로 설정
    }
  };

  return (
    <Container>
      <BackContainer>
        <StyledBackIcon src={backIcon} alt="뒤로가기" />
        <BackText>Back</BackText>
      </BackContainer>
      <CategoryContainer>
        <StyledCategoryIcon src={categoryIcon} alt="카테고리 아이콘" />
        <CategoryText>카테고리</CategoryText>
      </CategoryContainer>
      <CategoryTagContainer>
        {tags.map((tag, index) => (
          <TagBox
            key={index}
            isSelected={selectedTag === tag}
            onClick={() => handleTagClick(tag)}
          >
            <TagText>{tag}</TagText>
          </TagBox>
        ))}
      </CategoryTagContainer>
    </Container>
  );
};

const tags = [
  "동아리",
  "스터디",
  "대외활동",
  "어학",
  "전공",
  "취미",
  "기타",
  "시험",
  "공모전",
  "자격증",
];

export default EnterGoalCategory;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const BackContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 71px;
  left: 24px;
  gap: 12px;
`;

const StyledBackIcon = styled.img`
  width: 72px;
  height: 24px;
`;

const BackText = styled.span`
  font-size: 16px;
`;

const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 110px;
  left: 24px;
  gap: 12px;
`;

const StyledCategoryIcon = styled.img`
  width: 72px;
  height: 24px;
`;

const CategoryText = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const CategoryTagContainer = styled.div`
  display: flex; // flexbox를 사용하여 박스가 자동으로 줄 바꿈 되도록 설정
  flex-wrap: wrap; // 여러 줄로 감싸지도록 설정
  gap: 12px; // 박스 사이의 간격
  position: absolute;
  top: 160px; // CategoryContainer 아래에 위치하도록 설정
  left: 24px;
  width: calc(100% - 48px); // 좌우 여백을 제외한 너비
`;

const TagBox = styled.div`
  background-color: ${({ isSelected }) =>
    isSelected ? "#9FC7C0" : "#dfdfdf"}; // 선택된 박스는 색상 변경
  border-radius: 4px; // 모든 모서리를 4px로 둥글게 설정
  padding: 8px 12px; // 여백 설정
  box-sizing: border-box; // 패딩과 테두리를 너비에 포함
  display: flex; // 플렉스 컨테이너로 설정
  align-items: center;
  justify-content: center; //박스 안 텍스트 가운데정렬
  text-align: center;
  height: 32px; // 고정 높이
  cursor: pointer; // 클릭 가능한 영역임을 표시
`;

const TagText = styled.span`
  font-size: 14px; // 태그 텍스트 크기
  color: #000; // 검정색 글씨
  margin: 0 10px; // 좌우 여백 설정
`;
