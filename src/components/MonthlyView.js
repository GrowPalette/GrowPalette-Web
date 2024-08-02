import React, { useState } from "react";
import styled from "styled-components";
import DropdownIcon from "../assets/images/dropdown.svg"; // 드롭다운 아이콘 임포트

const MonthlyView = ({ selectedMonth, setSelectedMonth }) => {
  const [isOpen, setIsOpen] = useState(false); // 드롭다운 열림 상태 관리

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // 드롭다운 열림/닫힘 토글
  };

  const handleMonthSelect = (month) => {
    setSelectedMonth((prev) => (prev === month ? null : month)); // 선택된 월 토글
  };

  return (
    <MonthlyViewContainer>
      <Dropdown
        onClick={toggleDropdown}
        isSelected={selectedMonth !== null} // 선택된 상태에 따라 색상 변경
      >
        <DropdownText>
          {selectedMonth ? `${selectedMonth}월` : "선택"}
        </DropdownText>
        <DropdownIconImg src={DropdownIcon} alt="드롭다운 아이콘" />
      </Dropdown>
      <DropdownContent isOpen={isOpen}>
        {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
          <DropdownItem
            key={month}
            onClick={() => handleMonthSelect(month)}
            isSelected={month === selectedMonth} // 선택된 항목 강조
          >
            {month}월
          </DropdownItem>
        ))}
      </DropdownContent>
    </MonthlyViewContainer>
  );
};

export default MonthlyView;

const MonthlyViewContainer = styled.div`
  position: absolute;
  top: 243px; /* EditTermContainer 아래에 위치하도록 조정 */
  left: 46px; /* 원하는 위치에 배치 */
  width: 102px;
  height: auto; /* 내용에 따라 자동 조정 */
`;

const Dropdown = styled.div`
  width: 102px;
  height: 36px;
  padding: 8px 16px;
  border-radius: 3px 0 0 0;
  background-color: ${({ isSelected }) =>
    isSelected ? "#9FC7C0" : "#F5F5F5"}; /* 선택된 상태에 따라 색상 변경 */
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
  border-bottom: 1px solid #dfdfdf; /* 메뉴 아이템 구분선 */

  &:hover {
    background-color: #f5f5f5; /* 호버 시 배경색 */
  }
`;
