import React from "react";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

function Landing() {
  const AUTH_URL =
    "https://accounts.spotify.com/authorize?client_id=478e3098f49747468ac64d435963597a&response_type=token&redirect_uri=https://jovial-profiterole-3bf938.netlify.app/home/&scope=streaming%20user-modify-playback-state%20user-library-modify%20user-library-read%20user-read-playback-position&show_dialog=true%20user-read-email%20user-read-private%20user-read-playback-state%20user-modify-playback-state%20user-library-read%20user-library-modify";
  //private methods

  return (
    <div>
      <div>
        <div className="landing"></div>
        <div className="main">
          <div className="socials_main">
            <a href="https://github.com/Kevin-ishimwe" target="_blank">
              <BsGithub className="main_icons" />
            </a>
            <a
              href="https://instagram.com/kevin_ish_mw?igshid=ZDdkNTZiNTM="
              target="_blank"
            >
              <BsInstagram className="main_icons" />
            </a>
            <a
              href="https://www.linkedin.com/in/ishimwe-kevin-30538625a"
              target="_blank"
            >
              <FaLinkedinIn className="main_icons" />
            </a>
          </div>

          <a className=" redirect" href={AUTH_URL}>
            Login With Spotify
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
