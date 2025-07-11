import TeacherSidebar from "@/Widgets/TeacherSidebar/TeacherSidebar";
import { FC } from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router";
import bgImage from "./bg.jpg";
import { useSelector } from "react-redux";
import { RootState } from "@/Store";

const drawerWidth = 240;

const TeacherLayout: FC = () => {
  const themeName = useSelector((state: RootState) => state.theme.themeName);

  return (
    <Box sx={{ display: "flex" }}>
      <TeacherSidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            p: 2,
            pt: 10,

            backgroundColor:
              themeName == "dark" ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)",
            backdropFilter: "blur(4px)",
            height: "100%",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default TeacherLayout;
