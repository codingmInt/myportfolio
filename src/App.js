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
        <div className={`box`}>
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
      <div className="second">
        <h4 className="display-4">What I used : </h4>
        <ul ref={btnref}>
          <li
            ref={(element) => {
              visref.current[0] = element;
            }}
            className={`${isVis1 ? "visible" : "else"}`}
          >
            <Image
              roundedCircle
              width="200px"
              src={`${process.env.PUBLIC_URL}/react-logo.webp`}
            />
            <h6 className="fw-light display-6">ReactJS</h6>
          </li>
          <li
            ref={(element) => {
              visref.current[1] = element;
            }}
            className={`${isVis2 ? "visible" : "else"}`}
          >
            <Image
              roundedCircle
              width="200px"
              src={`${process.env.PUBLIC_URL}/boot-logo.webp`}
            />
            <h6 className="fw-light display-6">Bootstrap</h6>
          </li>
          <li
            ref={(element) => {
              visref.current[2] = element;
            }}
            className={`${isVis3 ? "visible" : "else"}`}
          >
            <Image
              roundedCircle
              width="200px"
              src={`${process.env.PUBLIC_URL}/jquery-logo.webp`}
            />
            <h6 className="fw-light display-6">jQuery</h6>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;