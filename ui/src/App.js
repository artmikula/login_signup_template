import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignUpPage from "./components/SignupPage";
import SearchReq from "./components/SearchReq";
import Results from "./components/Results";
import ErrorPage from "./components/ErrorPage";
import Container from "@mui/material/Container";
import axios from "axios";

function App() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({ username: null });
  const [resultData, setResultData] = useState(false);
  const [pwdCheck, setPwdCheck] = useState(false);
  const [userExists, setUserExists] = useState(false);
  let usernameExists = false;
  setPasswordValid = false;

  const [details, setDetails] = useState({ username: null, password: null });

  const [newUserData, setNewUserData] = useState({
    username: "",
    password: "",
    rePassword: "",
  });

  const [userData, setUserData] = useState({
    username: null,
    password: null,
  });

  async function signUpNewUser() {
    if (
      newUserData.username &&
      newUserData.password === newUserData.rePassword
    ) {
      await checkUserExists();
      if (usernameExists) {
        setError(null);
        addUser();
        console.log("creating user");
      } else {
        setError(`Username not available`);
      }
    } else {
      setError("Incorrect data");
    }
  }

  async function loginUser() {
    if (details.password && details.username) {
      await verifyCredentials();
      if ((details.password = pwdCheck)) {
        setUser({
          username: details.name,
        });
        console.log("correct");
        setError(null);
      } else {
        setError("Incorrect password");
      }
    } else {
      setError("Enter username and password");
    }
  }

  async function checkUserExists() {
    await axios.get(`/api/users/${newUserData.username}`).then((response) => {
      if (response.data[0].username) {
        usernameExists = true;
      }
    });
  }

  const addUser = () => {
    axios.post("/api/adduser", newUserData).then((response) => {
      console.log(response);
    });
  };

  async function verifyCredentials() {
    await axios.get(`/api/users/${details.username}`).then((response) => {
      if (response.data[0].password) {
        setPasswordValid = true;
      }
    });
  }

  return (
    <div>
      <Container component="main" maxWidth="lg">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <LoginForm
                  error={error}
                  setError={setError}
                  userData={userData}
                  setUserData={setUserData}
                  setUser={setUser}
                  verifyCredentials={verifyCredentials}
                  pwdCheck={pwdCheck}
                  details={details}
                  setDetails={setDetails}
                  loginUser={loginUser}
                />
              }
            />
            <Route
              path="/search"
              element={
                <SearchReq
                  error={error}
                  setError={setError}
                  setUser={setUser}
                  setResultData={setResultData}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <SignUpPage
                  error={error}
                  setError={setError}
                  addUser={addUser}
                  checkUserExists={checkUserExists}
                  userExists={userExists}
                  signUpNewUser={signUpNewUser}
                  newUserData={newUserData}
                  setNewUserData={setNewUserData}
                />
              }
            />
            <Route path="/results" element={<Results setUser={setUser} />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;
