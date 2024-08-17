import * as yup from "yup";

export const Register = yup.object().shape({
  username: yup.string().required("Username can't be empty."),
  password: yup.string().required("Password can't be empty."),
});
