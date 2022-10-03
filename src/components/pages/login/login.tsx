import React, { useState } from "react";
import { loginUser } from "../../../services/authServices";
import { UserTokenInterface } from "../../../interfaces/auth.interface";
import { Button, Container, Grid, TextField } from "@mui/material";

interface Props {
  setToken: (token: UserTokenInterface) => void;
}

export default function Login({ setToken }: Props) {
  const [username, setUserName] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <Container component="main" maxWidth="xs">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label={"Username"}
              variant={"outlined"}
              type="text"
              size={"small"}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={"Password"}
              variant={"outlined"}
              type="password"
              size={"small"}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant={"contained"}
              size={"small"}
              color={"primary"}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
