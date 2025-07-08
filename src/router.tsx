import { createBrowserRouter, Route, Routes } from "react-router";

import MainPage from "./Pages/MainPage/MainPage";
import MainLayout from "./Layouts/MainLayout";
import StorePage from "./Pages/StorePage/StorePage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/store" element={<StorePage />} />
      </Route>
    </Routes>
  );
}

export default Router;
