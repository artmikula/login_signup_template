import "../style/login.css";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginForm({ error, loginUser }) {
  let navigate = useNavigate();

  const [details, setDetails] = useState({ username: null, password: null });

  const signUpUser = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  const loginHandler = (e) => {
    e.preventDefault();
    loginUser(details);
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
                setDetails({ ...details, username: e.target.value })
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
                setDetails({ ...details, password: e.target.value })
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
              로그인
            </Button>
            <Button
              sx={{
                margin: 1,
              }}
              variant="contained"
              color="primary"
              onClick={(e) => signUpUser(e)}
            >
              가입하기
            </Button>
          </Box>
        </FormControl>
      </Box>
    </Container>
  );
}

export default LoginForm;
