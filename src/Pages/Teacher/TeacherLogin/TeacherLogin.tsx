import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Link,
  Avatar,
  Paper,
  IconButton,
  Tooltip,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import PaletteIcon from "@mui/icons-material/Palette";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/Store";
import { setTheme, ThemeType } from "@/Store/slices/themeSlice";
import { useLoginMutation } from "@/Store/api/accounts";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router";

const TeacherLoginPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const themeName = useSelector((state: RootState) => state.theme.themeName);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    login({ username, password })
      .unwrap()
      .then((d) => {
        enqueueSnackbar("Вхід успішно виконано", { variant: "success" });
        setUsername("");
        setPassword("");
        navigate("/teacher");
      })
      .catch((e) => {
        enqueueSnackbar("Помилка входу", { variant: "error" });
      });
  };

  const handleThemeChange = (theme: ThemeType) => {
    dispatch(setTheme(theme));
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ pt: 8 }}>
      <Paper elevation={3} sx={{ padding: 4, mt: 8 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" gutterBottom>
            Вхід
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              mt: 2,
              mb: 2,
              justifyContent: "center",
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

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Ім'я користувача"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Увійти
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default TeacherLoginPage;
