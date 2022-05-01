import React, { useRef } from "react";
import Link from "next/link";
import PopularWeatherCard from "./PopularWeatherCard";
import ArrowGroup from "../components/ArrowGroup";
import { data } from "../lib/data";
import Wrapper from "./Wrapper";
import { styled, Typography } from "@mui/material";

const Div1 = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
}));

const Div2 = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const Div3 = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateRows: "repeat(2, minmax(0, 1fr))",
  gridAutoColumns: "86%",
  columnGap: "3.5%",
  rowGap: "0.75rem",
  scrollSnapType: "x mandatory",
  gridAutoFlow: "column",
  overflowX: "scroll",
  scrollBehavior: "smooth",

  [theme.breakpoints.up("sm")]: {
    gridAutoColumns: "48%",
    rowGap: "1.25rem",
    paddingTop: 0,
    rowGap: "2%",
  },

  [theme.breakpoints.up("md")]: {
    gridAutoColumns: "32%",
    columnGap: "2%",
  },
}));

const Div4 = styled("div")(({ theme }) => ({
  scrollSnapAlign: "start",
  marginTop: theme.spacing(0.5),
  [theme.breakpoints.up("sm")]: {
    marginTop: theme.spacing(1),
    scrollSnapAlign: "center",
  },
  [theme.breakpoints.up("md")]: {
    scrollSnapAlign: "center",
  },
}));

const PopularLocations = () => {
  const ref = useRef();

  const onClickingLeft = () => {
    ref.current.scrollLeft -= ref.current.clientWidth;
  };

  const onClickingRight = () => {
    ref.current.scrollLeft += ref.current.clientWidth;
  };

  return (
    <Wrapper>
      <Div1 className="">
        <Div2 className="">
          <Typography variant="subtitle1" fontWeight={500}>
            Popular Locations
          </Typography>
          <Typography variant="subtitle2" sx={{ cursor: "pointer" }}>
            View All
          </Typography>
        </Div2>
        <Div3 ref={ref} className="scrollbar-hide">
          {data.map((item) => (
            <Link key={item.id} href={`/weather/${item.name}`}>
              <Div4>
                <PopularWeatherCard name={item.name} temp={item.main.temp} weather={item.weather[0].description} country={item.sys.country} />
              </Div4>
            </Link>
          ))}
        </Div3>
      </Div1>
      <ArrowGroup onClickingLeft={onClickingLeft} onClickingRight={onClickingRight} />
    </Wrapper>
  );
};

export default PopularLocations;
