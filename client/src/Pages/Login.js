import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Container,
  Grid,
  Typography,
  Box,
  Card,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5555/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (data.success) {
        localStorage.setItem("token", data.token);
        navigate("/home");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("Error signing in");
    }
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #cdbaef 0%, #b495ea 100%)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 400,
          px: 4,
          py: 3,
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          border: "1px solid #b495ea",
          borderRadius: "16px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Container component='main'>
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, backgroundColor: "#b495ea" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              component='h1'
              variant='h5'
              sx={{ fontWeight: "bold", color: "#4a148c" }}
            >
              Sign In
            </Typography>
            <Box
              component='form'
              noValidate
              onSubmit={handleLogin}
              sx={{ mt: 1 }}
            >
              <TextField
                onChange={(event) => setUsername(event.target.value)}
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='username'
                label='Username'
                value={username}
                autoFocus
                InputProps={{
                  sx: { backgroundColor: "#ffffff", borderRadius: 2 },
                }}
              />
              <TextField
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                InputProps={{
                  sx: { backgroundColor: "#ffffff", borderRadius: 2 },
                }}
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "#6a1b9a",
                  color: "#ffffff",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#4a148c" },
                }}
              >
                Log In
              </Button>
              <Grid>
                <Grid item>
                  <NavLink to='/signup' style={{ textDecoration: "none" }}>
                    <Typography
                      variant='body2'
                      sx={{ color: "#6a1b9a", fontWeight: "bold" }}
                    >
                      {"Don't have an account? Sign Up"}
                    </Typography>
                  </NavLink>
                </Grid>
              </Grid>
              <Typography color='white' align='center' sx={{ mt: 3 }}>
                {message}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Card>
    </Box>
  );
}
