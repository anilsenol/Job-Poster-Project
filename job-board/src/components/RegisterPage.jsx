import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { Register } from "../validations/Register";
import axios from "axios";
import "../styles/Register.css";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      axios
        .post("http://localhost:3000/users", values)
        .then((response) => {
          alert("Signed Up Successfully!");
          navigate("/login");
          resetForm();
        })
        .catch((error) => {
          alert("An Error Occured!");
        });
    },
    validationSchema: Register,
  });

  return (
    <div className="main">
      <div className="form-cards">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-div">
            <h2>Register Form</h2>
            <TextField
              name="username"
              placeholder="Username"
              variant="outlined"
              fullWidth
              value={formik.values.username}
              onChange={formik.handleChange}
              helperText={
                formik.errors.username && (
                  <span style={{ color: "red" }}>{formik.errors.username}</span>
                )
              }
            />
          </div>
          <div className="form-div">
            <TextField
              name="password"
              placeholder="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={formik.values.password}
              onChange={formik.handleChange}
              helperText={
                formik.errors.password && (
                  <span style={{ color: "red" }}>{formik.errors.password}</span>
                )
              }
            />
          </div>
          <Button type="submit" className="register-btn" variant="contained">
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
