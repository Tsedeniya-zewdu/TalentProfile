export const inputStyle = {
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    "& fieldset": { border: "none" },
    "&:hover fieldset": { border: "none" },
    "&.Mui-focused fieldset": { border: "none" },
  },
  "& .MuiInputLabel-root": {
    color: "#6b7280",
    "&.Mui-focused": {
      color: "#064e3b",
    },
  },
  "& .MuiInputLabel-shrink": {
    backgroundColor: "#f2f4f1",
    px: 0.5,
    ml: -0.5,
  },
  "& .MuiOutlinedInput-input": {
    padding: "16.5px 14px",
  },
};

export const pageContainer = {
  minHeight: "100vh",
  backgroundColor: "#f8faf6",
  pt: 3,
  pb: 6,
  px: 2,
};

export const formCard = {
  p: { xs: 3, md: 5 },
  borderRadius: "20px",
  backgroundColor: "#f2f4f1",
  boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
};