import React from "react";

function Sidebar(props) {
  return (
    <div>
      {/* side navigation bar */}
      <div className="side_navigation">
        <ul className="nav_side_ul">
          <li className="nav_side_li">
            <i className="fa-solid fa-house" id="nav_side_icons"></i>Home
          </li>
          <li className="nav_side_li">
            <i
              className="fa fa-user"
              aria-hidden="true"
              id="nav_side_icons"
            ></i>
            Artist
          </li>
          <li className="nav_side_li">
            <i className="fa-solid fa-music" id="nav_side_icons"></i>Releases
          </li>
          <li className="nav_side_li">
            <i
              className="fa fa-calendar"
              aria-hidden="true"
              id="nav_side_icons"
            ></i>
            Events
          </li>
          <li className="nav_side_li">
            <i className="fa-solid fa-podcast" id="nav_side_icons"></i>Podcasts
          </li>
          <li className="nav_side_li">
            <i className="fas fa-shopping-cart" id="nav_side_icons"></i>Store
          </li>
          <li className="nav_side_li">
            <i className="fas fa-newspaper" id="nav_side_icons"></i>News
          </li>
        </ul>
        <div className="playing">
          <img src={props.playing_img} id="song_cover" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
