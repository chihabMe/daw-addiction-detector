import * as yup from "yup";

export const signupSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required field"),
  first_name: yup.string().required("Requried field"),
  last_name: yup.string().required("Requried field"),
  password: yup
    .string()
    .min(6, "use 6 characters or more ")
    .max(30, "you can't use more than 30 characters in your password")
    .required("Requried field"),
  password2: yup
    .string()
    .min(6, "use 6 characters or more ")
    .max(30, "you can't use more than 30 characters in your password")
    .required("Requried field"),
});
