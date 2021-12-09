import React from "react";
import "./SpotifyWrapped.css";

const SpotifyWrapped = () => {
  return (
    <section className="spotifyWrappedBlock">
      <article>
        <div className="LeftBlock">
          <h4>#SPOTIFYWRAPPED</h4>
          <h1>
            2021 Wrapped is <br /> ready.
          </h1>
          <p className="enjoy">
            But it’s only available in the Spotify app.
            <br /> Download it now to discover more.
          </p>
          <figure className="sotre">
            <img
              src="https://www-growth.scdn.co/static/badges/svgs/apple/badge-en.svg"
              alt="App-store"
            />
            <img
              src="https://www-growth.scdn.co/static/badges/svgs/google/badge-en.svg"
              alt="play-store"
            />
          </figure>
          <p className="copyright">
            <a href="#">Listen to 2021 highlights here.</a>
          </p>
        </div>

        <div className="rightBolck"></div>
      </article>
    </section>
  );
};

export default SpotifyWrapped;
