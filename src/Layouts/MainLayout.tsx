import Header from "@/Widgets/Header/Header";
import Footer from "@/Widgets/Footer/Footer";
import { FC } from "react";
import { Outlet } from "react-router";

type TProps = {};

const MainLayout: FC<TProps> = ({}) => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
