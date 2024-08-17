import React from "react";
import Button from "@mui/material/Button";
import "../styles/Header.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../authorization/AuthContext";

function Header() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="header">
      <h2>Anıl Şenol Job Board Project</h2>
      <div className="buttons">
        {isAuthenticated ? (
          <Button
            color="error"
            className="logout-btn"
            variant="contained"
            onClick={() => {
              logout();
              navigate("/");
            }}
          >
            Logout
          </Button>
        ) : (
          <>
            <Button
              className="login-btn"
              variant="contained"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
            <Button
              className="register-btn"
              variant="contained"
              onClick={() => navigate("/register")}
            >
              Register
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
