import { Pagination } from "react-bootstrap";
import MyNav from "./components/mynav";
import "./App.css";
import "animate.css/animate.min.css";
import Clock from "./components/timer";

function App() {
  return (
    <div className="main">
      <MyNav />
      <div className="clock">
        <Clock />
        <h6 className="p-0 m-0 fs-6 fw-light text-muted">
          welcome to my portfolio
        </h6>
      </div>
    </div>
  );
}

export default App;
