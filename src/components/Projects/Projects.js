import React, { useState } from "react";
import "./projects.css";
import { useHistory } from "react-router-dom";
import Back from "../../assets/back.svg";
import ChatApp from "../../assets/project/chatApp.png";
import ipAdd from "../../assets/project/ipAdd.png";
import todo from "../../assets/project/todo.jpg";
import amazon from "../../assets/project/amazon.png";
import sunShine from "../../assets/project/sunshine.jpg";
import form from "../../assets/project/stepform.png";

const Projects = () => {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(true);
  const [third, setThird] = useState(true);
  const [fourth, setFourth] = useState(true);
  const [fifth, setFifth] = useState(true);
  const [six, setSix] = useState(true);

  const history = useHistory();
  return (
    <div className="project__main">
      <div className="project__innerDiv">
        <h1 className="project__mainHeading">Projects</h1>
        <img
          src={Back}
          alt="back"
          className="project__backBtn"
          onClick={() => history.replace("/")}
        />
        <div className="project__items">
          <div className="project__project">
            {first && (
              <div className="project__img">
                <a
                  href="https://csb-tnopx.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={ChatApp} alt="chat app" />
                </a>
                <button
                  className="project__detailBtn"
                  onClick={() => setFirst(false)}
                >
                  Details
                </button>
              </div>
            )}
            {!first && (
              <a
                href="https://csb-tnopx.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  onMouseLeave={() => setFirst(true)}
                  className="project__info"
                >
                  <h2>Real Time ChatApp</h2>
                  <div>
                    <p>ReactJs</p>
                    <p>Socket.io</p>
                    <p>Nodejs</p>
                    <p>React Emoji</p>
                    <p>Material-Ui</p>
                  </div>
                </div>
              </a>
            )}
          </div>

          <div className="project__project">
            {second && (
              <div className="project__img">
                <a
                  href="https://csb-c0snf.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={ipAdd} alt="ip address" />
                </a>
                <button
                  className="project__detailBtn"
                  onClick={() => setSecond(false)}
                >
                  Details
                </button>
              </div>
            )}
            {!second && (
              <a
                href="https://csb-c0snf.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  onMouseLeave={() => setSecond(true)}
                  className="project__info"
                >
                  <h2>Ip Address Tracker</h2>
                  <div>
                    <p>ReactJs</p>
                    <p>IP Geolocation API</p>
                    <p>leafletjs</p>
                    <p>styled components</p>
                  </div>
                </div>
              </a>
            )}
          </div>

          <div className="project__project">
            {third && (
              <div className="project__img">
                <a
                  href="https://jaypatel9800.github.io/todos/#/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={todo} alt="todo" />
                </a>
                <button
                  className="project__detailBtn"
                  onClick={() => setThird(false)}
                >
                  Details
                </button>
              </div>
            )}
            {!third && (
              <a
                href="https://jaypatel9800.github.io/todos/#/"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  onMouseLeave={() => setThird(true)}
                  className="project__info"
                >
                  <h2>Todo App</h2>
                  <div>
                    <p>ReactJS</p>
                    <p>css</p>
                    <p>React Routers</p>
                  </div>
                </div>
              </a>
            )}
          </div>

          <div className="project__project">
            {fourth && (
              <div className="project__img">
                <a
                  href="https://qkd45.csb.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={amazon} alt="amazon" />
                </a>
                <button
                  className="project__detailBtn"
                  onClick={() => setFourth(false)}
                >
                  Details
                </button>
              </div>
            )}
            {!fourth && (
              <a href="https://qkd45.csb.app/" target="_blank" rel="noreferrer">
                <div
                  onMouseLeave={() => setFourth(true)}
                  className="project__info"
                >
                  <h2>Amazon Clone</h2>
                  <div>
                    <p>ReactJs</p>
                    <p>Context API</p>
                    <p>Firebase Auth</p>
                    <p>React Routers</p>
                  </div>
                </div>
              </a>
            )}
          </div>

          <div className="project__project">
            {fifth && (
              <div className="project__img">
                <a
                  href="https://jaypatel9800.github.io/sunShine-landingPage/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={sunShine} alt="sunShine landing page" />
                </a>
                <button
                  className="project__detailBtn"
                  onClick={() => setFifth(false)}
                >
                  Details
                </button>
              </div>
            )}
            {!fifth && (
              <a
                href="https://jaypatel9800.github.io/sunShine-landingPage/"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  onMouseLeave={() => setFifth(true)}
                  className="project__info"
                >
                  <h2>SunShine Landing Page</h2>
                  <div>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                  </div>
                </div>
              </a>
            )}
          </div>

          <div className="project__project">
            {six && (
              <div className="project__img">
                <a
                  href="https://csb-qc7y4.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={form} alt=" React step form" />
                </a>
                <button
                  className="project__detailBtn"
                  onClick={() => setSix(false)}
                >
                  Details
                </button>
              </div>
            )}
            {!six && (
              <a
                href="https://csb-qc7y4.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  onMouseLeave={() => setSix(true)}
                  className="project__info"
                >
                  <h2>React Step Form</h2>
                  <div>
                    <p>ReactJs</p>
                    <p>Material-Ui</p>
                    <p>React hooks helper</p>
                    <p>With validation</p>
                  </div>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
