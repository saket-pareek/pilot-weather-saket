import React from "react";
import Link from "next/link";
import WeatherCard from "../components/WeatherCard";
import { data } from "../lib/data";
import { styled } from "@mui/material";
import Wrapper from "./Wrapper";

const StyledDiv0 = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(1),
  width: "100%",
  [theme.breakpoints.up("md")]: {
    display: "flex",
    columnGap: theme.spacing(8),
  },
}));

const StyledDiv = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(3),
  [theme.breakpoints.up("md")]: {
    marginTop: theme.spacing(1),
    width: "50%",
  },
}));

const MainCards = () => {
  return (
    <Wrapper>
      <StyledDiv0>
        {data.map((item) => (
          <Link key={item.id} href={`/weather/${item.name}`}>
            <StyledDiv>
              <WeatherCard
                name={item.name}
                icon={item.weather[0].icon}
                temp={item.main.temp}
                weather={item.weather[0].description}
                country={item.sys.country}
              />
            </StyledDiv>
          </Link>
        ))}
      </StyledDiv0>
    </Wrapper>
  );
};

export default MainCards;
