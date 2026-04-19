import { Box, Typography } from "@mui/material";

export default function PageHeader({ title, subtitle }) {
  return (
    <Box sx={{ textAlign: "center", mb: 6 }}>
      <Typography
        sx={{
          fontSize: { xs: 28, md: 36 },
          fontWeight: 800,
          color: "#064e3b",
        }}
      >
        {title}
      </Typography>

      <Typography sx={{ color: "#6b7280", mt: 1 }}>
        {subtitle}
      </Typography>
    </Box>
  );
}