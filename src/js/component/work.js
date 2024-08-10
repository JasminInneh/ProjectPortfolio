import React from "react";
import "../../styles/work.css";

const Work = () => {
  return (
    <div className="container-fluid" id="work-body">
      <div className="row align-items-center">
        <div className="col-12 col-md-4">
          <h5 className="work-title mb-3">WORK</h5>
          <p>
            This is a showcase of my finest projects across multiple domains,
            reflecting my proficiency as a full-stack developer with a strong
            inclination towards frontend development. My technical expertise
            includes proficiency in React, Bootstrap, JavaScript, CSS for
            frontend development, and Python and MySQL for backend solutions.
          </p>
          <p>
            As the digital landscape continually evolves, I adapt and grow,
            constantly acquiring new skills and knowledge to remain at the
            cutting edge of innovation and creativity.
          </p>
        </div>
        <div className="col-12 col-md-8 work-right-column d-none d-md-block">
          <h1 className="large-text display-1 work-large-text">TABATA</h1>
          <h1 className="large-text display-1 work-large-text">SMARTSTART</h1>
          <h1 className="large-text display-1 work-large-text">STORYWORLD</h1>
        </div>
      </div>
    </div>
  );
};

export default Work;
