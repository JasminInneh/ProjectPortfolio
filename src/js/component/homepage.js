import React from "react";
import "../../styles/homepage.css";

const HomePage = () => {
  return (
    <div className="container-fluid" id="home-body">
      <div className="row align-items-center">
        <div className="col-12 col-md-6">
          <h5 className="name mb-3 home-intro">Jasmin Nicole Inneh</h5>
          <p>Full Stack Developer | React | JavaScript | Python | MySQL</p>
          <p>
            Creating beautiful and engaging digital experiences in Miami,
            Florida.
          </p>
        </div>
        <div className="col-12 col-md-6 home-right-column d-none d-md-block">
          <h1 className="large-text display-1 home-large-text">
            <a href="/Work">WORK</a>
          </h1>
          <h1 className="large-text display-1 home-large-text">
            <a href="/About">ABOUT</a>
          </h1>
          <h1 className="large-text display-1 home-large-text">
            <a href="/Contact">CONTACT</a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
