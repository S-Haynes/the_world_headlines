import React, { Fragment } from "react";
import styles from "./VideoItem.css";

const VideoItem = ({ video, click }) => {
  return (
    <Fragment>
      <div onClick={click} className={`${styles.Video} col-12 row`}>
        <div className="col-4">
          <img
            style={{ width: "100%" }}
            className="img-fluid"
            src={video.snippet.thumbnails.high.url}
            alt="washington-post"
          />
        </div>
        <div className="col-8">
          <h3>{video.snippet.title}</h3>
          <i class="fas fa-play" />
          <span>
            <b> Play Video</b>
          </span>
        </div>
      </div>
      <hr style={{ width: "100%" }} />
    </Fragment>
  );
};

export default VideoItem;
