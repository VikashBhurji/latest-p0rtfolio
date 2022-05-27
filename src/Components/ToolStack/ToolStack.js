import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiNetlify,
  SiAmazonaws,
  SiSass,
  SiMaterialui,
} from "react-icons/si";

function ToolStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://mui.com/material-ui/getting-started/installation/"
          target={"_blank"}
        >
          <SiMaterialui />
          <p>Material-UI</p>
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.postman.com/" target={"_blank"}>
          <SiPostman />
          <p>Postman</p>
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://sass-lang.com/" target={"_blank"}>
          <SiSass />
          <p>Sass</p>
        </a>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://vercel.com/guides/deploying-react-with-vercel"
          target={"_blank"}
        >
          <SiVercel />
          <p>Vercel</p>
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.netlify.com/" target={"_blank"}>
          <SiNetlify />
          <p>Netlify</p>
        </a>
      </Col>
    </Row>
  );
}

export default ToolStack;
