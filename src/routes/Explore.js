import MyNav from "../components/mynav";
import "../App.css";
import { ListGroup } from "react-bootstrap";
import useOnScreen from "../hooks";
import { useRef } from "react";
function Contact() {
  const visref = useRef([]);
  const [isVis1, isVis2, isVis3] = [
    useOnScreen(visref, 0),
    /*     useOnScreen(visref, 1),
    useOnScreen(visref, 2), */
  ];
  return (
    <div className="main">
      <MyNav />
      <h1
        className={`fw-light mt-5 ${isVis1 ? "visible" : "else"}`}
        ref={(element) => {
          visref.current[0] = element;
        }}
      >
        ME
      </h1>
      <h2 className={`${isVis1 ? "visible" : "else"}`}>Who am I?</h2>
      <h6 className={`${isVis1 ? "visible" : "else"}`}>
        I am a Korean 8th grade student in Hull Middle School.
        <br />I am not good at English, so I am currently learning it.
      </h6>
    </div>
  );
}
export default Contact;
