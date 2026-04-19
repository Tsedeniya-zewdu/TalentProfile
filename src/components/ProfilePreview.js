import { Box, Typography, Paper } from "@mui/material";

export default function ProfilePreview({ profile }) {
  if (!profile) return null;

  return (
    <Paper sx={{ p: 4, mt: 4 }}>
      <Typography variant="h6">{profile.fullName}</Typography>
      <Typography>{profile.email}</Typography>
      <Typography>{profile.skill}</Typography>
      <Typography>{profile.experience} years</Typography>
      <Typography>{profile.description}</Typography>
    </Paper>
  );
}