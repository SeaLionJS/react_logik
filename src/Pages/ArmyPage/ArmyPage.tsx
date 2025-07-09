import { useGetDisciplinesQuery } from "@/Store/api/materials";
import React, { FC } from "react";

const ArmyPage: FC<{}> = ({}) => {
    
  const { data, isLoading } = useGetDisciplinesQuery("");

  if (isLoading) {
    return "...loading";
  }

  console.log(data);


  return (
    <>
      <h1>Армія</h1>
    </>
  );
};

export default ArmyPage;
