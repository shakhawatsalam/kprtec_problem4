import React from "react";
import Carousel from "../Component/carousel/Carousel";
import December from "../Component/December14/December";
import NavBar from "../Component/navbar/NavBar";


const Home = () => {
  return (
    <>
      <NavBar />
      <Carousel />
      <December/>
    </>
  );
};

export default Home;
