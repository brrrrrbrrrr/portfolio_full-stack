/* eslint-disable import/no-unresolved */
import "./Project.css";
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Swiper.css";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import { useSwitch } from "../../contexts/SwitchContext";
import ProjectInfos from "./ProjectInfos";
import useApi from "../services/useApi";

function Project() {
  const { reload } = useSwitch();
  const api = useApi();
  const [projectsArray, setProjectArray] = useState([]);
  const [showProject, setShowProject] = useState();
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    api
      .get("/project")
      .then((res) => {
        setShowProject(res.data[0]);
        setProjectArray(res.data);
        if (swiper) {
          swiper.slideTo(0);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [reload]);

  useEffect(() => {}, [reload]);

  const handleSlideChange = (swipers) => {
    const currentItem = projectsArray[swipers.activeIndex];
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
          onSwiper={(slide) => setSwiper(slide)}
        >
          {projectsArray.map((item) => (
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
