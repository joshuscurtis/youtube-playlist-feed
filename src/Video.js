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
        <h1>{props.data.snippet.title}</h1>

        <iframe
          title={vidSrc}
          width="350px"
          height="100%"
          src={vidSrc}
        ></iframe>
      </a>
    </div>
  );
}
