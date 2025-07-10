import { createBrowserRouter, Route, Routes } from "react-router";

import MainPage from "./Pages/PanelPage/PanelPage";
import MainLayout from "./Layouts/MainLayout";
import StorePage from "./Pages/StorePage/StorePage";
import ArmyPage from "./Pages/ArmyPage/ArmyPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import TeacherLayout from "./Layouts/TeacherLayout";
import TeacherLoginPage from "./Pages/Teacher/TeacherLogin/TeacherLogin";
import MainTeacher from "./Pages/Teacher/MainPage/MainPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/army" element={<ArmyPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Route>
      <Route path="/teacher" element={<TeacherLayout />}>
        <Route path="/teacher/login" element={<TeacherLoginPage />} />
        <Route path="/teacher" element={<MainTeacher />} />
      </Route>
    </Routes>
  );
}

export default Router;
