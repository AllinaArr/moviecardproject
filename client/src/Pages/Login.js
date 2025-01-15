// // import { useState } from "react";

// // function Login() {
// //   const [error, setError] = useState(null);
// //   const [msg, setMsg] = useState(null);

// //   function handleSubmit(event) {
// //     event.preventDefault();

// //     const data = {
// //       username: event.target.username.value,
// //       password: event.target.password.value,
// //     };

// //     fetch("http://127.0.0.1:5555/login", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       credentials: "include",
// //       body: JSON.stringify(data),
// //     })
// //       .then((resp) => {
// //         if (resp.ok) {
// //           setMsg("Log in successful!");
// //           setError(null);
// //           return resp.json();
// //         } else {
// //           return resp.json().then((data) => {
// //             setMsg("Log in failed!");
// //             setError(data.error || "An error occurred");
// //             throw new Error(data.error || "An error occurred");
// //           });
// //         }
// //       })
// //       .catch((err) => {
// //         console.error("Login error:", err);
// //       });
// //   }

// //   const errorElement = error ? <p style={{ color: "red" }}>{error}</p> : null;
// //   const messageElement = msg ? <p>{msg}</p> : null;

// //   return (
// //     <div className='login'>
// //       {messageElement}
// //       {errorElement}
// //       <form onSubmit={handleSubmit} className='login-form'>
// //         <h1 id='login-bar'>Login</h1>
// //         <div id='login-container'>
// //           <input
// //             type='text'
// //             name='username'
// //             placeholder='Username'
// //             required
// //             className='input-username'
// //           />
// //         </div>
// //         <div>
// //           <input
// //             type='password'
// //             name='password'
// //             placeholder='Password'
// //             required
// //             className='input-password'
// //           />
// //         </div>
// //         <div className='login-para'>
// //           <label>
// //             <input type='checkbox' /> Remember me
// //           </label>
// //           <a href='#' className='login-para'>
// //             <br /> Forgot Password
// //           </a>
// //         </div>
// //         <button type='submit' className='login-btn'>
// //           Login
// //         </button>

// //         <div className='login-para'>
// //           <p>
// //             Don't have an account?
// //             <a href='#' className='login-para'>
// //               {" "}
// //               <br />
// //               Register
// //             </a>
// //           </p>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // }

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
        backgroundColor: "#5b5b5b",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          mx: 2,
          px: 4,
          py: 3,
          backgroundColor: "#1c1c1c",
          border: "2px solid #ff6f61",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, backgroundColor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5' color='white'>
              Sign in
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
                  sx: { backgroundColor: "white" },
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
                  sx: { backgroundColor: "white" },
                }}
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "#ff9800",
                  "&:hover": { backgroundColor: "#e68900" },
                }}
              >
                Log In
              </Button>
              <Grid container>
                <Grid item>
                  <NavLink to='/signup' style={{ color: "#ff9800" }}>
                    {"Don't have an account? Sign Up"}
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
