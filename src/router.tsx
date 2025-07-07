import { createBrowserRouter, Route, Routes } from "react-router";

import MainPage from "./Pages/MainPage/MainPage";
import MainLayout from "./Layouts/MainLayout";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
