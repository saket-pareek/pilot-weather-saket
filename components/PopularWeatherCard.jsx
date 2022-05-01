import React from "react";
import BrokenCloudsAnimated from "../public/partly-cloudy-day-animated.svg";
import OvercastCloudsAnimated from "../public/overcast-day-animated.svg";
import { Box, styled, Typography } from "@mui/material";

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
          <BrokenCloudsAnimated style={{ width: "6rem", height: "6rem" }} />
        ) : (
          <OvercastCloudsAnimated style={{ width: "6rem", height: "6rem" }} />
        )}
      </Div2>
    </Div1>
  );
};

export default PopularWeatherCard;
