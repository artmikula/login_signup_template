import "./App.css";
import { useState } from "react";
import LoginForm from "./components/LoginForm";
import SignUpPage from "./components/SignupPage";
import SearchReq from "./components/SearchReq";
import Results from "./components/Results";
import ErrorPage from "./components/ErrorPage";
import Container from "@mui/material/Container";

function App() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({ username: null });
  const [resultData, setResultData] = useState(false);
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
        {page === "search" && user && (
          <SearchReq
            error={error}
            setError={setError}
            setUser={setUser}
            setResultData={setResultData}
            setPage={setPage}
          />
        )}
        {page === "results" && user && (
          <Results setUser={setUser} setPage={setPage} />
        )}
        {page === "error" && <ErrorPage />}
      </Container>
    </div>
  );
}

export default App;
