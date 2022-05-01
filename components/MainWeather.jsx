import React from "react";
import BrokenCloudsAnimated from "../public/partly-cloudy-day-animated.svg";
import OvercastCloudsAnimated from "../public/overcast-day-animated.svg";
import { Box, Stack, styled, Typography } from "@mui/material";
import Wrapper from "./Wrapper";
import { Air, Opacity, Thermostat } from "@mui/icons-material";

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

const MainWeather = ({ name, weather, temp, humidity, wind }) => {
  return (
    <Wrapper>
      <Div1>
        <Typography variant="h5" fontWeight={700}>
          {name}
        </Typography>
        {weather === "broken clouds" ? (
          <BrokenCloudsAnimated style={{ width: "18rem", height: "18rem" }} />
        ) : (
          <OvercastCloudsAnimated style={{ width: "18rem", height: "18rem" }} />
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
