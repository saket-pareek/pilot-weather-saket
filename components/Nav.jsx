import { Chip, Stack, Typography } from "@mui/material";
import React from "react";
import { daysData } from "../lib/data";
import Wrapper from "./Wrapper";
import { styled } from "@mui/material";

const Div1 = styled("div")(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(1),
  paddingLeft: 0,
  display: "flex",

  [theme.breakpoints.up("sm")]: {
    justifyContent: "center",
  },
}));

const StyledBox = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  right: 0,
  backgroundImage: "linear-gradient(to left, #fff, rgb(255 255 255 / 0))",
  height: "100%",
  width: "16%",
}));

const Nav = () => {
  const handleChipClick = () => {
    console.log("Chip Clicked");
  };

  return (
    <Wrapper>
      <Div1 sx={{ marginTop: "1rem" }}>
        <Stack className="scrollbar-hide" direction="row" spacing={4} sx={{ overflow: "scroll", paddingRight: "2rem", paddingLeft: "0.5rem" }}>
          {daysData.map((item) => (
            <Chip key={item.id} label={item.title} onClick={handleChipClick} />
          ))}
        </Stack>
        <StyledBox />
      </Div1>
    </Wrapper>
  );
};

export default Nav;
