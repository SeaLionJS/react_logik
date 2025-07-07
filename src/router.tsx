import { createBrowserRouter } from "react-router";

import MainPage from "./Pages/MainPage/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
]);

export default router;
