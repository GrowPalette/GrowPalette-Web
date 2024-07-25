import React from "react";
import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil"; // RecoilRoot를 추가하여 Recoil 상태를 전역적으로 관리합니다

// pages
import Landing from "./pages/Landing";
import Login from "./pages/Landing/Login";
import Agreement from "./pages/Landing/Agreement";
import SignUp from "./pages/Landing/SignUp";

import OnBoarding from "./pages/OnBoarding";
import OnBoardingNext from "./pages/OnBoarding/OnBoardingNext";
import OnBoardingSuccess from "./pages/OnBoarding/OnBoardingSuccess";

import ActivityList from "./pages/ActivityList";
import EnterActivity from "./pages/ActivityList/EnterActivity";
import EnterActivityCategory from "./pages/ActivityList/EnterActivityCategory";
import EnterActivityDetail from "./pages/ActivityList/EnterActivityDetail";
import EnterActivityTerm from "./pages/ActivityList/EnterActivityTerm";

import ActivityDetail from "./pages/ActivityList/ActivityDetail"; // 얘는 id로 받아야할듯 ?

import GrowthAi from "./pages/ActivityList/GrowthAi";

import MyPage from "./pages/MyPage";
import MyPageEdit from "./pages/MyPage/MyPageEdit";
import MyPageSettings from "./pages/MyPage/MyPageSettings";

import Goal from "./pages/Goal";
import EnterGoal from "./pages/Goal/EnterGoal";
import EnterGoalCategory from "./pages/Goal/EnterGoalCategory";
import EnterGoalTerm from "./pages/Goal/EnterGoalTerm";
import GoalDone from "./pages/Goal/GoalDone";

//components (Recoil managed)
// import BottomNavbar from "./components/BottomNavbar"; // BottomNavbar를 임포트합니다

function App() {
  return (
    <RecoilRoot>
      <div style={{ position: "relative", minHeight: "100vh" }}>
        <Routes>
          {/* Landing */}
          <Route index element={<Landing />} />
          {/* 로그인 페이지 */}
          <Route path="/login" element={<Login />} />
          {/* 약관 페이지 */}
          <Route path="/agreement" element={<Agreement />} /> {/* 오타 수정 */}
          {/* 회원가입 페이지 */}
          <Route path="/signup" element={<SignUp />} />
          {/* OnBoarding */}
          <Route path="/onboarding" element={<OnBoarding />} />
          <Route path="/onboarding_next" element={<OnBoardingNext />} />
          <Route path="/onboarding_success" element={<OnBoardingSuccess />} />
          {/* ActivityList */}
          <Route path="/activity_list" element={<ActivityList />} />
          <Route path="/enter_activity" element={<EnterActivity />} />
          <Route
            path="/activity_detail/:id"
            element={<EnterActivityDetail />}
          />
          <Route
            path="/activity_category"
            element={<EnterActivityCategory />}
          />
          <Route path="/activity_term" element={<EnterActivityTerm />} />
          <Route path="/activity_detail" element={<ActivityDetail />} />
          <Route path="/growth_ai" element={<GrowthAi />} />
          {/* MyPage */}
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage_edit" element={<MyPageEdit />} />
          <Route path="/mypage_setting" element={<MyPageSettings />} />
          {/* Goal */}
          <Route path="/goal" element={<Goal />} />
          <Route path="/enter_goal" element={<EnterGoal />} />
          <Route path="/goal_category" element={<EnterGoalCategory />} />
          <Route path="/goal_term" element={<EnterGoalTerm />} />
          <Route path="/goal_done" element={<GoalDone />} />
        </Routes>
      </div>
    </RecoilRoot>
  );
}

export default App;
