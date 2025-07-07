import Footer from "@/Widgets/Footer/Footer";
import { FC } from "react";
import { Outlet } from "react-router";
import Sidebar from "@/Widgets/Sidebar/Sidebar";

type TProps = {};

const MainLayout: FC<TProps> = ({}) => {
  return (
    <>
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
