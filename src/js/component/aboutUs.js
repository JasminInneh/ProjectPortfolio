import React from "react";
import "../../styles/aboutUs.css";

const AboutUs = () => {
  return (
    <div className="container-fluid" id="aboutUs-body">
      <div className="row m-5">
        <h2>About Me.</h2>
        <div className="col-12 timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <h5 className="timeline-title">Fullstack Development</h5>
              <h6 className="timeline-date">
                <a
                  href="https://github.com/JasminInneh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Github
                </a>
              </h6>
              <p className="timeline-description">
                In the digital world, first impressions are everything, and a
                remarkable website is your most powerful tool to make a lasting
                impact. My expertise as a full-stack developer allows me to
                craft websites that go beyond visual appeal, delivering flawless
                functionality and intuitive user experiences. I blend creativity
                with technical precision, tackling complex challenges to build
                sleek, responsive sites that captivate and engage. With a deep
                understanding of industry standards and cutting-edge practices,
                I ensure that every project is a masterpiece of both form and
                function.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <h5 className="timeline-title">QA Engineer</h5>
              <h6 className="timeline-date">
                <a
                  href="https://github.com/JasminInneh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Github
                </a>
              </h6>
              <p className="timeline-description">
                Mastering the art of quality assurance means delving deep into
                the core of software integrity. My approach to QA engineering
                combines meticulous attention to detail with a relentless
                pursuit of excellence, ensuring every application not only meets
                but exceeds rigorous standards. By applying comprehensive
                testing strategies and innovative problem-solving techniques, I
                uncover hidden issues and optimize performance, delivering
                flawless user experiences. Explore my QA projects to see how my
                expertise transforms potential into perfection.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h5 className="timeline-title">EdTech</h5>
              <h6 className="timeline-date">
                <a
                  href="https://github.com/JasminInneh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Products
                </a>
              </h6>
              <p className="timeline-description">
                In the ever-evolving landscape of education, EdTech stands at
                the forefront of innovation, revolutionizing how we teach and
                learn. By seamlessly integrating cutting-edge technology with
                pedagogical expertise, I create solutions that transform
                traditional classrooms into dynamic, interactive learning
                environments. My approach combines intuitive design with robust
                functionality, ensuring that educational tools not only engage
                students but also empower educators. Discover how my passion for
                educational technology bridges the gap between knowledge and
                application, driving both academic success and lifelong
                learning.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer-text">
        <h3 className="about-background-text">About Me.</h3>
      </footer>
    </div>
  );
};

export default AboutUs;
