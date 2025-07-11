import { FC, useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import BookIcon from "@mui/icons-material/Book";
import LogoutIcon from "@mui/icons-material/Logout";
import { useTheme } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router";
import {
  useGetCurrentUserQuery,
  useLogoutMutation,
} from "@/Store/api/accounts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Store";
import { setTheme, ThemeType } from "@/Store/slices/themeSlice";

import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import PaletteIcon from "@mui/icons-material/Palette";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

import Tooltip from "@mui/material/Tooltip";

const drawerWidth = 240;

const menuItems = [
  { text: "Головна", icon: <HomeIcon />, path: "/teacher/" },
  { text: "Учні", icon: <PeopleIcon />, path: "/teacher/students" },
  { text: "Дисципліни", icon: <BookIcon />, path: "/teacher/disciplines" },
  { text: "Замовлення", icon: <ShoppingCartIcon />, path: "/teacher/orders" },
  { text: "Товари", icon: <CardGiftcardIcon />, path: "/teacher/goods" },
];

const TeacherSidebar: FC = () => {
  const theme = useTheme();
  const isPC = useMediaQuery(theme.breakpoints.up("sm"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const { data, isLoading } = useGetCurrentUserQuery();
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const themeName = useSelector((state: RootState) => state.theme.themeName);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading || !data) return;

    if (data.role === "anonymous" || data.role === "student") {
      navigate("/teacher/login");
    }
  }, [isLoading, data, navigate]);

  const handleThemeChange = (theme: ThemeType) => {
    dispatch(setTheme(theme));
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (item: any) => {
    navigate(item.path);
    if (isPC) {
      setMobileOpen(false);
    }
  };

  const handleLogout = () => {
    logout()
      .unwrap()
      .then(() => {
        navigate("/teacher/login");
      });
  };

  if (isLoading) {
    return null;
  }

  const drawer = (
    <>
      <List sx={{ mt: 10 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              selected={location.pathname === item.path}
              onClick={() => handleMenuClick(item)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
          mt: 5,
        }}
      >
        <Tooltip title="Фіолетова тема">
          <IconButton
            color={themeName === "purple" ? "secondary" : "default"}
            onClick={() => handleThemeChange("purple")}
          >
            <PaletteIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Світла тема">
          <IconButton
            color={themeName === "light" ? "primary" : "default"}
            onClick={() => handleThemeChange("light")}
          >
            <WbSunnyIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Темна тема">
          <IconButton
            color={themeName === "dark" ? "primary" : "default"}
            onClick={() => handleThemeChange("dark")}
          >
            <DarkModeIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );

  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          {!isPC && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Додаток "Логіки"
          </Typography>
          {isPC && (
            <Typography variant="body1">
              {data?.first_name} {data?.last_name}
            </Typography>
          )}
          <Tooltip title="Вийти">
            <IconButton
              sx={{ ml: 3 }}
              color="inherit"
              edge="start"
              onClick={handleLogout}
            >
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      {isPC && (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          {drawer}
        </Drawer>
      )}

      {!isPC && (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          {drawer}
        </Drawer>
      )}
    </Box>
  );
};

export default TeacherSidebar;
