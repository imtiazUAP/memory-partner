import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Link as MuiLink,
  Grid,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

// interface LoginProps {
//   onLogin: (username: string, password: string) => void;
// }

const Login = () => {
  const dispatch = useDispatch();
  const context = useSelector(
    (state: RootState) => state.context
  );
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (event: React.FormEvent) => {
    console.log('----- clicked sign in---');
    event.preventDefault();
    try {
      await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          // Add authorization header if required
          // 'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({email, password}),
      }).then(async (response: any) => {
        // const resp = await response.json();
        // console.log('----- login response: ', resp);
        const jsonResponse = await response.json();
        dispatch({ type: "UPDATE_ACCESS_TOKEN", payload: jsonResponse.access_token });
        console.log('---- updated redux store: ', context);
      });
    } catch (error) {
      console.log(error);
    }
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
            value={email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(event.target.value);
            }}
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
            value={password}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(event.target.value);
            }}
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
