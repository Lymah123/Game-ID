import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import Placeholder from "react-bootstrap/Placeholder";
import Spinner from "react-bootstrap/Spinner";
import "../../App.css";

const DidGenerationScreen = ({ did }) => {
  const [loadingOn, setLoadingOn] = useState("block");
  const [displayDID, setDisplayDid] = useState("none");
  const [didGen, setDid] = useState(null);

  const TruncatedText = ({ text, maxLength }) => {
    if (text != null) {
      setTimeout(() => {
        setLoadingOn("none");
        setDid(text);
        setDisplayDid("block");
      }, 2000);

      console.log(toogleStyleLoader);
      if (text.length <= maxLength) {
        return (
          <div>
            <p style={{ wordBreak: "break-all" }}>{text}</p>
          </div>
        );
      }

      const truncatedString = text.substring(0, maxLength) + "...";

      return (
        <div>
          <p style={{ wordBreak: "break-all" }}>{truncatedString}</p>
        </div>
      );
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(didGen);
      alert("Text copied to clipboard!");
    } catch (error) {
      console.error("Unable to copy to clipboard:", error);
      alert("Failed to copy to clipboard. Please try again.");
    }
  };

  const toogleStyleLoader = {
    display: loadingOn,
  };
  const toogleStyleDIDdisplay = {
    display: displayDID,
  };

  console.log("DidGen: : " + did);

  return (
    <div>
      <p className="infoHeading">Please keep your secret ID Safe</p>
      <Container>
        <Row style={{ marginBottom: "16px" }}>
          <Col style={styles.DidContainer}>
            <Container className="didDisplayBox-gl">
              <Row className="heightOfDidDisplayBox-gl justify-content-center">
                <Col
                  style={{
                    color: "#ffffff",
                    fontSize: 11,
                    textWrap: "wrap",
                    width: "100px",
                  }}
                >
                  <Spinner
                    className="spinnerPosition-gl"
                    style={toogleStyleLoader}
                    animation="grow"
                  />
                  <TruncatedText
                    style={toogleStyleDIDdisplay}
                    text={did}
                    maxLength={130}
                  />
                </Col>
              </Row>
              <Row className="justify-content-center" xs={{ order: "last" }}>
                <Col onClick={copyToClipboard}>
                  <p className="copybtn-gl">Copy</p>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container className="button_gl">
        <Row className="justify-content-center">
          <Col xl lg="2" style={{ textAlign: "center" }}>
            NEXT
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const styles = {
  DidContainer: {
    background: "#3c374d",
    height: "99px",
    borderRadius: "10px",
    padding: "10px",
  },
};

export default DidGenerationScreen;
