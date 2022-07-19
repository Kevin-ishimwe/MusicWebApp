import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png.png";
import { useState } from "react";
import Slider from "react-slick";
import SpotifyWebPlayer from "react-spotify-web-playback/lib";
import SpotifyPlayer from "react-spotify-web-playback";
import { Carousel } from "react-responsive-carousel";
import ReactAudioPlayer from "react-audio-player";

function Navigation() {
  const [searchresults, setsearchresults] = useState([]);
  const [token, settoken] = useState("");
  const [musictrack, setmusictrack] = useState([]);
  const [album_hand, setalbum_hand] = useState("none");
  const [artist_hand, setartist_hand] = useState("none");
  //getting the token and keeping it in local storage
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
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const search_artist = async (e) => {
    e.preventDefault();
    const data = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchkeyword,
        type: "track,artist",
        limit: 10,
        market: "ES",
        oofset: 1,
      },
    });

    setsearchresults(data.data.artists.items);
    setmusictrack(data.data.tracks.items);
    setalbum_hand("albums");
    setartist_hand("results");
  };
  console.log(musictrack);

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
          <ReactAudioPlayer
            src="https://p.scdn.co/mp3-preview/19d35a76be790c1b21fb74f463aee5289baf5b68?cid=478e3098f49747468ac64d435963597a"
            controls
          />
        </div>
      </div>

      <div className=" all_search_results">
        <div className={artist_hand}>
          {searchresults.length === 0 ? (
            <h3>no results</h3>
          ) : (
            searchresults.map(({ images, name }) => {
              // for no results
              if (images[1]) {
                return (
                  <div className="search_item">
                    <img
                      src={images[0].url}
                      alt="search results"
                      height="200px"
                      width="200px"
                    />
                    <h4>{name}</h4>
                  </div>
                );
              } else {
              }
            })
          )}
        </div>
        <div className={album_hand}>
          {musictrack.length === 0 ? (
            <h3>no albums</h3>
          ) : (
            musictrack.map(({ album, artists, name, e }) => {
              console.log(artists);
              if (album) {
                return (
                  <div className="album_b0x">
                    <img
                      src={album.images[1].url}
                      alt="album results"
                      height="100px"
                      width="100px"
                    ></img>
                    <div>
                      <h5>album:{album.name}</h5>
                      <h5>{name} </h5>

                      <p>{artists[0].name}</p>
                    </div>
                  </div>
                );
              }
            })
          )}
        </div>
      </div>

      <div className="tracks_results">musictrack.map(())</div>
      {/* <div className="homepage_defult">
        z
        <img
          src="https://i.scdn.co/image/ab6761610000e5eb0f3bcc7b3d23e7cbece03012"
          width="200px"
          height="180px"
        />
        <h2>hoho</h2>
        <img
          src="https://i.scdn.co/image/ab6761610000517423c1d2fac850d037709ff548"
          width="200px"
          height="180px"
        />
      </div> */}
    </div>
  );
}

export default Navigation;
