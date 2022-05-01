import React from "react";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import { styled } from "@mui/material";

const ArrowDiv = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(3),
  display: "flex",
  justifyContent: "center",

  "& :not(:first-child)": {
    marginLeft: theme.spacing(3),
  },
  [theme.breakpoints.up("")]: {},
}));

const ArrowGroup = ({ className, onClickingRight, onClickingLeft }) => {
  return (
    <ArrowDiv>
      <ArrowBack style={{ cursor: "pointer" }} onClick={onClickingLeft} />
      <ArrowForward style={{ cursor: "pointer" }} onClick={onClickingRight} />
    </ArrowDiv>
  );
};

export default ArrowGroup;
