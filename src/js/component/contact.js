import React from "react";
import { useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../../styles/contact.css";
import "animate.css";

const Contact = () => {
  // Animation for the arrow
  const arrowAnimation = useSpring({
    from: { transform: "translateX(0px)" },
    to: { transform: "translateX(10px)" },
    config: { tension: 100, friction: 25 },
    reset: true,
    loop: true,
  });

  return (
    <div className="container-fluid" id="contact-body">
      <div className="row align-items-center">
        <h2 className="animate__animated animate__fadeInDown text-center contact-body-header">
          Contact.
        </h2>
        <p className="text-center">
          Get in touch or send me an email directly at{" "}
          <a href="mailto:jasmininneh@gmail.com" className="custom-link">
            jasmininneh@gmail.com
          </a>
        </p>

        <div className="col">
          <form>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1"></label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="First name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1"></label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Last name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1"></label>
              <input
                type="name"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email"
              />
            </div>

            <div className="form-group">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Message"
              ></textarea>
            </div>
            <button type="button" class="btn btn-dark">
              Send Message
            </button>
          </form>
        </div>
        <p className="text-center">
          Back home.{" "}
          <animated.span className="arrow" style={arrowAnimation}>
            <FontAwesomeIcon icon={faArrowRight} />
          </animated.span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
