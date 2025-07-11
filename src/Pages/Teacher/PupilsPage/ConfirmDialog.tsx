import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

interface Props {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  description?: string;
}

const ConfirmDialog: React.FC<Props> = ({
  open,
  onClose,
  onConfirm,
  title,
  description,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title || "Підтвердження"}</DialogTitle>
      <DialogContent>
        <Typography>{description || "Ви впевнені?"}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Скасувати</Button>
        <Button onClick={onConfirm} variant="contained" color="error">
          Видалити
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
