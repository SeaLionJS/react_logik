import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container, Divider } from "@mui/material";
import AddStudentForm from "./AddStudentForm";
import UserList from "./UserTable";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const TeacherPupils = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Typography variant="h3" sx={{ m: 0 }}>
        Учні
      </Typography>
      <Container sx={{ mt: 1 }}>
        <AddStudentForm />
        <UserList />
      </Container>
    </>
  );
};

export default TeacherPupils;
