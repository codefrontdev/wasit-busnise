import React from "react";
import headerImg from "../../assets/images/impressive-business-results.jpg";
import "./projects.css";

const Projects = () => {
  return (
    <>
      <div className="projects">
        <div className="container d-flex">
          <div className="projects-title col-2">
            <h2>
              The projects we are proud <span>Show off</span>
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div className="projects-done">
              <span>
                <i className="fa-solid fa-globe"></i>
                50+ Countries' client
              </span>
              <span>
                <i className="fa-solid fa-chess-board"></i>
                450+ Proieet Done
              </span>
            </div>
          </div>
          <div className="projects-items col-7">
            <div className="project-item">
              <img className="col-6" src={headerImg} alt="" />
              <div className="projects-item-title">
                <span>BRANDING</span>
                <h2>Branding Media.lo</h2>
                <p>
                  Lorem lpsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <a href="#ds">
                  VIEW PROJECT <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
            <div className="project-item">
              <img className="col-6" src={headerImg} alt="" />
              <div className="projects-item-title">
                <span>MARKETING</span>
                <h2>Vault Ltd project</h2>
                <p>
                  Lorem lpsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <a href="#ds">
                  VIEW PROJECT <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
            <div className="project-item">
              <img className="col-6" src={headerImg} alt="" />
              <div className="projects-item-title">
                <span>NEW</span>
                <h2>Sky network IO</h2>
                <p>
                  Lorem lpsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <a href="#ds">
                  VIEW PROJECT <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
            <div className="project-item">
              <img className="col-6" src={headerImg} alt="" />
              <div className="projects-item-title">
                <span>BRANDING</span>
                <h2>Medal Tv project</h2>
                <p>
                  Lorem lpsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <a href="#dsd">
                  VIEW PROJECT <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
