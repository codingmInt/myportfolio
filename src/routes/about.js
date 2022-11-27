import MyNav from "../components/mynav";
import { useRef } from "react";
import useOnScreen from "../hooks";
import "../App.css";

function About() {
  const visref = useRef([]);
  const [isVis1, isVis2, isVis3] = [
    useOnScreen(visref, 0),
    useOnScreen(visref, 1),
    useOnScreen(visref, 2),
  ];
  return (
    <div className="main">
      <MyNav />
      <div
        className={`${isVis1 ? "visible" : "else"}`}
        ref={(element) => {
          visref.current[0] = element;
        }}
      >
        <h1 className="fw-light mt-5">ABOUT</h1>
      </div>
      <div
        className={`qna ${isVis2 ? "visible" : "else"}`}
        ref={(element) => {
          visref.current[1] = element;
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
        className={`qna ${isVis3 ? "visible" : "else"}`}
        ref={(element) => {
          visref.current[2] = element;
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
    </div>
  );
}
export default About;
