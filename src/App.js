import { Button, Image } from "react-bootstrap";
import MyNav from "./components/mynav";
import "./App.css";
import { useState, useEffect, useRef } from "react";
import Clock from "./components/timer";
import $ from "jquery";
import styled from "styled-components";
import useOnScreen from "./hooks";

function App() {
  const ref = useRef();
  const divref = useRef();
  const isVisible = useOnScreen(ref);
  const handleClick = () => {
    divref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="main">
      <MyNav />
      <div className={`box`} ref={ref}>
        <Clock />
        <h6 className="p-0 m-0 fs-6 fw-light text-muted">
          welcome to my portfolio
        </h6>
        <Button variant="outline-light" className="mt-4" onClick={handleClick}>
          See More
        </Button>
      </div>
      <div ref={divref}>
        <div ref={ref} className={`${isVisible ? "visible" : "else"}`}>
          재원재원정재원
        </div>
      </div>
    </div>
  );
}

export default App;
