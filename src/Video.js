import React from "react";
import "./styles.css";

export default function Video(props) {
  var vidSrc =
    "https://www.youtube.com/embed/" + props.data.snippet.resourceId.videoId;

  return (
    <div className="Video">
      <a
        href={
          "https://www.youtube.com/watch?v=" +
          props.data.snippet.resourceId.videoId
        }
      >
        <h1>{props.data.snippet.title.split("|")[0]}</h1>
        <h2>{props.data.snippet.title.split("|")[1]}</h2>
      </a>
      <a
        href={
          "https://www.youtube.com/watch?v=" +
          props.data.snippet.resourceId.videoId
        }
      >
        <img
          alt="props.data.snippet.title"
          src={props.data.snippet.thumbnails.medium.url}
        ></img>
      </a>
    </div>
  );
}
