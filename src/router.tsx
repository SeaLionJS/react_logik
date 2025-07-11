import { createBrowserRouter, Route, Routes } from "react-router";

import TeacherLayout from "./Layouts/TeacherLayout";
import MainLayout from "./Layouts/MainLayout";

// Denis
import MainPage from "./Pages/PanelPage/PanelPage";
import StorePage from "./Pages/StorePage/StorePage";
import ArmyPage from "./Pages/ArmyPage/ArmyPage";
import RatingPage from "./Pages/RatingPage/RatingPage";
import LoginPage from "./Pages/LoginPage/LoginPage";

//Bohdan
import TeacherLoginPage from "./Pages/Teacher/TeacherLogin/TeacherLogin";
import TeacherMain from "./Pages/Teacher/MainPage/MainPage";
import TeacherGoods from "./Pages/Teacher/GoodsPage/GoodsPage";
import TeacherDisciplines from "./Pages/Teacher/DisciplinesPage/DisciplinesPage";
import TeacherPupils from "./Pages/Teacher/PupilsPage/PupilsPage";
import TeacherOrders from "./Pages/Teacher/OrdersPage/OrdersPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/army" element={<ArmyPage />}></Route>
        <Route path="/rating" element={<RatingPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Route>
      <Route path="/teacher/login" element={<TeacherLoginPage />} />
      <Route path="/teacher" element={<TeacherLayout />}>
        <Route path="/teacher" element={<TeacherMain />} />
        <Route path="/teacher/students" element={<TeacherPupils />} />
        <Route path="/teacher/disciplines" element={<TeacherDisciplines />} />
        <Route path="/teacher/orders" element={<TeacherOrders />} />
        <Route path="/teacher/goods" element={<TeacherGoods />} />
      </Route>
    </Routes>
  );
}

export default Router;
