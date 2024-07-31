import React, { useState } from "react";
import styled from "styled-components";
import DropdownIcon from "../assets/images/dropdown.svg"; // 드롭다운 아이콘 임포트

const YearlyView = () => {
  const [isOpen, setIsOpen] = useState(false); // 드롭다운 열림 상태 관리
  const [selectedYear, setSelectedYear] = useState(null); // 선택된 연도 상태 관리

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // 드롭다운 열림/닫힘 토글
  };

  const handleYearSelect = (year) => {
    setSelectedYear(selectedYear === year ? null : year); // 선택된 연도로 상태 업데이트
  };

  return (
    <YearlyViewContainer>
      <Dropdown onClick={toggleDropdown} isSelected={selectedYear !== null}>
        <DropdownText>
          {selectedYear ? `${selectedYear}년` : "선택"}
        </DropdownText>
        <DropdownIconImg src={DropdownIcon} alt="드롭다운 아이콘" />
      </Dropdown>
      <DropdownContent isOpen={isOpen}>
        {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map(
          (year, index) => (
            <DropdownItem
              key={year}
              onClick={() => handleYearSelect(year)}
              isSelected={year === selectedYear}
              isLastItem={index === 9} // 마지막 항목 여부
            >
              {year}년
            </DropdownItem>
          )
        )}
      </DropdownContent>
    </YearlyViewContainer>
  );
};

export default YearlyView;

const YearlyViewContainer = styled.div`
  position: absolute;
  top: 243px; /* MonthlyView와 동일한 높이로 조정 */
  right: 24px; /* "연간" 탭의 우측 여백 */
  width: 102px;
  height: auto; /* 내용에 따라 자동 조정 */
`;

const Dropdown = styled.div`
  width: 102px;
  height: 36px;
  padding: 8px 16px;
  border-radius: 3px 0 0 0;
  background-color: ${({ isSelected }) =>
    isSelected ? "#C9BC9C" : "#f5f5f5"}; /* 선택 여부에 따른 배경색 */
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DropdownText = styled.span`
  font-size: 16px;
  color: #000000;
`;

const DropdownIconImg = styled.img`
  width: 16px;
  height: 16px;
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 36px; /* 드롭다운 아래에 위치 */
  left: 0;
  width: 100%;
  background-color: #ffffff; /* 흰색 배경 */
  border-radius: 3px;
  box-shadow: 0px 4px 10px 0px #0000001a; /* 그림자 추가 */
  display: ${({ isOpen }) =>
    isOpen ? "block" : "none"}; /* isOpen 상태에 따라 표시 */
  z-index: 10; /* 드롭다운이 다른 요소 위에 보이도록 */
`;

const DropdownItem = styled.div`
  padding: 8px 16px;
  font-size: 16px;
  color: #000000;
  cursor: pointer;
  background-color: ${({ isSelected }) =>
    isSelected ? "#EAEAEA" : "transparent"}; /* 선택된 항목 강조 */
  border-bottom: ${({ isLastItem }) =>
    isLastItem
      ? "none"
      : "1px solid #E0E0E0"}; /* 마지막 항목에는 구분선 없음 */

  &:hover {
    background-color: #f5f5f5; /* 호버 시 배경색 */
  }
`;
