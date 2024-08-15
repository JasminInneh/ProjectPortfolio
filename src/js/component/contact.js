import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../../styles/contact.css";
import "animate.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState(""); // For success or error messages

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    emailjs
      .send(
        "service_uyuvlwj", // EmailJS service ID
        "template_gp8cdj7", // EmailJS template ID
        formData,
        "NP2Rf6ako49CEdHuU" // EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormStatus("Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });
        },
        (err) => {
          console.error("FAILED...", err);
          setFormStatus("Failed to send the message. Please try again later.");
        }
      );
  };

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
        <p className="text-center animate__animated animate__fadeInDown">
          Get in touch or send me an email directly at{" "}
          <a href="mailto:jasmininneh@gmail.com" className="custom-link">
            jasmininneh@gmail.com
          </a>
        </p>

        <div className="col-md-8">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-dark">
              Send Message
            </button>
          </form>

          {formStatus && (
            <div className="mt-3 text-center">
              <p>{formStatus}</p>
            </div>
          )}
        </div>
        <a href="/">
          <p className="text-center animate__animated animate__fadeInUp">
            Back home.{" "}
            <animated.span className="arrow" style={arrowAnimation}>
              <FontAwesomeIcon icon={faArrowRight} />
            </animated.span>
          </p>
        </a>
      </div>
    </div>
  );
};

export default Contact;
