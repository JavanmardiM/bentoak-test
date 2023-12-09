import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Card, CircularProgress, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { storage } from "../../utilities/storage";
import { useForm } from "react-hook-form";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors , isSubmitting },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    const registerValues = {
      email: data.email,
      username: data.username,
      password: data.password,
    };
    let list = storage.getRegisterdList();
    if (list && list.length !== 0) {
      let user = list.find((item) => item === registerValues.email);
      if (user) {
        setErrorMessage("you already have an account");
      } else {
        list.push(registerValues.email);
        storage.setRegisterdList(list);
        navigate("/login");
      }
    } else {
      storage.setRegisterdList([registerValues.email]);
      navigate("/login");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box pt={3}>
        <Card>
          <Box
            sx={{
              margin: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                {...register("username", {
                  required: "username is required",
                })}
                error={!!errors?.username}
                helperText={errors?.username?.message}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                {...register("email", {
                  required: "email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                })}
                error={!!errors?.email}
                helperText={errors?.email?.message}
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
                {...register("password", { required: "password is required" })}
                error={!!errors?.password}
                helperText={errors?.password?.message}
              />
              {errorMessage && (
                <Box>
                  <Typography variant="caption" color="error">
                    {errorMessage}
                  </Typography>
                </Box>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, maxHeight: 36 }}
              >
                {isSubmitting ? (
                  <Grid container justifyContent="center" alignItems="center">
                    <Box
                      sx={{ mr: 2 }}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <CircularProgress size={20} sx={{ color: "white" }} />
                    </Box>
                    Signing Up
                  </Grid>
                ) : (
                  "Sign Up"
                )}
              </Button>
              <Typography
                variant="caption"
                display="block"
                gutterBottom
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/login");
                }}
              >
                already have an account? Sign in here
              </Typography>
            </Box>
          </Box>
        </Card>
      </Box>
    </Container>
  );
};
export default Register;
