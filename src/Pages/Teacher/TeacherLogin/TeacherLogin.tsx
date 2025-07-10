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
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/Store";
import { setTheme, ThemeType } from "@/Store/slices/themeSlice";
import { SelectChangeEvent } from "@mui/material";

const TeacherLoginPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const themeName = useSelector((state: RootState) => state.theme.themeName);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleThemeChange = (
    event: SelectChangeEvent<"light" | "dark" | "purple">
  ) => {
    dispatch(setTheme(event.target.value as "light" | "dark" | "purple"));
  };

  return (
    <Container component="main" maxWidth="xs">
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

          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id="theme-select-label">Тема</InputLabel>
            <Select
              labelId="theme-select-label"
              id="theme-select"
              value={themeName}
              label="Тема"
              onChange={handleThemeChange}
            >
              <MenuItem value="light">Світла (стандартна)</MenuItem>
              <MenuItem value="dark">Темна</MenuItem>
              <MenuItem value="purple">Фіолетова</MenuItem>
            </Select>
          </FormControl>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
