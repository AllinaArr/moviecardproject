import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
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

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5555/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage(data.message);
        navigate("/login");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("Error signing up");
    }
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
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
          border: "1px solid #ff6f61",
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
            <Avatar sx={{ m: 1, backgroundColor: "#ff6f61" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              component='h1'
              variant='h5'
              sx={{ fontWeight: "bold", color: "#b23c17" }}
            >
              Sign Up
            </Typography>
            <Box
              component='form'
              noValidate
              onSubmit={handleSignup}
              sx={{ mt: 1 }}
            >
              <TextField
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email'
                autoFocus
                InputProps={{
                  sx: { backgroundColor: "#ffffff", borderRadius: 2 },
                }}
              />
              <TextField
                onChange={(event) => setUsername(event.target.value)}
                value={username}
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='username'
                label='Username'
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
                  backgroundColor: "#ff6f61",
                  color: "#ffffff",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#b23c17" },
                }}
              >
                Sign Up
              </Button>
              <Grid>
                <Grid item>
                  <Link to='/login' style={{ textDecoration: "none" }}>
                    <Typography
                      variant='body2'
                      sx={{ color: "#b23c17", fontWeight: "bold" }}
                    >
                      {"Already have an account? Sign In"}
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
              <Typography color='#b23c17' align='center' sx={{ mt: 3 }}>
                {message}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Card>
    </Box>
  );
}
