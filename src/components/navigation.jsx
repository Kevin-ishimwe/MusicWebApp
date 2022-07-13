import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png.png";
import { useState } from "react";
function Navigation() {
  const [searchresults, setsearchresults] = useState([]);
  const [token, settoken] = useState("");
  const [search_display, setsearch_display] = useState("no");
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
    }
    settoken(token);
  }, []);

  localStorage.setItem("token", token);
  //search theme button
  const [input, setinput] = useState("top_input2");
  //search keyword getter
  const [searchkeyword, setsearchkeyword] = useState("");
  const searchkeywordgetter = (e) => {
    e.preventDefault();
    setsearchkeyword(e.target.value);
  };
  //search handler

  const search_artist = async (e) => {
    e.preventDefault();
    const data = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchkeyword,
        type: "artist",
        limit: 7,
      },
    });
    console.log(data, "sdfadfasfa/////////////////////////////////////");

    setsearchresults(data.data.artists.items);
    setsearch_display("yes");
    console.log();
  };

  var link_array = [];
  if (searchresults.length >= 3) {
    console.log(searchresults.length);
    for (let i = 0; 3 > i; i++) {
      link_array.push(searchresults[i].images[i].url);
    }
  }
  console.log(link_array);

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
                placeholder="search Artist,track or podcast"
                id={input}
                onInput={searchkeywordgetter}
              ></input>
              <i class="fa fa-search" id="search" onClick={search_artist}></i>
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
      <div className="results">
        {searchresults.map(({ images }) => {
          console.log(searchresults);
          return (
            <img
              src={images[0].url}
              alt={images[0].url}
              height="200px"
              width="200px"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Navigation;
