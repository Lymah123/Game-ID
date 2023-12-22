import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import DidGenerationScreen from "./DidGenerationScreen";
import { Web5 } from "@web5/api/browser";

const UserNameEmailScreen = () => {
  const [did, setDid] = useState(null);
  const [Weeb5, setWeb5] = useState(null);

  const [mandatoryUsername, setMandatoryUsername] = useState("#ababab");
  const [mandatoryEmail, setMandatoryEmail] = useState("#ababab");

  const [displayType, setDisplayType] = useState("none");
  const [loginDisplay, setLoginDisplay] = useState("block");
  const [loginData, setLoginData] = useState({
    username: "",
    email: "",
  });

  const didGeneration = async () => {
    if (loginData.username != "" && loginData.email != "") {
      if (displayType === "none" && loginDisplay === "block") {
        setDisplayType("block");
        setLoginDisplay("none");
        (async () => {
          const data = constructUserData();
          await storeData(data);
          //await fetchData();
        })();
      } else {
        setDisplayType("block");
      }
    } else {
      setMandatoryEmail("#673434");
      setMandatoryUsername("#673434");
    }
  };

  const constructUserData = () => {
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    const userData = {
      loginData: JSON.stringify(loginData),
      timestampWritten: `${currentDate} ${currentTime}`,
    };
    return userData;
  };

  const storeData = async (datastr) => {
    if (Weeb5 && Weeb5.dwn) {
      const { record } = await Weeb5.dwn.records.create({
        data: datastr,
        message: {
          dataFormat: "application/json",
        },
      });
      console.log("StoreRecords:: " + record);

      //fetch records for Testing DWN
      const readResult = await record.data.text();
      console.log("RECORDS_FETCH: " + readResult);

      return record;
    } else {
      console.log("Failed to Initiated");
    }
  };

  console.log("DID::   " + did);

  // Generation of DID
  useEffect(() => {
    const init = async () => {
      const { web5, did } = await Web5.connect();
      setDid(did);
      setWeb5(web5);
    };
    init();
  }, []);

  const toogleStyleLoginScreen = {
    display: loginDisplay,
  };
  const toogleStyleDidScreen = {
    display: displayType,
  };
  const mandatorycolor_email = {
    color: mandatoryEmail,
  };
  const mandatorycolor_username = {
    color: mandatoryUsername,
  };

  // handling input
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Perform your login logic here using loginData.username or loginData.email and loginData.password
    console.log("Logging in...", loginData);
    // Example: You can send this data to an API endpoint for authentication
  };

  return (
    <div>
      <div style={toogleStyleLoginScreen}>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
            <Form.Control
              style={mandatorycolor_username}
              className="inputStyle-gl"
              type="text"
              name="username"
              value={loginData.username}
              onChange={handleInputChange}
              placeholder="@username"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              style={mandatorycolor_email}
              className="inputStyle-gl"
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
            />
          </Form.Group>
          <Container className="button_gl" onClick={didGeneration}>
            <Row className="justify-content-center">
              <Col xl lg="2" style={{ textAlign: "center" }}>
                JOIN
              </Col>
            </Row>
          </Container>
        </Form>
      </div>
      <div style={toogleStyleDidScreen}>
        <DidGenerationScreen did={did} />
      </div>
    </div>
  );
};

export default UserNameEmailScreen;
