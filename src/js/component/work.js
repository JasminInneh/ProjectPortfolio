import React from "react";
import "../../styles/work.css";
import { useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "animate.css";

const Work = () => {
  const arrowAnimation = useSpring({
    from: { transform: "translateX(0px)" },
    to: { transform: "translateX(10px)" },
    config: { tension: 100, friction: 25 },
    reset: true,
    loop: true,
  });

  return (
    <div className="container-fluid" id="work-body">
      <div className="row align-items-center">
        <div className="col-12 col-md-4">
          <h5 className="work-title mb-3 animate__animated animate__fadeInDown">
            WORK
          </h5>
          <p className="animate__animated animate__fadeInDown">
            This is a showcase of my finest projects across multiple domains,
            reflecting my proficiency as a full-stack developer with a strong
            inclination towards frontend development. My technical expertise
            includes proficiency in React, Bootstrap, JavaScript, CSS for
            frontend development, and Python and MySQL for backend solutions.
          </p>
          <p className="animate__animated animate__fadeInDown">
            As the digital landscape continually evolves, I adapt and grow,
            constantly acquiring new skills and knowledge to remain at the
            cutting edge of innovation and creativity.
          </p>
        </div>
        <div className="col-12 col-md-8 work-right-column d-none d-md-block">
          <a href="https://k3m43z.csb.app/">
            <h1 className="large-text display-1 work-large-text animate__animated animate__fadeInUp">
              CURRICULA
            </h1>
          </a>
          <a href="/edtech">
            <h1 className="large-text display-1 work-large-text animate__animated animate__fadeInUp">
              EDTECH
            </h1>
          </a>
          <a href="/websites">
            <h1 className="large-text display-1 work-large-text animate__animated animate__fadeInUp">
              WEBSITES
            </h1>
          </a>
        </div>
        <a href="/about">
          <p>
            About me.{" "}
            <animated.span className="arrow" style={arrowAnimation}>
              <FontAwesomeIcon icon={faArrowRight} />
            </animated.span>
          </p>
        </a>
      </div>
    </div>
  );
};

export default Work;
