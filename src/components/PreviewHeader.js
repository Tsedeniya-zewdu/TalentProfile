import { Box, Typography } from "@mui/material";

export default function PreviewHeader() {
  return (
    <Box
      sx={{
        mb: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography
        sx={{
          fontSize: "1.125rem",
          fontWeight: 700,
          color: "#003527",
        }}
      >
        Preview
      </Typography>

      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "#003527",
          }}
        />
        <Typography
          sx={{
            fontSize: "10px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 700,
            color: "#404944",
          }}
        >
          Active Display
        </Typography>
      </Box>
    </Box>
  );
}