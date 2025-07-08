import { useGetDisciplinesQuery } from "@/Store/api/materials";
import React, { FC } from "react";

const MainPage: FC<{}> = ({}) => {
  const { data, isLoading } = useGetDisciplinesQuery("");

  if (isLoading) {
    return "...loading";
  }

  console.log(data);

  return (
    <>
      <div>Магазин</div>
    </>
  );
};

export default MainPage;
