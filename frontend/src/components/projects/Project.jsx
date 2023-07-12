/* eslint-disable import/no-unresolved */
import "./Project.css";
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Swiper.css";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import ProjectsArray from "./ProjectsArray";
import ProjectInfos from "./ProjectInfos";

function Project() {
  const [showProject, setShowProject] = useState();
  useEffect(() => {
    setShowProject(ProjectsArray[0]);
  }, []);

  const handleSlideChange = (swiper) => {
    const currentItem = ProjectsArray[swiper.realIndex];
    setShowProject(currentItem);
  };
  return (
    <div className="project-full">
      <div className="project-composant-container">
        <Swiper
          zoom
          key=""
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          cssMode
          navigation
          mousewheel
          keyboard
          modules={[Navigation, Mousewheel, Keyboard]}
          className="mySwiper"
          onSlideChange={handleSlideChange}
        >
          {ProjectsArray.map((item) => (
            <SwiperSlide key={item.id}>
              <h1 className="project-name">{item.name}</h1>
            </SwiperSlide>
          ))}
        </Swiper>

        <ProjectInfos showProject={showProject} />
      </div>
    </div>
  );
}

export default Project;
