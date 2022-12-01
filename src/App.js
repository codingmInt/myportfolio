import { Button, Image } from "react-bootstrap";
import MyNav from "./components/mynav";
import "./App.css";
import { useState, useEffect, useRef } from "react";
import Clock from "./components/timer";
import $ from "jquery";
import styled from "styled-components";
import useOnScreen from "./hooks";
import { Github, Instagram, EnvelopeAt } from "react-bootstrap-icons";

function App() {
  const visref = useRef([]);
  const btnref = useRef();
  const [isVis1, isVis2, isVis3] = [
    useOnScreen(visref, 0),
    useOnScreen(visref, 1),
  ];
  const handleClick = () => {
    btnref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className={`main`}>
        <MyNav />
        <div
          className={`box ${isVis1 ? "visible" : "else"}`}
          ref={(element) => {
            visref.current[0] = element;
          }}
        >
          <h1 className="display-1">Welcome</h1>
          <Clock />
          <Button
            variant="outline-light"
            className="mt-4"
            onClick={handleClick}
          >
            See More
          </Button>
        </div>
      </div>
      <div className="second" ref={btnref}>
        <h4
          className={`fw-light fs-1 ${isVis2 ? "visible" : "else"}`}
          ref={(element) => {
            visref.current[1] = element;
          }}
        >
          Welcome to my portfolio!
        </h4>
        <h6 className="fw-light">
          You can see my works and informations about me.
        </h6>
        <div className="links">
          <a href="https://github.com/codingmint" className="link-dark">
            <Github size={34} />
            <br />
            my github
          </a>
          <a href="https://instagram.com/_cyantree" className="link-dark">
            <Instagram size={34} />
            <br />
            my instagram
          </a>
          <a>
            <EnvelopeAt size={34} />
            <br />
            cyantree0129@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
