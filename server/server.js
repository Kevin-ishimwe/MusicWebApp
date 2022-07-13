const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");
const spotifyWebApi = require("spotify-web-api-node");

const app = express();
app.post("/login", (req, res) => {
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000/home/",
    clientId:"478e3098f49747468ac64d435963597a",
    clientSecret:"d14eb505db0f49bdbe6b2f5e182a5204";


  });
});
