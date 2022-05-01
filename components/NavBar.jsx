import React from "react";
import { useRouter } from "next/router";
import Wrapper from "./Wrapper";
import { Avatar, styled, Box } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { ArrowBack } from "@mui/icons-material";

const Main = styled("div")(({ theme }) => ({
  position: "fixed",
  width: "100%",
  zIndex: "20",
}));

const TopNav = styled("div")(({ theme }) => ({
  backgroundColor: "#c8b7b5",
  padding: theme.spacing(2),
}));

const BottomNav = styled("div")(({ theme }) => ({
  backgroundColor: "#fbe9e7",
  padding: theme.spacing(1, 0),
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 45,
  height: 45,
}));

const Navbar = () => {
  const router = useRouter();
  return (
    <Main>
      <TopNav />
      <BottomNav>
        <Wrapper>
          <StyledBox>
            <Box onClick={() => (router.pathname === "/" ? "" : router.back())}>
              {router.pathname === "/" ? (
                <Menu style={{ width: "2rem", height: "2rem", cursor: "pointer" }} />
              ) : (
                <ArrowBack style={{ width: "2rem", height: "2rem", cursor: "pointer" }} />
              )}
            </Box>
            <StyledAvatar src="/user.jpg" alt="user" sx={{ cursor: "pointer" }} />
          </StyledBox>
        </Wrapper>
      </BottomNav>
    </Main>
  );
};

export default Navbar;
