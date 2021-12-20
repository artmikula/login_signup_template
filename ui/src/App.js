import "./App.css";
import { useState } from "react";
import LoginForm from "./components/LoginForm";
import SignUpPage from "./components/SignupPage";
import ErrorPage from "./components/ErrorPage";
import Container from "@mui/material/Container";

function App() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({ username: null });
  const [page, setPage] = useState("login");
  const [userAdded, setUserAdded] = useState("");

  return (
    <div>
      <Container component="main" maxWidth="lg">
        {page === "login" && (
          <LoginForm
            error={error}
            setError={setError}
            setUser={setUser}
            setPage={setPage}
            userAdded={userAdded}
            setUserAdded={setUserAdded}
          />
        )}
        {page === "signup" && (
          <SignUpPage
            error={error}
            setError={setError}
            setPage={setPage}
            setUserAdded={setUserAdded}
          />
        )}
        {page === "error" && <ErrorPage />}
      </Container>
    </div>
  );
}

export default App;
