import React from "react";
import { Box, Stack, styled, SvgIcon, Typography } from "@mui/material";
import Wrapper from "./Wrapper";
import { Air, Opacity, Thermostat } from "@mui/icons-material";
import BrokenClouds from "../public/partly-cloudy.svg";
import OvercastClouds from "../public/overcast.svg";
import HeavyRain from "../public/09d.svg";
import Windy from "../public/01d.svg";
import Sunny from "../public/01d.svg";
import Drizzle from "../public/13d.svg";
import WindyRain from "../public/10d.svg";
import Thunder from "../public/11d.svg";

const Div1 = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(2),
  paddingTop: theme.spacing(16),
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const Div2 = styled(Stack)(({ theme }) => ({
  backgroundImage: "linear-gradient(to bottom, #def3f9, #d6e5ed)",
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  rowGap: theme.spacing(4),
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  paddingLeft: theme.spacing(0.5),
  paddingRight: theme.spacing(0.5),
  width: "100%",
  borderRadius: "1rem",
}));

const StyledSvgIcon = styled(SvgIcon)(({ theme }) => ({
  width: "20rem",
  height: "20rem",
  [theme.breakpoints.up("sm")]: {
    width: "26rem",
    height: "26rem",
  },
  [theme.breakpoints.up("md")]: {
    width: "36rem",
    height: "36rem",
  },
}));

const MainWeather = ({ name, weather, temp, humidity, wind }) => {
  return (
    <Wrapper>
      <Div1>
        <Typography variant="h5" fontWeight={700}>
          {name}
        </Typography>
        {weather === "broken clouds" ? (
          <StyledSvgIcon>
            <BrokenClouds className="w-40 sm:w-64 h-40 sm:h-64" />
          </StyledSvgIcon>
        ) : weather === "overcast clouds" ? (
          <StyledSvgIcon>
            <OvercastClouds className="w-40 h-40 sm:w-64 sm:h-64" />
          </StyledSvgIcon>
        ) : weather === "heavy rain" ? (
          <StyledSvgIcon>
            <HeavyRain className="w-40 h-40 sm:w-64 sm:h-64" />
          </StyledSvgIcon>
        ) : weather === "windy" ? (
          <StyledSvgIcon>
            <Windy className="w-40 h-40 sm:w-64 sm:h-64" />
          </StyledSvgIcon>
        ) : weather === "sunny" ? (
          <StyledSvgIcon>
            <Sunny className="w-40 h-40 sm:w-64 sm:h-64" />
          </StyledSvgIcon>
        ) : weather === "drizzle" ? (
          <StyledSvgIcon>
            <Drizzle className="w-40 h-40 sm:w-64 sm:h-64" />
          </StyledSvgIcon>
        ) : weather === "windy rain" ? (
          <StyledSvgIcon>
            <WindyRain className="w-40 h-40 sm:w-64 sm:h-64" />
          </StyledSvgIcon>
        ) : weather === "thunder" ? (
          <StyledSvgIcon>
            <Thunder className="w-40 h-40 sm:w-64 sm:h-64" />
          </StyledSvgIcon>
        ) : (
          ""
        )}
        <Typography variant="h6" fontWeight={700} textTransform="capitalize">
          {weather}
        </Typography>
        <Typography variant="h1" fontWeight={700} style={{ margin: "2.5rem" }}>{`${Math.trunc(temp - 273.15)}\xB0c`}</Typography>
        <Div2 maxWidth="sm">
          <Stack direction="column" alignItems="center" spacing={2}>
            <Opacity sx={{ fontSize: { xs: "1.5rem", sm: "2.5rem" } }} />
            <Typography fontWeight={500}>10%</Typography>
          </Stack>
          <Stack direction="column" alignItems="center" spacing={2}>
            <Air sx={{ fontSize: { xs: "1.5rem", sm: "2.5rem" } }} />
            <Typography fontWeight={500}>10 km/h</Typography>
          </Stack>
          <Stack direction="column" alignItems="center" spacing={2}>
            <Thermostat sx={{ fontSize: { xs: "1.5rem", sm: "2.5rem" } }} />
            <Typography fontWeight={500}>50%</Typography>
          </Stack>
        </Div2>
      </Div1>
    </Wrapper>
  );
};

export default MainWeather;
