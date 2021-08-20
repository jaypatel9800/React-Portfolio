import React, { useState } from "react";
import "./projects.css";
import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";
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
                <button
                  className="project__closeBtn"
                  onClick={() => setFirst(true)}
                >
                  <HighlightOffRoundedIcon />
                </button>
              </div>
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
                <button
                  className="project__closeBtn"
                  onClick={() => setSecond(true)}
                >
                  <HighlightOffRoundedIcon />
                </button>
              </div>
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
              <div
                onMouseLeave={() => setThird(true)}
                className="project__info"
              >
                <h2>Todo App</h2>
                <div>
                  <p>ReactJS</p>
                  <p>css</p>
                  <p>React Routers</p>
                  <p> With Theme Toggle</p>
                </div>
                <button
                  className="project__closeBtn"
                  onClick={() => setThird(true)}
                >
                  <HighlightOffRoundedIcon />
                </button>
              </div>
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
                <button
                  className="project__closeBtn"
                  onClick={() => setFourth(true)}
                >
                  <HighlightOffRoundedIcon />
                </button>
              </div>
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
              <div
                onMouseLeave={() => setFifth(true)}
                className="project__info"
              >
                <h2>SunShine Landing Page</h2>
                <div>
                  <p>HTML</p>
                  <p>CSS Grid</p>
                  <p>JavaScript</p>
                </div>
                <button
                  className="project__closeBtn"
                  onClick={() => setFifth(true)}
                >
                  <HighlightOffRoundedIcon />
                </button>
              </div>
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
              <div onMouseLeave={() => setSix(true)} className="project__info">
                <h2>React Step Form</h2>
                <div>
                  <p>ReactJs</p>
                  <p>Material-Ui</p>
                  <p>React hooks helper</p>
                  <p>With validation</p>
                </div>
                <button
                  className="project__closeBtn"
                  onClick={() => setSix(true)}
                >
                  <HighlightOffRoundedIcon />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
