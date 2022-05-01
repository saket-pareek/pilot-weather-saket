import { styled, alpha, Container, Box } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import Wrapper from "./Wrapper";

const Main = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(15.5),
}));

const SearchBase = styled("div")(({ theme }) => ({
  zIndex: "10",
  position: "relative",
  width: "100%",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.grey[400], 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.grey[400], 0.25),
  },
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  padding: theme.spacing(1),
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    paddingRight: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const Search = () => {
  return (
    // <Box>
    //   <Container>
    //     <SearchBase>
    //       <SearchIconWrapper>
    //         <SearchIcon />
    //       </SearchIconWrapper>
    //       <StyledInputBase placeholder="Search City" inputProps={{ "aria-label": "search" }} />
    //     </SearchBase>
    //   </Container>
    // </Box>
    <Main>
      <Wrapper>
        <SearchBase>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search City" inputProps={{ "aria-label": "search" }} />
        </SearchBase>
      </Wrapper>
    </Main>
  );
};

export default Search;
