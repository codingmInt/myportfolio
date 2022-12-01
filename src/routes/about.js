import MyNav from "../components/mynav";
import "../App.css";
import { ListGroup } from "react-bootstrap";
import useOnScreen from "../hooks";
import { useRef } from "react";
function About() {
  const visref = useRef([]);
  const [isVis1, isVis2, isVis3] = [useOnScreen(visref, 0)];
  return (
    <div className="main">
      <MyNav />
      <div
        className="mt-5"
        ref={(element) => {
          visref.current[0] = element;
        }}
      >
        <h2 className={`${isVis1 ? "visible" : "else"}`}>Who am I?</h2>
        <h6 className={`texts ${isVis1 ? "visible" : "else"}`}>
          I am a Korean 8th grade student.
          <br />I like writing codes and learning English.
        </h6>
      </div>
    </div>
  );
}
export default About;
