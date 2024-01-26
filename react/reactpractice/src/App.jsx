import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import ProjectGallery from "./components/ProjectGallery";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Header />;
      <Home />;
      <Project />;
      <ProjectGallery />;
      <Contact />;
    </div>
  )

}

export default App;