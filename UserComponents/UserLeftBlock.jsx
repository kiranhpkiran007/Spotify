import React from "react";
import Logo from "./../Pages/HeaderComponent/Logo";
import { Link } from "react-router-dom";

const UserLeftBlock = () => {
  return (
    <div className="userLeftBlock">
      <div>
        <a href="#">
          <Logo />
        </a>
      </div>
      <div className="userMenu">
        <ul>
          <li>
            <a href="">
              <i class="fas fa-home-alt"></i>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fal fa-search"></i>
              <span>Search</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fas fa-books"></i>
              <span>Library</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="playList">
        <ul>
          <li>
            <a href="">
              <i class="fas fa-plus-square"></i>
              <span>Create Playlist</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fas fa-heart-square"></i>
              <span>Liked Songs</span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p
          style={{
            borderBottom: "1px solid grey",
            width: "75%",
            marginLeft: "20px",
          }}
        ></p>
      </div>
      <div className="InstallApp">
        <ul>
          <li>
            <a href="">My Playlist #1</a>
          </li>
          <li>
            <a href="">
              <i class="far fa-arrow-alt-circle-down"></i> Install App
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserLeftBlock;
