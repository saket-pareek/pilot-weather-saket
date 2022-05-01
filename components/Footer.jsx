import { styled } from "@mui/material";
import React from "react";

const Div1 = styled("div")(({ theme }) => ({
  backgroundColor: "#fbe9e7",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(4),
}));

const Footer = () => {
  return <Div1 className=""></Div1>;
};

export default Footer;
