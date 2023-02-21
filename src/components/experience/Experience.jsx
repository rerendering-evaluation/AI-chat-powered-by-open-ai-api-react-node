import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developement</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div>
                <BsPatchCheckFill className="experience__details-icon" />
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <BsPatchCheckFill className="experience__details-icon" />
                <h4>Css</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <BsPatchCheckFill className="experience__details-icon" />
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>{" "}
            </article>
            <article className="experience__details">
              <div>
                <BsPatchCheckFill className="experience__details-icon" />
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>{" "}
            </article>
            <article className="experience__details">
              <div>
                <BsPatchCheckFill className="experience__details-icon" />
                <h4>TailwindCss</h4>
                <small className="text-light">Experienced</small>
              </div>{" "}
            </article>
            <article className="experience__details">
              <div>
                <BsPatchCheckFill className="experience__details-icon" />
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>{" "}
            </article>
            <article className="experience__details">
              <div>
                <BsPatchCheckFill className="experience__details-icon" />
                <h4>Angular</h4>
                <small className="text-light">Intermediate</small>
              </div>{" "}
            </article>
            <article className="experience__details">
              <div>
                {" "}
                <BsPatchCheckFill className="experience__details-icon" />
                <h4>Redux</h4>
                <small className="text-light">Intermediate</small>
              </div>{" "}
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Frontend Developement</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div>
                {" "}
                <BsPatchCheckFill className="experience__details-icon" />
                <h4>Node Js</h4>
                <small className="text-light">Experienced</small>
              </div>{" "}
            </article>
            <article className="experience__details">
              <div>
                {" "}
                <BsPatchCheckFill className="experience__details-icon" />
                <h4>Express</h4>
                <small className="text-light">Experienced</small>
              </div>{" "}
            </article>
            <article className="experience__details">
              <div>
                {" "}
                <BsPatchCheckFill className="experience__details-icon" />
                <h4>SQL</h4>
                <small className="text-light">Experienced</small>
              </div>{" "}
            </article>
            <article className="experience__details">
              <div>
                {" "}
                <BsPatchCheckFill className="experience__details-icon" />
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>{" "}
            </article>
            <article className="experience__details">
              <div>
                {" "}
                <BsPatchCheckFill className="experience__details-icon" />
                <h4>REST API</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                {" "}
                <BsPatchCheckFill className="experience__details-icon" />
                <h4>Graph QL</h4>
                <small className="text-light">Intermediate</small>
              </div>{" "}
            </article>
            <article className="experience__details">
              <div>
                {" "}
                <BsPatchCheckFill className="experience__details-icon" />
                <h4>Spring Boot</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                {" "}
                <BsPatchCheckFill className="experience__details-icon" />
                <h4>Web Security Attacks</h4>
                <small className="text-light">Experienced</small>
              </div>{" "}
            </article>
            <article className="experience__details">
              <div>
                {" "}
                <BsPatchCheckFill className="experience__details-icon" />
                <h4>JWT</h4>
                <small className="text-light">Experienced</small>
              </div>{" "}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
