import React from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Link as MuiLink,
  Grid,
} from "@mui/material";

// interface LoginProps {
//   onLogin: (username: string, password: string) => void;
// }

const Login = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // You can perform validation and then call onLogin with username and password
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
            Sign In
          </Button>
          <div>
            <MuiLink href="#" variant="body2">
              Forgot password?
            </MuiLink>
            <br />
            <MuiLink href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </MuiLink>
          </div>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
