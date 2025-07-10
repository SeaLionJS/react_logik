import { createBrowserRouter, Route, Routes } from "react-router";

import MainPage from "./Pages/PanelPage/PanelPage";
import MainLayout from "./Layouts/MainLayout";
import StorePage from "./Pages/StorePage/StorePage";
import ArmyPage from "./Pages/ArmyPage/ArmyPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RatingPage from "./Pages/RatingPage/RatingPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/army" element={<ArmyPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/rating" element={<RatingPage />}></Route>
      </Route>
    </Routes>
  );
}

export default Router;
