import React from "react";
import "./styles.css";

export default function Video(props) {
	
	var vidSrc = "https://www.youtube.com/embed/" + props.data.snippet.resourceId.videoId;
	
  return (
    <div className="Video">
	        <iframe title={vidSrc} width="25%" height="200px" src={vidSrc}></iframe>
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
