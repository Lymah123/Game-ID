import logo from "./logo.svg";
import "./App.css";
import LoginScreen from "./Login/loginScreen";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Web5 } from "@web5/api/browser";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row className="justify-content-center loginContainer">
          <Col xs lg="4">
            <LoginScreen></LoginScreen>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
