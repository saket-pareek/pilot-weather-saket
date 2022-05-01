import React from "react";
import BrokenClouds from "../public/partly-cloudy.svg";
import OvercastClouds from "../public/overcast.svg";
import HeavyRain from "../public/09d.svg";
import Windy from "../public/01d.svg";
import Sunny from "../public/01d.svg";
import Drizzle from "../public/13d.svg";
import WindyRain from "../public/10d.svg";
import Thunder from "../public/11d.svg";
import { Box, styled, SvgIcon, Typography } from "@mui/material";

const Div1 = styled("div")(({ theme }) => ({
  cursor: "pointer",
  paddingTop: theme.spacing(1),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(2),
  backgroundImage: "linear-gradient(to bottom, #def3f9, #d6e5ed)",
}));

const Div2 = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: theme.shape.borderRadius,
}));

const Div3 = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "& :not(:first-child)": {
    marginLeft: theme.spacing(3),
  },
  "& :not(:last-child)": {
    marginRight: theme.spacing(3),
  },
}));

const Div4 = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "& :not(:first-child)": {
    marginLeft: theme.spacing(0.75),
  },
  "& :not(:last-child)": {
    marginRight: theme.spacing(0.75),
  },
}));

const StyledSvgIcon = styled(SvgIcon)(({ theme }) => ({
  width: "6rem",
  height: "6rem",
  [theme.breakpoints.up("sm")]: {
    width: "8rem",
    height: "8rem",
  },
}));

const PopularWeatherCard = ({ weather, name, temp, country }) => {
  return (
    <Div1>
      <Div2>
        <Box>
          <Div3>
            <Typography variant="h5" fontWeight={700}>{`${Math.trunc(temp - 273.15)}\xB0c`}</Typography>
          </Div3>
          <Div4>
            <Typography variant="subtitle2">{name}</Typography>
            <img
              loading="lazy"
              width="20"
              src={`https://flagcdn.com/w20/${country.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/w40/${country.toLowerCase()}.png 2x`}
              alt=""
            />
          </Div4>
        </Box>
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
      </Div2>
    </Div1>
  );
};

export default PopularWeatherCard;
