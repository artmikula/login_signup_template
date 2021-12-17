import { useState } from "react";
import { Container, FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function SearchReq({ error, setError, setUser }) {
  let navigate = useNavigate();
  const [searchData, setSearchData] = useState({});

  const submitSearchData = () => {
    if (
      searchData.data1 &&
      searchData.data2 &&
      searchData.data3 &&
      searchData.data4
    ) {
      setError(null);
      console.log("//submit data function here//");
      navigate("/results");
    } else {
      setError("enter all data");
    }
  };

  const logout = () => {
    console.log("logged out");
    setUser({ username: null });
    setError(null);
    navigate("/");
  };

  return (
    <Container component="main" maxWidth="lg">
      <Box>
        <AppBar position="static">
          <Toolbar>
            <MenuIcon
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></MenuIcon>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              검색 조건
            </Typography>
            <Button variant="contained" color="secondary" onClick={logout}>
              로그아웃
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        sx={{
          height: 400,
        }}
      >
        <FormControl autocomplete="off">
          <div id="container">
            {error !== "" ? <div className="error">{error}</div> : ""}
            <div>
              <div className="box6">
                <h3>이용형태</h3>
                <TextField
                  sx={{
                    backgroundColor: "white",
                    width: 360,
                  }}
                  autoComplete="off"
                  label="정회원 1 + 지인동반 1 "
                  onChange={(e) =>
                    setSearchData({ ...searchData, data1: e.target.value })
                  }
                />
              </div>
              <div className="box6">
                <h3>회원구분</h3>
                <TextField
                  sx={{
                    backgroundColor: "white",
                    width: 360,
                  }}
                  autoComplete="off"
                  label="개인회원"
                  onChange={(e) =>
                    setSearchData({ ...searchData, data2: e.target.value })
                  }
                />
              </div>
            </div>
            <div>
              <div className="box6">
                <h3>보증금</h3>
                <TextField
                  sx={{
                    backgroundColor: "white",
                    width: 360,
                  }}
                  autoComplete="off"
                  label="150,000 ~ 300,000"
                  onChange={(e) =>
                    setSearchData({ ...searchData, data3: e.target.value })
                  }
                />
              </div>
              <div className="box6">
                <h3>회원권 가격</h3>
                <TextField
                  sx={{
                    backgroundColor: "white",
                    width: 360,
                  }}
                  autoComplete="off"
                  label="1,500,000 ~ 2,000,000"
                  onChange={(e) =>
                    setSearchData({ ...searchData, data4: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </FormControl>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          sx={{
            margin: 1,
          }}
          variant="contained"
          color="secondary"
          onClick={() => submitSearchData()}
        >
          추천받기
        </Button>
      </Box>
    </Container>
  );
}

export default SearchReq;
