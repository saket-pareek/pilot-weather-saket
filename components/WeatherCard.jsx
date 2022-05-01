import * as React from "react";
import BrokenClouds from "../public/partly-cloudy.svg";
import OvercastClouds from "../public/overcast.svg";

import { Stack, styled, Typography, Box, SvgIcon } from "@mui/material";
import Wrapper from "./Wrapper";

const Card = styled("div")(({ theme }) => ({
  cursor: "pointer",
  // padding: theme.spacing(1, 2),
  paddingRight: theme.spacing(3),
  backgroundImage: "linear-gradient(to bottom, #def3f9, #d6e5ed)",
  [theme.breakpoints.up("md")]: {
    paddingBottom: theme.spacing(7),
  },
}));

const Content = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "0.5rem",
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(3),

  [theme.breakpoints.up("md")]: {
    flexDirection: "column",
  },
}));

const TextContent = styled("div")(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.up("md")]: {
    marginTop: theme.spacing(1),
  },
}));

const StyledBox = styled("div")(({ theme }) => ({
  display: "flex",
  marginLeft: "0.25rem",
  flexDirection: "column",
  alignItems: "flex-end",

  [theme.breakpoints.up("sm")]: {
    marginTop: theme.spacing(2),
  },
  [theme.breakpoints.up("sm")]: {
    marginTop: theme.spacing(2),
    alignItems: "center",
  },
}));

const Typography1 = styled("div")(({ theme }) => ({
  display: "none",
  color: "#6B7280",
  fontWeight: "700",
  textTransform: "capitalize",

  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));

const Typography2 = styled("div")(({ theme }) => ({
  fontSize: "3rem",
  lineHeight: "1",
  fontWeight: "700",

  [theme.breakpoints.up("sm")]: {
    fontSize: "4.5rem",
    lineHeight: "1",
  },
}));

const Typography3 = styled("div")(({ theme }) => ({
  fontWeight: 500,
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
  },
}));

const StyledBox2 = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(2.5),
  display: "flex",
  marginLeft: "0.5rem",
  alignItems: "center",
  "& :not(:first-child)": {
    marginLeft: theme.spacing(0.75),
  },
  "& :not(:last-child)": {
    marginRight: theme.spacing(0.75),
  },
  [theme.breakpoints.up("sm")]: {},
}));

const StyledSvgIcon = styled(SvgIcon)(({ theme }) => ({
  width: "10rem",
  height: "10rem",
  [theme.breakpoints.up("sm")]: {
    width: "16rem",
    height: "16rem",
  },
}));

const StyledImg = styled("img")(({ theme }) => ({
  marginBottom: 0,
  [theme.breakpoints.up("sm")]: {
    width: "1.75rem",
  },
}));

const WeatherCard = ({ weather, name, temp, country, icon }) => {
  return (
    <Card>
      <Content>
        {weather === "broken clouds" ? (
          <StyledSvgIcon>
            <BrokenClouds />
          </StyledSvgIcon>
        ) : (
          <StyledSvgIcon>
            <OvercastClouds />
          </StyledSvgIcon>
        )}
        <TextContent>
          <StyledBox>
            <Typography1>{weather}</Typography1>
            <Typography2 sx={{ marginTop: "1.5rem" }}>{`${Math.trunc(temp - 273.15)}\xB0c`}</Typography2>
            <StyledBox2>
              <StyledImg
                loading="lazy"
                src={`https://flagcdn.com/w20/${country.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w40/${country.toLowerCase()}.png 2x`}
                alt=""
              />
              <Typography3>{name}</Typography3>
            </StyledBox2>
          </StyledBox>
        </TextContent>
      </Content>
    </Card>
  );
};

export default WeatherCard;
