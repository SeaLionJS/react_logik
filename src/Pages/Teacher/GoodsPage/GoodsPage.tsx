import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useGetProductsQuery } from "@/Store/api/shop";
import GoodsItem from "./GoodsItem";
import { Product } from "@/Store/types";

const TeacherGoods = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { data, isLoading } = useGetProductsQuery();

  if (isLoading || !data) {
    return "";
  }

  return (
    <>
      <Typography variant="h3" fontSize={"28px"} m={2}>
        Товари
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {data.map((g) => {
          return <GoodsItem {...g} key={g.id} />;
        })}
      </Box>
    </>
  );
};

export default TeacherGoods;
