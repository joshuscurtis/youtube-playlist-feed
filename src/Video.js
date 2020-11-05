import React from "react";
import "./styles.css";

export default function Video(props) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const days = ["null", "1st", "2nd", "3rd"];
  var date = new Date(
    props.data.contentDetails.videoPublishedAt.substring(0, 10)
  );
  if (date.getDay() < 4) {
    var longDate = days[date.getDay()] + " " + monthNames[date.getMonth()];
  } else {
    longDate = date.getDay() + "th " + monthNames[date.getMonth()];
  }
  return (
    <div className="Video">
      <a
        href={
          "https://www.youtube.com/watch?v=" +
          props.data.snippet.resourceId.videoId
        }
      >
        <h1>{longDate}</h1>
        <h2>{props.data.snippet.title.split("|")[0]}</h2>
        <h3>{props.data.snippet.title.split("|")[1]}</h3>
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
