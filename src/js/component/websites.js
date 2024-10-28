import React from "react";
import "../../styles/work.css";
import { useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "animate.css";

const Websites = () => {
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
            WEBSITES
          </h5>
          <p className="animate__animated animate__fadeInDown">
            A curated list of my development projects, showcasing applications
            and websites that highlight my skills in full-stack development.
          </p>
        </div>
        <div className="col-12 col-md-8 work-right-column d-none d-md-block">
          <a href="https://k3m43z.csb.app/" target="_blank" rel="noopener noreferrer">
            <h1 className="large-text display-1 work-large-text animate__animated animate__fadeInUp">
              BODY
            </h1>
          </a>
          <a href="https://smart-start-tutors.vercel.app/" target="_blank" rel="noopener noreferrer">
            <h1 className="large-text display-1 work-large-text animate__animated animate__fadeInUp">
              SMARTSTART
            </h1>
          </a>
        </div>
        <a href="/work">
          <p>
            Back to work{" "}
            <animated.span className="arrow" style={arrowAnimation}>
              <FontAwesomeIcon icon={faArrowRight} />
            </animated.span>
          </p>
        </a>
      </div>
    </div>
  );
};

export default Websites;
