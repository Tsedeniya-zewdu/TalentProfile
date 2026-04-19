import { TextField } from "@mui/material";

export default function CustomTextField({
  label,
  register,
  name,
  error,
  helperText,
  multiline = false,
  rows,
}) {
  const inputStyle = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      "& fieldset": { border: "none" },
    },
    "& .MuiInputLabel-root": {
      color: "#6b7280",
      "&.Mui-focused": { color: "#064e3b" },
    },
    "& .MuiInputLabel-shrink": {
      backgroundColor: "#f2f4f1",
      px: 0.5,
      ml: -0.5,
    },
  };

  return (
    <TextField
      label={label}
      {...register(name)}
      error={!!error}
      helperText={helperText}
      fullWidth
      multiline={multiline}
      rows={rows}
      sx={inputStyle}
    />
  );
}