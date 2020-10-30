import React, { useState, useEffect } from "react";
import "./styles.css";
import Video from "./Video";

const requestOptions = {
  method: "GET",
  redirect: "follow"
};

export default function App(props) {
  const [data, setData] = useState(false);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails,id,snippet,status&maxResults=200&playlistId=PLr5G1L8pu9wLB7oBlMLUkoXDl3iSyTfgP&key=AIzaSyAqpbOXLexN-s6JagKJSuunjE6EU4NGitw",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => setData(JSON.parse(result)))
      .catch((error) => console.log("error", error));
    return () => {};
  }, []);
  var row = [];

  if (data !== false && data.items[0] !== undefined) {
    for (var i = 1; i < data.items.length; i++) {
      row.push(<Video key={data.items[i].id} data={data.items[i]} />);
    }
    var vidSrc =
      "https://www.youtube.com/embed/" +
      data.items[0].snippet.resourceId.videoId;
    return (
      <div className="App">
        <iframe title={vidSrc} width="95%" height="500px" src={vidSrc}></iframe>
        {row}
      </div>
    );
  } else {
    return <h1>loading...</h1>;
  }
}
