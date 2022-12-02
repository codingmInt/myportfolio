import MyNav from "../components/mynav";
import "../App.css";
import { ListGroup } from "react-bootstrap";
import useOnScreen from "../hooks";
import { useRef } from "react";
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
        className={`${isVis1 ? "visible" : "else"} mt-5`}
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
        className={`${isVis2 ? "visible" : "else"} mt-5`}
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
        className={`${isVis3 ? "visible" : "else"} mt-5`}
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
    </div>
  );
}
export default About;
