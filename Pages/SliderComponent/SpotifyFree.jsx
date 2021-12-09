import React from "react";
import "./SpotifyFree.css";

const SpotifyFree = () => {
  return (
    <section className="spotifyFreeBlock">
      <article>
        <div className="spotifyFree-LeftBlock">
          <h1>Looking for music?</h1>
          <p className="releses">Start listening to the best new releases.</p>
          <div className="btn">
            <a href="">
              <button >OPEN WEB PLAYER</button>
            </a>
          </div>
        </div>
        <div className="spotifyFree-RightBlock"></div>
      </article>
    </section>
  );
};

export default SpotifyFree;
