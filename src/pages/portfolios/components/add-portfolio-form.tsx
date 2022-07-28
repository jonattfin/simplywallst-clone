import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";

export default function AddFormPortolio({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: any;
}) {
  const [currency, setCurrency] = useState("");
  const [name, setName] = useState("");

  const handleCurrencyChange = (event: SelectChangeEvent) => {
    setCurrency(event.target.value as string);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Hi John, please name your new Portfolio:</DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <TextField
            label="Portfolio name"
            variant="outlined"
            onChange={handleNameChange}
            value={name}
          />
          <div>
            <InputLabel id="currency-label">Currency</InputLabel>
            <Select
              labelId="currency-label"
              value={currency}
              label="Currency"
              onChange={handleCurrencyChange}
              fullWidth
            >
              <MenuItem value={1}>Euro</MenuItem>
              <MenuItem value={2}>USD</MenuItem>
              <MenuItem value={3}>RON</MenuItem>
            </Select>
          </div>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}
