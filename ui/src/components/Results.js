import { Container, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MenuIcon from "@mui/icons-material/Menu";
import PeopleIcon from "@mui/icons-material/People";

function Results({ setUser }) {
  let navigate = useNavigate();

  const logout = () => {
    console.log("logged out");
    setUser({ username: null });
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
            <PeopleIcon sx={{ mr: 2 }}></PeopleIcon>
            <Typography
              variant="h6"
              component="div"
              alignItems="center"
              sx={{
                flexGrow: 1,
              }}
            >
              고객님을 위한 맞춤 회원권
            </Typography>
            <Button variant="contained" color="secondary" onClick={logout}>
              로그아웃
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#9CDAB6",
        }}
      >
        <Box
          sx={{
            width: 400,
            height: 400,
            backgroundColor: "#27AE60",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: 10,
          }}
        >
          이용형태 : 정회원 + 지인동반 1인 회원구분 : 개인회원 보증금 :
          200,000원 가격 : 1,700,0000원{" "}
        </Box>
        <Box>
          <ArrowForwardIosIcon />
        </Box>
        <Box
          sx={{
            width: 400,
            height: 400,
            backgroundColor: "#27AE60",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: 10,
          }}
        >
          00 골프장 A 회원권{" "}
        </Box>
      </Box>
    </Container>
  );
}

export default Results;
