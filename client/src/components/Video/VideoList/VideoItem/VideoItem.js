import React, { Fragment } from "react";
import styles from "./VideoItem.css";

const VideoItem = ({ video, click }) => {
  return (
    <Fragment>
      <div onClick={click} className={`${styles.Video} mx-auto col-11 row`}>
        <div className="col-4">
          <img
            style={{ width: "100%" }}
            className="img-fluid"
            src={video.snippet.thumbnails.high.url}
            alt="washington-post"
          />
        </div>
        <div className="col-8">
          <h3>{video.snippet.title.replace(/&#39;/gi, "")}</h3>
          <i className="fas fa-play" />
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
