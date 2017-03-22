import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos, onVideoSelect}) => {

  // Check if videos has been found
  if (!videos) {
    return (
      <div>Loading Videos...</div>
    )
  }

  const videoItems = videos.map((video) => {
    return (
        <VideoListItem
          onVideoSelect={onVideoSelect}
          key={video.etag}
          video={video} />
    )
  });

  return (
      <ul className="list-inline">
        {videoItems}
      </ul>
  );
}

export default VideoList;
