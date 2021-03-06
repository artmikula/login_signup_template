import "../style/login.css";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import axios from "axios";

function LoginForm({
  error,
  setError,
  setPage,
  setUser,
  userAdded,
  setUserAdded,
}) {
  const [loginInfo, setLoginInfo] = useState({ username: "", password: "" });
  let pwdCheck = null;

  const [details, setDetails] = useState({ username: null, password: null });

  const signUpUser = (e) => {
    e.preventDefault();
    setError(null);
    console.log("signed up");
  };

  const loginHandler = (e) => {
    e.preventDefault();
    loginUser();
  };

  async function loginUser() {
    if (loginInfo.password && loginInfo.username) {
      await checkPassword(loginInfo);
      if (loginInfo.password === pwdCheck) {
        setUser({
          username: loginInfo.name,
        });
        console.log("user set");
        setError(null);
        setUserAdded(null);
      } else {
        setError("Incorrect password");
        setUserAdded("");
        setError(null);
      }
    } else {
      setError("Enter username and password");
    }
  }

  async function checkPassword() {
    await axios.get(`/api/users/${loginInfo.username}`).then((response) => {
      if (response.data[0].password) {
        pwdCheck = response.data[0].password;
      }
    });
  }

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
          {userAdded !== "" ? <div className="message">{userAdded}</div> : ""}
          <Box
            sx={{
              marginTop: 6,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 4,
            }}
          >
            <TextField
              autoComplete="off"
              sx={{
                margin: 1,
                backgroundColor: "white",
              }}
              id="outlined-basic"
              type="text"
              label="Username"
              variant="outlined"
              name="username"
              onChange={(e) =>
                setLoginInfo({ ...loginInfo, username: e.target.value })
              }
            />
            <TextField
              autoComplete="off"
              sx={{
                margin: 1,
                backgroundColor: "white",
              }}
              id="outlined-basic"
              type="password"
              label="Password"
              variant="outlined"
              name="password"
              onChange={(e) =>
                setLoginInfo({ ...loginInfo, password: e.target.value })
              }
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{
                margin: 1,
              }}
              variant="contained"
              color="primary"
              onClick={(e) => loginHandler(e)}
            >
              ?????????
            </Button>
            <Button
              sx={{
                margin: 1,
              }}
              variant="contained"
              color="primary"
              onClick={(e) => signUpUser(e)}
            >
              ????????????
            </Button>
          </Box>
        </FormControl>
      </Box>
    </Container>
  );
}

export default LoginForm;
