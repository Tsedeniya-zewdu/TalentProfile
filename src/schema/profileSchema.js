import * as yup from "yup";

export const profileSchema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  email: yup
  .string()
  .matches(
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    "Enter a valid email (example: user@gmail.com)"
  )
  .required("Email is required"),
  skill: yup.string().required("Primary skill is required"),

  experience: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .typeError("Must be a number")
    .positive("Must be positive")
    .integer("Must be an integer")
    .required("Experience is required"),

  description: yup
    .string()
    .transform((value) => (value === "" ? undefined : value))
    .required("Description is required")
    .min(10, "Minimum 10 characters"),
});