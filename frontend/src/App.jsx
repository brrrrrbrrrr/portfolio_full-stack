/* eslint-disable import/no-extraneous-dependencies */
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import PageInfos from "./components/page/pageinfos/PageInfos";
import Avatar from "./components/avatar/Avatar";
import SwitchProvider from "./contexts/SwitchContext";
import About from "./components/about/About";

import Project from "./components/projects/Project";
import WelcomeTypeWriter from "./components/welcome/WelcomeTypeWriter";
import PageNav from "./components/page/pagenav/PageNav";
import Socials from "./components/socials/Socials";
import PageVideos from "./components/page/pageVideos/PageVideos";
import PageLoginRegister from "./components/page/pageLogin/PageLoginRegister";

function App() {
  const [homeAnimation, setHomeAnimation] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setHomeAnimation(true);
    }, 500);
  }, []);
  return (
    <div className="App">
      <SwitchProvider>
        <HashRouter>
          <PageNav homeAnimation={homeAnimation} />
          <Avatar homeAnimation={homeAnimation} />
          <Routes>
            <Route path="/" element={<PageInfos />}>
              <Route index element={<WelcomeTypeWriter />} />

              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/contact" element={<Socials />} />
              <Route path="/videos" element={<PageVideos />} />
              <Route path="/admin" element={<PageLoginRegister />} />
            </Route>
          </Routes>
        </HashRouter>
      </SwitchProvider>
    </div>
  );
}

export default App;
