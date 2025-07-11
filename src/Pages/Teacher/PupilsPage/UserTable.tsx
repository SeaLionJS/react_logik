import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Button,
  Paper,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useGetUsersQuery, useDeleteUserMutation } from "@/Store/api/accounts";
import EditUserDrawer from "./EditUserDrawer";
import ConfirmDialog from "./ConfirmDialog";
import { enqueueSnackbar } from "notistack";

const UserList: React.FC = () => {
  const { data, isLoading } = useGetUsersQuery();
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const [deleteUser] = useDeleteUserMutation();
  const [confirmId, setConfirmId] = useState<string | null>(null);

  const handleEdit = (id: string) => {
    setSelectedUserId(id);
  };

  const handleCloseDrawer = () => {
    setSelectedUserId(null);
  };

  const handleDelete = async () => {
    if (confirmId) {
      deleteUser(confirmId)
        .unwrap()
        .then(() => {
          enqueueSnackbar("Успішно видалено", { variant: "success" });
        });

      setConfirmId(null);
    }
  };

  return (
    <>
      <Box
        sx={{
          background: "white",
          p: 2,
          mt: 2,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Список учнів:
        </Typography>

        <Stack spacing={2}>
          {/* Header Row */}
          <Paper
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 1,
              backgroundColor: "grey.200",
              fontWeight: "bold",
            }}
          >
            <Box sx={{ width: "25%" }}>Username</Box>
            <Box sx={{ width: "15%" }}>Імʼя</Box>
            <Box sx={{ width: "15%" }}>Прізвище</Box>
            <Box sx={{ width: "15%" }}>Роль</Box>
            <Box sx={{ width: "20%" }}>Дії</Box>
          </Paper>

          {isLoading && <Typography>Loading...</Typography>}

          {data?.map((user) => (
            <Paper
              key={user.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                p: 1,
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "25%" }}>{user.username}</Box>
              <Box sx={{ width: "15%" }}>{user.first_name}</Box>
              <Box sx={{ width: "15%" }}>{user.last_name}</Box>
              <Box sx={{ width: "15%" }}>{user.role}</Box>
              <Box sx={{ width: "20%" }}>
                <IconButton
                  color="secondary"
                  onClick={() => handleEdit(user.id)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton color="error" onClick={() => setConfirmId(user.id)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Paper>
          ))}
        </Stack>

        {selectedUserId && (
          <EditUserDrawer userId={selectedUserId} onClose={handleCloseDrawer} />
        )}
      </Box>

      <ConfirmDialog
        open={!!confirmId}
        onClose={() => setConfirmId(null)}
        onConfirm={handleDelete}
        title="Видалення користувача"
        description="Ви впевнені, що хочете видалити цього студента?"
      />
    </>
  );
};

export default UserList;
