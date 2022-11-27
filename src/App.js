import { Button, Image } from "react-bootstrap";
import MyNav from "./components/mynav";
import "./App.css";
import { useState, useEffect, useRef } from "react";
import Clock from "./components/timer";
import $ from "jquery";
import styled from "styled-components";
import useOnScreen from "./hooks";

function App() {
  const visref = useRef([]);
  const btnref = useRef();
  const [isVis1, isVis2, isVis3] = [
    useOnScreen(visref, 0),
    useOnScreen(visref, 1),
    useOnScreen(visref, 2),
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
        <span
          ref={(element) => {
            visref.current[2] = element;
          }}
          className={isVis3 ? "visible" : "else"}
        >
          This is a portfolio website made by Jayden Kim.
        </span>
      </div>
    </>
  );
}

export default App;
