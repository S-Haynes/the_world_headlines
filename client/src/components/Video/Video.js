import React from "react";

const Video = ({ currentVideo }) => {
  return (
    <iframe
      width="100%"
      height="315"
      title="newsvid"
      src={currentVideo}
      className="currentVid"
    />
  );
};

export default Video;
