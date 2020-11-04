import React, { useState, useEffect } from "react";
import "./styles.css";
import Video from "./Video";

const requestOptions = {
  method: "GET",
  redirect: "follow"
};

export default function App(props) {
  /*const data = {
    kind: "youtube#playlistItemListResponse",
    etag: "_gj5ObBBGQfwOTA9a5Z_ONtkKKw",
    items: [
      {
        kind: "youtube#playlistItem",
        etag: "yaY8ztJLtcC-mMozFkXK0IfteXE",
        id:
          "UExyNUcxTDhwdTl3TEI3b0JsTUxVa29YRGwzaVN5VGZnUC4xMkVGQjNCMUM1N0RFNEUx",
        snippet: {
          publishedAt: "2020-11-04T09:03:20Z",
          channelId: "UC_l4guRi-ab4KFmCbOFzCCA",
          title: "'Blessed are the Meek' | Matthew 5:5",
          description:
            "Thank you for joining us for our Daily Devotional from Matthew 5:5. \nIf you live in the Dunstable area and would like to make contact with us we would love to hear from you.\nWhy not use this link- http://ccd.church/visitor\n\nFind out more: \nFacebook – Christ Church Dunstable \nInstagram – Christ Church Dunstable",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/ELUMbKWVSO4/default.jpg",
              width: 120,
              height: 90
            },
            medium: {
              url: "https://i.ytimg.com/vi/ELUMbKWVSO4/mqdefault.jpg",
              width: 320,
              height: 180
            },
            high: {
              url: "https://i.ytimg.com/vi/ELUMbKWVSO4/hqdefault.jpg",
              width: 480,
              height: 360
            },
            standard: {
              url: "https://i.ytimg.com/vi/ELUMbKWVSO4/sddefault.jpg",
              width: 640,
              height: 480
            },
            maxres: {
              url: "https://i.ytimg.com/vi/ELUMbKWVSO4/maxresdefault.jpg",
              width: 1280,
              height: 720
            }
          },
          channelTitle: "Christ Church Dunstable",
          playlistId: "PLr5G1L8pu9wLB7oBlMLUkoXDl3iSyTfgP",
          position: 0,
          resourceId: {
            kind: "youtube#video",
            videoId: "ELUMbKWVSO4"
          }
        },
        contentDetails: {
          videoId: "ELUMbKWVSO4",
          videoPublishedAt: "2020-11-04T09:03:18Z"
        },
        status: {
          privacyStatus: "public"
        }
      },
      {
        kind: "youtube#playlistItem",
        etag: "knZwX7KBAND5sku1Xz7xYKZjq6A",
        id:
          "UExyNUcxTDhwdTl3TEI3b0JsTUxVa29YRGwzaVN5VGZnUC4wOTA3OTZBNzVEMTUzOTMy",
        snippet: {
          publishedAt: "2020-11-03T09:29:35Z",
          channelId: "UC_l4guRi-ab4KFmCbOFzCCA",
          title: "'Blessed are those who mourn' | Matthew 5:4",
          description:
            "Thank you for joining us for our Daily Devotional from Matthew 5:4. \nIf you live in the Dunstable area and would like to make contact with us we would love to hear from you. Why not use this link- http://ccd.church/visitor \n\nFind out more: Facebook – Christ Church Dunstable \nInstagram – Christ Church Dunstable \nTwitter - @CC_Dunstable",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/iD60sk7Fnv8/default.jpg",
              width: 120,
              height: 90
            },
            medium: {
              url: "https://i.ytimg.com/vi/iD60sk7Fnv8/mqdefault.jpg",
              width: 320,
              height: 180
            },
            high: {
              url: "https://i.ytimg.com/vi/iD60sk7Fnv8/hqdefault.jpg",
              width: 480,
              height: 360
            },
            standard: {
              url: "https://i.ytimg.com/vi/iD60sk7Fnv8/sddefault.jpg",
              width: 640,
              height: 480
            },
            maxres: {
              url: "https://i.ytimg.com/vi/iD60sk7Fnv8/maxresdefault.jpg",
              width: 1280,
              height: 720
            }
          },
          channelTitle: "Christ Church Dunstable",
          playlistId: "PLr5G1L8pu9wLB7oBlMLUkoXDl3iSyTfgP",
          position: 1,
          resourceId: {
            kind: "youtube#video",
            videoId: "iD60sk7Fnv8"
          }
        },
        contentDetails: {
          videoId: "iD60sk7Fnv8",
          videoPublishedAt: "2020-11-03T09:29:35Z"
        },
        status: {
          privacyStatus: "public"
        }
      },
      {
        kind: "youtube#playlistItem",
        etag: "RzzZqGVmP-KcSbykcCnKuo3ArI4",
        id:
          "UExyNUcxTDhwdTl3TEI3b0JsTUxVa29YRGwzaVN5VGZnUC41MjE1MkI0OTQ2QzJGNzNG",
        snippet: {
          publishedAt: "2020-11-02T15:52:40Z",
          channelId: "UC_l4guRi-ab4KFmCbOFzCCA",
          title: "Private video",
          description: "This video is private.",
          thumbnails: {},
          channelTitle: "Christ Church Dunstable",
          playlistId: "PLr5G1L8pu9wLB7oBlMLUkoXDl3iSyTfgP",
          position: 2,
          resourceId: {
            kind: "youtube#video",
            videoId: "yYJgJHZeF08"
          }
        },
        contentDetails: {
          videoId: "yYJgJHZeF08"
        },
        status: {
          privacyStatus: "private"
        }
      },
      {
        kind: "youtube#playlistItem",
        etag: "i9rH1vxMBf37zsHljlSWFAnbWyk",
        id:
          "UExyNUcxTDhwdTl3TEI3b0JsTUxVa29YRGwzaVN5VGZnUC4wMTcyMDhGQUE4NTIzM0Y5",
        snippet: {
          publishedAt: "2020-11-01T22:59:03Z",
          channelId: "UC_l4guRi-ab4KFmCbOFzCCA",
          title: "'Blessed are the Poor in Spirit' | Matthew 5:3",
          description:
            "Thank you for joining us for our Daily Devotional from Matthew 5:3. \nIf you live in the Dunstable area and would like to make contact with us we would love to hear from you.\nWhy not use this link- http://ccd.church/visitor\n\nFind out more: \nFacebook – Christ Church Dunstable \nInstagram – Christ Church Dunstable",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/sXZ1nGynAxk/default.jpg",
              width: 120,
              height: 90
            },
            medium: {
              url: "https://i.ytimg.com/vi/sXZ1nGynAxk/mqdefault.jpg",
              width: 320,
              height: 180
            },
            high: {
              url: "https://i.ytimg.com/vi/sXZ1nGynAxk/hqdefault.jpg",
              width: 480,
              height: 360
            },
            standard: {
              url: "https://i.ytimg.com/vi/sXZ1nGynAxk/sddefault.jpg",
              width: 640,
              height: 480
            },
            maxres: {
              url: "https://i.ytimg.com/vi/sXZ1nGynAxk/maxresdefault.jpg",
              width: 1280,
              height: 720
            }
          },
          channelTitle: "Christ Church Dunstable",
          playlistId: "PLr5G1L8pu9wLB7oBlMLUkoXDl3iSyTfgP",
          position: 3,
          resourceId: {
            kind: "youtube#video",
            videoId: "sXZ1nGynAxk"
          }
        },
        contentDetails: {
          videoId: "sXZ1nGynAxk",
          videoPublishedAt: "2020-11-02T09:15:02Z"
        },
        status: {
          privacyStatus: "public"
        }
      }
    ],
    pageInfo: {
      totalResults: 4,
      resultsPerPage: 50
    }
  };
  */
  const [data, setData] = useState(false);
  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails,id,snippet,status&maxResults=200&playlistId=PLr5G1L8pu9wLB7oBlMLUkoXDl3iSyTfgP&key=AIzaSyC2PHH6rPItP_8PI_gJSEB_ZZIezOQiC5k",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => setData(JSON.parse(result)))
      .catch((error) => {
        console.log(error);
      });
    return () => { };
  }, []);

  var row = [];

  if (data !== false && data.items[0] !== undefined) {
    for (var i = 1; i < data.items.length; i++) {
      if (data.items[i].status.privacyStatus === "public") {
        row.push(<Video key={data.items[i].id} data={data.items[i]} />);
      }
    }

    function getLatestPubVid(data) {
      if (data !== false && data.items[0] !== undefined) {
        for (var i = 0; i < data.items.length; i++) {
          if (data.items[i].status.privacyStatus === "public") {
            var vidSrc =
              "https://www.youtube.com/embed/" +
              data.items[i].snippet.resourceId.videoId;
            return vidSrc;
          }
        }
      }
    }
    var vidSrc = getLatestPubVid(data);
    return (
      <div className="App">
        <iframe
          title={vidSrc}
          width="100%"
          height="500vw"
          src={vidSrc}
        ></iframe>
        <div className="prev__vids">{row}</div>
      </div>
    );
  } else {
    return <h1>loading...</h1>;
  }
}
