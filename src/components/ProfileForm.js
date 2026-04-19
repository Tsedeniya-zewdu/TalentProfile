import { Box, Button, Paper } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomTextField from "./CustomTextField";
import { profileSchema } from "../schema/profileSchema";

export default function ProfileForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(profileSchema),
  });

  return (
    <Paper sx={{ p: 4, borderRadius: 4 }}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}
      >
        <CustomTextField
          label="Full Name"
          name="fullName"
          register={register}
          error={errors.fullName}
          helperText={errors.fullName?.message}
        />

        <CustomTextField
          label="Email"
          name="email"
          register={register}
          error={errors.email}
          helperText={errors.email?.message}
        />

        <CustomTextField
          label="Primary Skill"
          name="skill"
          register={register}
          error={errors.skill}
          helperText={errors.skill?.message}
        />

        <CustomTextField
          label="Experience"
          name="experience"
          register={register}
          error={errors.experience}
          helperText={errors.experience?.message}
        />

        <Box sx={{ gridColumn: "1 / -1" }}>
          <CustomTextField
            label="Description"
            name="description"
            register={register}
            error={errors.description}
            helperText={errors.description?.message}
            multiline
            rows={4}
          />
        </Box>

        <Box sx={{ gridColumn: "1 / -1" }}>
          <Button type="submit" fullWidth>
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}