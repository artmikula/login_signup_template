import React from "react";
import { useState } from "react";
import { Container, FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "@mui/material";

function SignupPage({
  error,
  setError,
  newUserData,
  setNewUserData,
  signUpNewUser,
}) {
  let navigate = useNavigate();

  const signUpHandler = (e) => {
    e.preventDefault();
    setError(null);
    signUpNewUser(newUserData);
  };

  const cancelSignup = (e) => {
    setError(null);
    navigate("/");
  };

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 4,
          backgroundColor: "#9CDAB6",
        }}
      >
        <FormControl autoComplete="off">
          {error !== "" ? <div className="error">{error}</div> : ""}
          <TextField
            autoComplete="off"
            sx={{
              margin: 1,
              backgroundColor: "white",
            }}
            type="text"
            name="username"
            label="Username"
            variant="outlined"
            onChange={(e) =>
              setNewUserData({ ...newUserData, username: e.target.value })
            }
          />
          <TextField
            autoComplete="off"
            sx={{
              margin: 1,
              backgroundColor: "white",
            }}
            type="password"
            name="password"
            label="Password"
            variant="outlined"
            onChange={(e) =>
              setNewUserData({ ...newUserData, password: e.target.value })
            }
          />
          <TextField
            autoComplete="off"
            sx={{
              margin: 1,
              backgroundColor: "white",
            }}
            type="password"
            name="rePassword"
            label="Confirm Password"
            variant="outlined"
            onChange={(e) =>
              setNewUserData({
                ...newUserData,
                rePassword: e.target.value,
              })
            }
          />
          <br />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={signUpHandler}
            >
              가입하기
            </Button>
            <Button
              type="button"
              variant="contained"
              color="primary"
              onClick={cancelSignup}
            >
              취소
            </Button>
          </Box>
        </FormControl>
      </Box>
    </Container>
  );
}

export default SignupPage;
