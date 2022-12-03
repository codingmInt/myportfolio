import MyNav from "../components/mynav";
import "../App.css";
import { ListGroup } from "react-bootstrap";
import useOnScreen from "../hooks";
import { useRef } from "react";
function About() {
  const visref = useRef([]);
  const [isVis1, isVis2, isVis3, isVis4] = [
    useOnScreen(visref, 0),
    useOnScreen(visref, 1),
    useOnScreen(visref, 2),
    useOnScreen(visref, 3),
  ];
  return (
    <div className="main about">
      <MyNav />
      <h1 className="fw-light fs-1 mt-5 mb-5">ABOUT ME</h1>
      <div
        className={`${isVis1 ? "visible" : "else"} h-25`}
        ref={(element) => {
          visref.current[0] = element;
        }}
      >
        <h2>Who am I?</h2>
        <h6 className={`texts`}>
          I am a Korean 8th grade student.
          <br />I like writing codes and learning English.
          <br />I am currently learning Unity.
        </h6>
      </div>
      <div
        className={`${isVis2 ? "visible" : "else"} h-25`}
        ref={(element) => {
          visref.current[1] = element;
        }}
      >
        <h2>Why did I make this website?</h2>
        <h6 className={`texts`}>
          This is my project for my language art class.
          <br />I spent 6 weeks making this website.
        </h6>
      </div>
      <div
        className={`${isVis3 ? "visible" : "else"} h-25`}
        ref={(element) => {
          visref.current[2] = element;
        }}
      >
        <h2>My Motto</h2>
        <h6 className={`texts`}>
          The one who was born a genius can't win against the one who tries,
          <br /> and the one who tries can't win against the one who enjoys.
        </h6>
      </div>
      <div
        className={`${isVis4 ? "visible" : "else"} h-25`}
        ref={(element) => {
          visref.current[3] = element;
        }}
      >
        <h2>Anything else?</h2>
        <h6 className={`texts`}>
          I am going back to Korea on December 29th.
          <br />I won't be on HMS in 2nd semester.
        </h6>
      </div>
    </div>
  );
}
export default About;
