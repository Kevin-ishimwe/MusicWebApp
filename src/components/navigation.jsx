import React from "react";
import axios from "axios";
import { useEffect } from "react";
// import { NavLink } from "react-router-dom";
import logo from "./logo.png.png";
import { useState } from "react";

function Navigation() {
  const [searchresults, setsearchresults] = useState([]);
  const [token, settoken] = useState("");
  const [musictrack, setmusictrack] = useState([]);
  const [album_hand, setalbum_hand] = useState("none");
  const [artist_hand, setartist_hand] = useState("none");
  const [saved_in_account, setsaved_in_account] = useState([]);
  const [home_content, sethome_content] = useState("home_content");
  const [listen_track, setlisten_track] = useState(
    "https://p.scdn.co/mp3-preview/8b1004de6f678081564f9d14e1725f33ee4596db?cid=478e3098f49747468ac64d435963597a"
  );
  const [track_name, settrack_name] = useState("wow");
  const [track_playing_img, settrack_playing_img] = useState(
    "https://i.scdn.co/image/ab67616d00001e02157fcd1d1770bbc96c326544"
  );
  const [user_info, setuser_info] = useState([]);

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
  //search keyword getter
  const [searchkeyword, setsearchkeyword] = useState("");
  const searchkeywordgetter = (e) => {
    e.preventDefault();
    setsearchkeyword(e.target.value);
  };
  //search handler
  //API FOR SEARCH
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
        offset: 0,
      },
    });

    setsearchresults(data.data.artists.items);
    setmusictrack(data.data.tracks.items);
    setalbum_hand("albums");
    setartist_hand("results");
    sethome_content("home_content_none");
  };
  //API CALL FOR saved tracks
  const saved_tracks = async (e) => {
    e.preventDefault();
    const fav_tracks = await axios.get("https://api.spotify.com/v1/me/tracks", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        limit: 50,
        market: "AD",
      },
    });
    setsaved_in_account(fav_tracks.data.items);
  };
  //API CALL FOR user data
  const user_data = async (e) => {
    e.preventDefault();
    const my_data = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setuser_info(my_data.data);
  };
  console.log(user_info);
  // console.log("these are my favs", saved_in_account);
  // //prewiew song on click
  // //prewiew song on click
  // console.log(musictrack);
  return (
    <div onLoad={saved_tracks}>
      {/* upward navigation */}
      <div className="navigation_top" onLoad={user_data}>
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
                id="top_input2"
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
              <h5 id="user_name">
                {user_info.display_name ? user_info.display_name : "login"}
              </h5>
              <i
                className={
                  user_info.display_name ? "fa fa-user" : "fas fa-plus-square"
                }
                id="user_icon"
              ></i>
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
          <img src={track_playing_img} id="song_cover" />
        </div>
      </div>

      <div className=" all_search_results">
        <div className={artist_hand}>
          {searchresults.length === 0 ? (
            <h3>no results</h3>
          ) : (
            searchresults.map(({ images, name }) => {
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
            musictrack.map(({ album, artists, name }) => {
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
      <div className={home_content}>
        {saved_in_account.map(({ track }) => {
          const listen_handler = () => {
            setlisten_track(track.preview_url);
            settrack_name(track.name);
            settrack_playing_img(track.album.images[1].url);
          };

          return (
            <div className="home_content_item" onClick={listen_handler}>
              <img
                src={track.album.images[1].url}
                alt="can't displat"
                height="100"
              />
              <div>
                <h5>{track.name}</h5>
                <br></br>
                <p>{track.artists[0].name}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="player">
        <div className="track_info">
          <h5>{track_name}</h5>
        </div>
        <audio controls src={listen_track}>
          can't play shit
        </audio>
      </div>
    </div>
  );
}

export default Navigation;
