import MyNav from "../components/mynav";
import "../App.css";
function About() {
  return (
    <div className="about-main">
      <MyNav />
      <h3 className="fw-light">
        Now faith is the substance of things hoped for, the evidece of things
        not seen.
      </h3>
      <h4 className="fw-light">Hebrews 11:1</h4>
    </div>
  );
}
export default About;
