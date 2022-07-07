import React, { useState } from "react";

function FetchApi() {
  const [data, setdata] = useState("");
  const [keyword, setkeyword] = useState();

  //wat we got in input
  const keywordHandler = (e) => {
    setkeyword(e.target.value);
  };
  //search query string
  let movieGetter = () => {
    fetch(`https://api.tvmaze.com/search/shows?q=${keyword}`)
      .then((response) => response.json())
      .then((jsondata) => setdata(jsondata));
    console.log(data.length);
    console.log(typeof data);

    // console.log(results);
  };
  let results = [];
  if (data) {
    for (let i = 0; i < data.length; i++) {
      results.push(data[i].show.name);
    }
  }
  console.log(results);
  return (
    <div className="test">
      <h1>Fetch Api test</h1>
      <input
        type="text"
        placeholder="movie search query exercise"
        onChange={keywordHandler}
      ></input>
      <button onClick={movieGetter}>click</button>

      {results.map(
        (item) => (
          <li>{item}</li>
        )

        // console.log(typeof item);
      )}
    </div>
  );
}

export default FetchApi;
