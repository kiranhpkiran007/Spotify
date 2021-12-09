import React from "react";
import Slider from "./SliderComponent/Slider";
import SpotifyFree from "./SliderComponent/SpotifyFree";
import SpotifyWrapped from "./SliderComponent/SpotifyWrapped";

const Home = () => {
  return (
    <div>
      <Slider />
      <SpotifyWrapped />
      <SpotifyFree/>
    </div>
  );
};

export default Home;
