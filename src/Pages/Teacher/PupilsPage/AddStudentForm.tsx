import React, { useState } from "react";
import {
  Button,
  TextField,
  Stack,
  Typography,
  Alert,
  Box,
} from "@mui/material";
import { useCreateUserMutation } from "@/Store/api/accounts";
import { enqueueSnackbar } from "notistack";

const AddStudentForm: React.FC = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
  });

  const [createUser, { isLoading, isSuccess, error }] = useCreateUserMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createUser(form)
      .unwrap()
      .then(() => {
        enqueueSnackbar("Успішно змінено", { variant: "success" });
      });

    setForm({
      username: "",
      password: "",
      first_name: "",
      last_name: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack
        spacing={2}
        sx={{ maxWidth: 700, background: "white", p: 2, mx: "auto" }}
      >
        <Typography variant="h5">Додати студента</Typography>

        {error && (
          <Alert severity="error">
            {(error as any)?.data?.detail || "Помилка при створенні"}
          </Alert>
        )}

        {isSuccess && (
          <Alert severity="success">Студента успішно створено!</Alert>
        )}

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            gap: 2,
          }}
        >
          <Box sx={{ maxWidth: 300 }}>
            <TextField
              name="username"
              label="Username"
              value={form.username}
              onChange={handleChange}
              required
              fullWidth
              margin={"dense"}
            />
            <TextField
              name="password"
              label="Пароль"
              type="password"
              value={form.password}
              onChange={handleChange}
              required
              fullWidth
              margin={"dense"}
            />
          </Box>

          <Box sx={{ maxWidth: 300 }}>
            <TextField
              name="first_name"
              label="Імʼя"
              value={form.first_name}
              onChange={handleChange}
              fullWidth
              margin={"dense"}
            />
            <TextField
              name="last_name"
              label="Прізвище"
              value={form.last_name}
              onChange={handleChange}
              fullWidth
              margin={"dense"}
            />
          </Box>
        </Box>

        <Button type="submit" variant="contained" disabled={isLoading}>
          Додати
        </Button>
      </Stack>
    </form>
  );
};

export default AddStudentForm;
