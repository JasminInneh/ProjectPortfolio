import React from "react";
import "../../styles/homepage.css";
import "animate.css";

const HomePage = () => {
  return (
    <div className="container-fluid" id="home-body">
      <div className="row align-items-center">
        <div className="col-12 col-md-6">
          <h5 className="name mb-3 home-intro animate__animated animate__fadeInDown">
            Jasmin Nicole Inneh
          </h5>
          <p className="animate__animated animate__fadeInDown">
            Full Stack Developer | React | JavaScript | Python | MySQL
          </p>
          <p className="animate__animated animate__fadeInDown">
            Creating beautiful and engaging digital experiences in Miami,
            Florida.
          </p>
        </div>
        <div className="col-12 col-md-6 home-right-column d-none d-md-block">
          <h1 className="large-text display-1 home-large-text animate__animated animate__fadeInUp">
            <a href="/Work">WORK</a>
          </h1>
          <h1 className="large-text display-1 home-large-text animate__animated animate__fadeInUp">
            <a href="/About">ABOUT</a>
          </h1>
          <h1 className="large-text display-1 home-large-text animate__animated animate__fadeInUp">
            <a href="/Contact">CONTACT</a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
