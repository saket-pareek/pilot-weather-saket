import NavBar from "../../components/NavBar";
import MainWeather from "../../components/MainWeather";
import Footer from "../../components/Footer";
import { data } from "../../lib/data";
import { CssBaseline } from "@mui/material";

export default function weather({ name, weather, main, wind }) {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <MainWeather name={name} weather={weather[0].description} temp={main.temp} humidity={main.humidity} wind={wind.speed} />
      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  console.log(context);
  const { params } = context;
  return {
    props: data.find((item) => item.name === params.name),
  };
}

export async function getStaticPaths() {
  return {
    paths: data.map((item) => ({
      params: {
        name: item.name,
      },
    })),
    fallback: false,
  };
}
