import React, { useEffect, useState } from "react";
import {
  Drawer,
  Stack,
  TextField,
  Button,
  Typography,
  Alert,
} from "@mui/material";
import {
  useGetUserByIdQuery,
  useUpdateUserMutation,
} from "@/Store/api/accounts";
import { enqueueSnackbar } from "notistack";

interface Props {
  userId: string;
  onClose: () => void;
}

const EditUserDrawer: React.FC<Props> = ({ userId, onClose }) => {
  const { data: user, isLoading } = useGetUserByIdQuery(userId);
  const [updateUser, { isSuccess, error }] = useUpdateUserMutation();

  const [form, setForm] = useState({
    username: "",
    first_name: "",
    last_name: "",
    password: "",
  });

  useEffect(() => {
    if (user) {
      setForm({
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name,
        password: "",
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    await updateUser({
      id: userId,
      data: {
        username: form.username,
        first_name: form.first_name,
        last_name: form.last_name,
      },
    })
      .unwrap()
      .then(() => {
        enqueueSnackbar("Успішно змінено", { variant: "success" });
      });
    onClose();
  };

  return (
    <Drawer anchor="right" open={Boolean(userId)} onClose={onClose}>
      <Stack spacing={2} sx={{ p: 3, width: 350, mt: 10 }}>
        <Typography variant="h6">Редагування користувача</Typography>

        {error && (
          <Alert severity="error">
            {(error as any)?.data?.detail || "Помилка збереження"}
          </Alert>
        )}

        <TextField
          name="username"
          label="Username"
          value={form.username}
          onChange={handleChange}
          disabled={isLoading}
        />
        <TextField
          name="first_name"
          label="Імʼя"
          value={form.first_name}
          onChange={handleChange}
        />
        <TextField
          name="last_name"
          label="Прізвище"
          value={form.last_name}
          onChange={handleChange}
        />

        <Button variant="contained" onClick={handleSubmit} disabled={isLoading}>
          Зберегти зміни
        </Button>
      </Stack>
    </Drawer>
  );
};

export default EditUserDrawer;
