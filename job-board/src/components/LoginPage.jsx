import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import axios from "axios";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../authorization/AuthContext";

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.get("http://localhost:3000/users", {
          params: { username: values.username },
        });
        const user = response.data.find(
          (user) => user.password === values.password
        );

        if (user) {
          alert("Login Successful!");
          login();
          navigate("/home");
        } else {
          alert("Username or password invalid!");
        }
      } catch (error) {
        console.error("Login error:", error);
        alert("An error occurred. Please try again.");
      }
    },
  });

  return (
    <div className="main">
      <div className="form-cards">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-div">
            <h2>Login Form</h2>
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
          <Button type="submit" className="login-btn" variant="contained">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
