import React from "react";
import "./styles.css";

export default function Video(props) {
  return (
    <div className="Video">
      <a
        href={
          "https://www.youtube.com/watch?v=" +
          props.data.snippet.resourceId.videoId
        }
      >
        <h1>{props.data.snippet.title}</h1>

        <img alt="" src={props.data.snippet.thumbnails.medium.url} />
      </a>
    </div>
  );
}
