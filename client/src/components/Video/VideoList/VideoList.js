import React from "react";
import VideoItem from "./VideoItem/VideoItem";

const VideoList = ({ videos, videoClickHandler }) => {
  const content = videos.map(video => (
    <VideoItem
      key={video.url}
      video={video}
      click={() => videoClickHandler(video.url)}
    />
  ));

  return content;
};

export default VideoList;
