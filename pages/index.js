import { CssBaseline } from "@mui/material";
import NavBar from "../components/NavBar";
import Nav from "../components/Nav";
import Search from "../components/Search";
import Footer from "../components/Footer";
import PopularLocations from "../components/PopularLocations";

import MainCards from "../components/MainCards";

export default function Home() {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <Search />
      <MainCards />
      <Nav />
      <PopularLocations />
      <Footer />
    </>
  );
}
