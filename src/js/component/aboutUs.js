import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
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
          <h5 className="pb-2">My Learning</h5>
          <div className="timeline-item">
            <div className="timeline-content">
              <h5 className="timeline-title">Fullstack Development</h5>
              <h6 className="timeline-date">
                <a
                  href="https://4geeksacademy.com/us/index?utm_source=google&utm_medium=cpc&utm_campaign=11031489831&utm_content=107548070545&utm_term=4geeks%20academy&cq_src=google_ads&cq_cmp=11031489831&cq_con=107548070545&cq_term=4geeks%20academy&cq_med=&cq_plac=&cq_net=g&cq_plt=gp&gad_source=1&gclid=Cj0KCQjwwuG1BhCnARIsAFWBUC2mF2bO-1k8irX7OcJBxXar7KQKoWBnoaD3r9RVkGE8qgkqDvR3usgaAsgpEALw_wcB"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  4Geeks
                </a>
              </h6>
              <p className="timeline-description">
                At 4Geeks Academy Miami, I immersed myself in a comprehensive
                Fullstack Development program that shaped my journey from a
                novice to a proficient developer. This rigorous curriculum
                blended cutting-edge technologies with hands-on projects,
                empowering me to master both front-end and back-end development.
                Through real-world coding challenges and collaborative teamwork,
                I honed my skills in React, Python, and more, building robust
                applications from the ground up. This transformative experience
                not only deepened my technical expertise but also ignited my
                passion for crafting innovative, scalable solutions in the
                ever-evolving world of technology.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h5 className="timeline-title">React - The Complete Guide</h5>
              <h6 className="timeline-date">
                <a
                  href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Udemy
                </a>
              </h6>
              <p className="timeline-description">
                This immersive program provided a thorough grounding in React,
                covering everything from the basics to advanced techniques,
                including state management with Redux. Through engaging lessons
                and hands-on projects, I mastered the skills needed to build
                dynamic, high-performance web applications. This course not only
                deepened my understanding of React but also equipped me with
                practical tools to create scalable and efficient solutions in
                the ever-evolving tech landscape.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h5 className="timeline-title">Data Structures and Algorithms</h5>
              <h6 className="timeline-date">
                <a
                  href="https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/?couponCode=KEEPLEARNING"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Udemy
                </a>
              </h6>
              <p className="timeline-description">
                This course provided a rigorous and detailed exploration of
                essential data structures and algorithms, from fundamental
                concepts to advanced problem-solving techniques. Through
                hands-on exercises and real-world coding challenges, I developed
                a robust understanding of how to efficiently tackle complex
                problems and optimize performance. This course enhanced my
                ability to design and implement scalable, high-quality software
                solutions.
              </p>
            </div>
          </div>
          <p>
            Let's continue to projects. <FontAwesomeIcon icon={faArrowRight} />
          </p>
        </div>
      </div>
      <footer className="footer-text">
        <h3 className="about-background-text">About Me.</h3>
      </footer>
    </div>
  );
};

export default AboutUs;
