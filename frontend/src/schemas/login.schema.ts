import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(6, "use 6 characters or more ")
    .max(30, "you can't use more than 30 characters in your password")
    .required(),
});
