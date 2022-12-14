import React from "react";
import Carousel from "../Component/carousel/Carousel";
import December from "../Component/December14/December";
import Footer from "../Component/footer/Footer";
import NavBar from "../Component/navbar/NavBar";
import NewRelease from "../Component/NewReleases/NewRelease";


const Home = () => {
  return (
    <>
      <NavBar />
      <Carousel />
      <December />
      <NewRelease />
      <Footer/>
    </>
  );
};

export default Home;
