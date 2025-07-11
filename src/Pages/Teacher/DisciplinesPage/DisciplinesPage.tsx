import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const TeacherDisciplines = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Typography>Предмети</Typography>
    </>
  );
};

export default TeacherDisciplines;
