import { Route, Routes } from "react-router-dom";

// pages
import Landing from "./pages/Landing/";
import Login from "./pages/Landing/Login";
import Agreement from "./pages/Landing/Agreement";
import SignUp from "./pages/Landing/SignUp";

import OnBoarding from "./pages/OnBoarding/";
import OnBoardingNext from "./pages/OnBoarding/OnBoardingNext";
import OnBoardingSuccess from "./pages/OnBoarding/OnBoardingSuccess";

import ActivityList from "./pages/ActivityList/";
import EnterActivity from "./pages/ActivityList/EnterActivity";
import EnterActivityCategory from "./pages/ActivityList/EnterActivityCategory";
import EnterActivityDetail from "./pages/ActivityList/EnterActivityDetail";
import EnterActivityTerm from "./pages/ActivityList/EnterActivityTerm";

import ActivityDetail from "./pages/ActivityList/ActivityDetail"; //얘는 id로 받아야할듯 ?

import GrowthAi from "./pages/ActivityList/GrowthAi";

import MyPage from "./pages/MyPage/";
import MyPageEdit from "./pages/MyPage/MyPageEdit";
import MyPageSettings from "./pages/MyPage/MyPageSettings";

import Goal from "./pages/Goal/";
import EnterGoal from "./pages/Goal/EnterGoal";
import EnterGoalCategory from "./pages/Goal/EnterGoalCategory";
import EnterGoalTerm from "./pages/Goal/EnterGoalTerm";
import GoalDone from "./pages/Goal/GoalDone";

function App() {
    return (
        <div>
            <Routes>
                {/* Landing */}

                {/* 랜딩 페이지 */}
                <Route index element={<Landing />} />

                {/* 로그인 페이지 */}
                <Route path="/login" element={<Login />} />

                {/* 약관 페이지 */}
                <Route path="/agreemnet" element={<Agreement />} />

                {/* 회원가입 페이지 */}
                <Route path="/signup" element={<SignUp />} />



                {/* OnBoarding */}
                
                {/* 온보딩 페이지 */}
                <Route path="/onboarding" element={<OnBoarding />} />

                {/* 온보딩(직무, 관심분야 설정) */}
                <Route path="/onboarding_next" element={<OnBoardingNext />} />

                {/* 온보딩 성공페이지 */}
                <Route path="/onboarding_success" element={<OnBoardingSuccess />} />


                {/* ActivityList */}

                {/* 활동보기 */}
                <Route path="/activity_list" element={<ActivityList />} />

                {/* 활동입력 */}
                <Route path="/enter_activity" element={<EnterActivity />} />

                {/* 세부기록 입력페이지 */}
                <Route path="/activity_detail" element={<EnterActivityDetail />} />

                {/* Activity활동입력 (카테고리) */}
                <Route path="/activity_category" element={<EnterActivityCategory />} />

                {/* Activity활동입력 (기간수정) */}
                <Route path="/activity_term" element={<EnterActivityTerm />} />

                {/* 활동상세 */}
                <Route path="/activity_detail" element={<ActivityDetail />} />

                {/* 성장일지 페이지 */}
                <Route path="/growth_ai" element={<GrowthAi />} />



                {/* MyPage */}

                {/* 마이페이지 */}
                <Route path="/mypage" element={<MyPage />} />

                {/* 마이페이지(프로필 편집) */}
                <Route path="/mypage_edit" element={<MyPageEdit />} />

                {/* 마이페이지(설정) */}
                <Route path="/mypage_setting" element={<MyPageSettings />} />


                {/* Goal */}

                {/* 목표확인 */}
                <Route path="/goal" element={<Goal />} />

                {/* 목표설정 */}
                <Route path="/enter_goal" element={<EnterGoal />} />

                {/* Goal활동입력(카테고리) */}
                <Route path="/goal_category" element={<EnterGoalCategory />} />

                {/* Goal활동입력(기간수정) */}
                <Route path="/goal_term" element={<EnterGoalTerm />} />

                {/* 완료한 목표 */}
                <Route path="/goal_done" element={<GoalDone />} />

            </Routes>
        </div>
    );
}

export default App;
