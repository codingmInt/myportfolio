import MyNav from "../components/mynav";
import { Tab, Tabs } from "react-bootstrap";
import "../App.css";
function Contact() {
  return (
    <div className="main">
      <MyNav />
      <Tabs defaultActiveKey="contact" className="mt-3 mb-3">
        <Tab eventKey="home" title="Home"></Tab>
        <Tab eventKey="profile" title="Profile"></Tab>
        <Tab eventKey="contact" title="Contact"></Tab>
      </Tabs>
    </div>
  );
}
export default Contact;
