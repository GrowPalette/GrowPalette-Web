import React from "react";
import styled from "styled-components";
import homeIcon from "../assets/images/home.svg";
import writeIcon from "../assets/images/write.svg";
import communityIcon from "../assets/images/community.svg";
import goalIcon from "../assets/images/goal.svg";
import profileIcon from "../assets/images/profile.svg";

const BottomNavbar = () => {
  return (
    <Container>
      <NavItem>
        <Icon src={homeIcon} alt="Home" />
        <Label>HOME</Label>
      </NavItem>
      <NavItem>
        <Icon src={writeIcon} alt="Write" />
        <Label>WRITE</Label>
      </NavItem>
      <NavItem>
        <Icon src={communityIcon} alt="Community" />
        <Label>COMMUNITY</Label>
      </NavItem>
      <NavItem>
        <Icon src={goalIcon} alt="Goal" />
        <Label>GOAL</Label>
      </NavItem>
      <NavItem>
        <Icon src={profileIcon} alt="Profile" />
        <Label>PROFILE</Label>
      </NavItem>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 390px; // #root의 너비에 맞게 조정
  height: 60px; // 높이 설정
  background-color: #fff; // 배경 색상
  border-top: 1px solid #ddd; // 상단 테두리
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1); // 하단 그림자
  z-index: 1000; // 다른 요소 위에 표시되도록 설정
  margin: 0 auto; // 중앙 정렬
  left: calc(50% - 195px); // #root의 중앙에 맞추기 (390px의 절반 - 195px)

  @media (max-width: 389px) {
    height: 50px; // 모바일 화면에서 높이 줄이기
    max-width: 100%; // 모바일 화면에서 너비 100%로 설정
    left: 0; // 모바일 화면에서는 left를 0으로 설정하여 전체 너비를 차지하게 함
    right: 0; // 모바일 화면에서는 right를 0으로 설정하여 전체 너비를 차지하게 함
  }
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;

  @media (max-width: 389px) {
    width: 20px; // 모바일 화면에서 아이콘 크기 줄이기
    height: 20px;
  }
`;

const Label = styled.span`
  font-size: 12px;
  color: #333;
  margin-top: 4px;

  @media (max-width: 389px) {
    font-size: 10px; // 모바일 화면에서 글자 크기 줄이기
  }
`;

export default BottomNavbar;
