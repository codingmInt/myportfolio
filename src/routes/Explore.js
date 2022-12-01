import MyNav from "../components/mynav";
import { useRef, useState } from "react";
import useOnScreen from "../hooks";
import "../App.css";
import { Offcanvas, Image } from "react-bootstrap";

function Explore() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const visref = useRef([]);
  const [isVis1, isVis2, isVis3, isVis4, isVis5, isVis6, isVis7, isVis8] = [
    useOnScreen(visref, 0),
    useOnScreen(visref, 1),
    useOnScreen(visref, 2),
    useOnScreen(visref, 3),
    useOnScreen(visref, 4),
    useOnScreen(visref, 5),
    useOnScreen(visref, 6),
    useOnScreen(visref, 7),
  ];
  return (
    <div className="main2">
      <MyNav />
      <div
        className={`${isVis1 ? "visible" : "else"}`}
        ref={(element) => {
          visref.current[0] = element;
        }}
      >
        <h1 className="fw-light mt-5">About this site</h1>
      </div>
      <div
        className={`qna ${isVis2 ? "visible" : "else"}`}
        ref={(element) => {
          visref.current[1] = element;
        }}
      >
        <h3 className="question">Made By</h3>
        <h6 className="answer">This site is made by Jayden Kim</h6>
      </div>
      <div
        className={`qna ${isVis3 ? "visible" : "else"}`}
        ref={(element) => {
          visref.current[2] = element;
        }}
      >
        <h3 className="question">What I used</h3>
        <h6 className="answer">
          I used{" "}
          <a
            className="text-decoration-none link-info"
            href="https://reactjs.org"
          >
            ReactJS
          </a>{" "}
          and{" "}
          <a
            className="text-decoration-none link-info"
            href="https://getbootstrap.com/"
          >
            Bootstrap
          </a>{" "}
          to make my website.
        </h6>
      </div>
      <div
        className={`qna ${isVis4 ? "visible" : "else"}`}
        ref={(element) => {
          visref.current[3] = element;
        }}
      >
        <h3 className="question">Pictures</h3>
        <h6 className="answer">
          All pictures are from{" "}
          <a
            className="text-decoration-none link-info"
            href="https://unsplash.com"
          >
            UNSPLASH.COM
          </a>
        </h6>
      </div>
      <div
        className={`${isVis5 ? "visible" : "else"}`}
        ref={(element) => {
          visref.current[4] = element;
        }}
      >
        <h1 className="fw-light mt-5">My Works</h1>
      </div>
      <div
        className={`qna ${isVis6 ? "visible" : "else"}`}
        ref={(element) => {
          visref.current[5] = element;
        }}
      >
        <h3 className="question">Discord Bot</h3>
        <h6 className="answer">I have made a discord bot using discord.py</h6>
      </div>
      <div
        className={`qna ${isVis7 ? "visible" : "else"}`}
        ref={(element) => {
          visref.current[6] = element;
        }}
      >
        <h3 className="question" onClick={handleShow}>
          Stock Crawler
        </h3>
        <h6 className="answer">Scrapping 2000+ companies stock price</h6>
      </div>
      <div
        className={`qna ${isVis8 ? "visible" : "else"}`}
        ref={(element) => {
          visref.current[7] = element;
        }}
      >
        <h3 className="question">Title</h3>
        <h6 className="answer">texts</h6>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Stock Crawler</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Image src="/codes1.png" width={370} thumbnail />
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
}
export default Explore;
