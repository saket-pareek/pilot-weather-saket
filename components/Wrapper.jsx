import React from "react";
import { styled } from "@mui/material";

const WrapperStyles = styled("div")(({ theme }) => ({
  maxWidth: theme.breakpoints.values.lg,
  margin: "0 auto",
  padding: theme.spacing(1, 2),
}));

const Wrapper = ({ children }) => {
  return <WrapperStyles>{children}</WrapperStyles>;
};

export default Wrapper;
