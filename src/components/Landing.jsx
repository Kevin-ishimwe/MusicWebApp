import React from "react";
import { Container } from "react-bootstrap";

function Landing() {
  const AUTH_URL =
    "https://accounts.spotify.com/authorize?client_id=478e3098f49747468ac64d435963597a&response_type=token&redirect_uri=http://localhost:3000/home/&scope=streaming";
  return (
    <div>
      <div>
        <Container
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <a className="btn btn-success btn-lg" href={AUTH_URL}>
            Login With Spotify
          </a>
        </Container>
      </div>
    </div>
  );
}

export default Landing;
