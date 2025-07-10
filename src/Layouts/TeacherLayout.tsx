import React, { FC, useState, ReactNode } from "react";
import { Outlet, useLocation } from "react-router";

import Header from "@/Widgets/Header/Header";
import Footer from "@/Widgets/Footer/Footer";
// import { useGetCurrentUserQuery } from "@/Store/api/accounts";

type TProps = {};

const TeacherLayout: FC<TProps> = ({}) => {
  const location = useLocation();
  //   const {} = useGetCurrentUserQuery()

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default TeacherLayout;
