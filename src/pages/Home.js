import React, { useState, useRef } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


import PageHeader from "../components/PageHeader";
import PreviewHeader from "../components/PreviewHeader";


import {
  inputStyle,
  pageContainer,
  formCard,
} from "../styles/formStyles";


import { profileSchema } from "../schema/profileSchema";

export default function Home() {
  const [profile, setProfile] = useState(null);
  const previewRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(profileSchema),
  });

  const onSubmit = (data) => {
    setProfile(data);

    setTimeout(() => {
      if (previewRef.current) {
        previewRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <Box sx={pageContainer}>
      <Box sx={{ maxWidth: 700, mx: "auto" }}>
        
        {/* Header */}
        <PageHeader
          title="Talent Profile"
          subtitle="Curate your professional presence"
        />

        {/* Form */}
        <Paper sx={formCard}>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 3,
            }}
          >
            <TextField
              label="Full Name"
              {...register("fullName")}
              error={!!errors.fullName}
              helperText={errors.fullName?.message}
              fullWidth
              sx={inputStyle}
            />

            <TextField
              label="Email"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
              fullWidth
              sx={inputStyle}
            />

            <TextField
              label="Primary Skill"
              {...register("skill")}
              error={!!errors.skill}
              helperText={errors.skill?.message}
              fullWidth
              sx={inputStyle}
            />

            <TextField
              label="Years of Experience"
              {...register("experience")}
              error={!!errors.experience}
              helperText={errors.experience?.message}
              fullWidth
              sx={inputStyle}
            />

            {/* Description */}
            <Box sx={{ gridColumn: "1 / -1" }}>
              <TextField
                label="Professional Narrative"
                multiline
                rows={4}
                {...register("description")}
                error={!!errors.description}
                helperText={errors.description?.message}
                fullWidth
                sx={inputStyle}
              />
            </Box>

            {/* Submit Button */}
            <Box sx={{ gridColumn: "1 / -1", mt: 2 }}>
              <Button
                type="submit"
                fullWidth
                sx={{
                  py: 1.8,
                  borderRadius: "999px",
                  fontWeight: 600,
                  textTransform: "none",
                  background:
                    "linear-gradient(to bottom right, #003527, #064e3b)",
                  color: "#fff",
                  "&:hover": {
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                  },
                }}
              >
                Update Gallery Profile
              </Button>
            </Box>
          </Box>
        </Paper>

        {/* Preview */}
        {profile && (
          <Box ref={previewRef} sx={{ mt: 6 }}>
            
            {/* Preview Header */}
            <PreviewHeader />

            {/* Preview Card */}
            <Paper
              sx={{
                borderRadius: "2rem",
                backgroundColor: "#ffffff",
                overflow: "hidden",
                boxShadow: "0 32px 64px rgba(25,28,27,0.06)",
              }}
            >
              {/* Hero Section */}
              <Box
                sx={{
                  height: 100,
                  position: "relative",
                  bgcolor: "#064e3b",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, #064e3bcc, transparent)",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 24,
                    left: 32,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: "1rem",
                      border: "4px solid #ffffff",
                      bgcolor: "#b0f0d6",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 32,
                        fontWeight: "bold",
                        color: "#003527",
                      }}
                    >
                      {profile.fullName?.charAt(0) || "U"}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        color: "#ffffff",
                        fontSize: "1.25rem",
                        fontWeight: 700,
                      }}
                    >
                      {profile.fullName}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#95d3ba",
                        fontSize: "0.75rem",
                      }}
                    >
                      {profile.email}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Content */}
              <Box sx={{ p: 4, display: "flex", flexDirection: "column", gap: 3 }}>
                
                {/* Skill & Experience */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography sx={{ fontSize: 10, color: "#404944" }}>
                      Expertise
                    </Typography>
                    <Typography sx={{ fontWeight: 700 }}>
                      {profile.skill}
                    </Typography>
                  </Box>

                  <Box sx={{ textAlign: "right" }}>
                    <Typography sx={{ fontSize: 10, color: "#404944" }}>
                      Tenure
                    </Typography>
                    <Typography sx={{ fontWeight: 700 }}>
                      {profile.experience} Years
                    </Typography>
                  </Box>
                </Box>

                {/* Description */}
                <Box>
                  <Typography sx={{ fontSize: 10, color: "#404944" }}>
                    Professional Narrative
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1,
                      fontStyle: "italic",
                      borderLeft: "2px solid rgba(6,78,59,0.1)",
                      pl: 2,
                    }}
                  >
                    "{profile.description}"
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Box>
        )}
      </Box>
    </Box>
  );
}