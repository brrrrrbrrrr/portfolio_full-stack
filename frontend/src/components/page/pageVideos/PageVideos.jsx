import React, { useState } from "react";
import "./PageVideos.css";
import ProjectsArray from "../../projects/ProjectsArray";
import Videos from "../../videos/Videos";

function PageVideos() {
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const handleVideoClick = (videoId) => {
    setSelectedVideoId(videoId);
  };
  const video3 = ProjectsArray.find((item) => item.id === 3);
  const videos = video3 ? video3.videos : [];
  return (
    <div className="page-videos_container">
      <h1 className="page-video_h1">Externatic</h1>
      <div className="page-videos_column">
        {videos.map((item) => {
          return (
            <Videos
              key={item.id}
              item={item}
              selected={item.id === selectedVideoId}
              handleClick={() => handleVideoClick(item.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PageVideos;
