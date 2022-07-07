import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png.png";
import { useState } from "react";
function Navigation() {
  //search handle
  const [input, setinput] = useState("top_input1");
  function searchHandeler() {
    setinput("top_input2");
  }

  return (
    <div>
      {/* upward navigation */}
      <div className="navigation_top">
        <div className="navigation_top_left">
          <img src={logo} alt="logo" height="50vh" width="70vh" id="logo"></img>
          <h1 className="nav_top_left_header">MUSIX</h1>
        </div>
        <div className="navigation_top_middle">
          <ul className="nav_mid_ul">
            <li className="nav_mid_li">
              <a className="mid_links">Profile</a>
            </li>
            <li className="nav_mid_li">
              <a className="mid_links">About</a>
            </li>
            <li className="nav_mid_li">
              <a className="mid_links">Contacts</a>
            </li>
            <li className="nav_mid_li">
              <input
                type="text"
                placeholder="Artist,track or podcast"
                id={input}
              ></input>
              <i class="fa fa-search" id="search" onClick={searchHandeler}></i>
            </li>
          </ul>
          <div id="navigation_top_right">
            <i className="fas fa-bars" id="menu_bars"></i>
            <div className="nav_right_toggle">
              <i className="far fa-envelope" id="nav_top_right_icons"></i>
              <i className="fas fa-shopping-cart" id="nav_top_right_icons"></i>
              <a className="mid_link_log">LOGIN</a>
              <i className="fas fa-plus-square" id="nav_top_right_icons"></i>
            </div>
          </div>
        </div>
      </div>

      {/* side navigation bar */}
      <div className="side_navigation">
        <ul className="nav_side_ul">
          <li className="nav_side_li">
            <i class="fa-solid fa-house" id="nav_side_icons"></i>Home
          </li>
          <li className="nav_side_li">
            <i class="fa fa-user" aria-hidden="true" id="nav_side_icons"></i>
            Artist
          </li>
          <li className="nav_side_li">
            <i class="fa-solid fa-music" id="nav_side_icons"></i>Releases
          </li>
          <li className="nav_side_li">
            <i
              class="fa fa-calendar"
              aria-hidden="true"
              id="nav_side_icons"
            ></i>
            Events
          </li>
          <li className="nav_side_li">
            <i class="fa-solid fa-podcast" id="nav_side_icons"></i>Podcasts
          </li>
          <li className="nav_side_li">
            <i class="fas fa-shopping-cart" id="nav_side_icons"></i>Store
          </li>
          <li className="nav_side_li">
            <i class="fas fa-newspaper" id="nav_side_icons"></i>News
          </li>
        </ul>
        <div className="playing">
          <img
            src={logo}
            height="100px"
            alt="playlogo"
            className="playinglogo"
          />
          <h3 className="songtitle">song title</h3>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
