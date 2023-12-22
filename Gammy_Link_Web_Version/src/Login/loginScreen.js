import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/Image";
import Logo from "../assets/GammyLinks_logo_new.png";
import charecters from "../assets/GroupCharecter.png";
import UserNameEmailScreen from "./Components/UserNameEmailScreen";

const LoginScreen = () => {
  return (
    <div className="loginbox">
      <Container>
        <Row className="justify-content-center">
          <Col lg="4">
            <Image src={Logo} className="logo-gl" />
          </Col>
        </Row>
      </Container>

      <UserNameEmailScreen />

      <Container fluid className="grpCharecters-gl">
        <Row className="justify-content-center">
          <Col>
            <Image src={charecters} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginScreen;
