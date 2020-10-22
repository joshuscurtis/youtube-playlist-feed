import React, { useState, useEffect } from "react";
import "./styles.css";
import Video from "./Video";

const requestOptions = {
  method: "GET",
  redirect: "follow"
};
var request = false;

export default function App(props) {
  const [data, setData] = useState(request);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails,id,snippet,status&maxResults=200&playlistId=PLr5G1L8pu9wKuRSAx0PxgRdKgzaNRtZHD&prettyPrint=true&key=AIzaSyDGGuqlafRpIDYlE1-8TRhPWO8sw66jGW0",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => setData(JSON.parse(result)))
      .catch((error) => console.log("error", error));
    console.log(data);
    return () => {};
  }, []);
  var row = [];

  if (data !== false) {
    for (var i = 0; i < data.items.length; i++) {
      row.push(<Video key={data.items[i].id} data={data.items[i]} />);
    }

    return <div className="App">{row}</div>;
  } else {
    return <h1>loading...</h1>;
  }
}
