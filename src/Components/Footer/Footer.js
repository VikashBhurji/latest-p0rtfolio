import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3></h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Made with ❤️ by Vikash Bhurji.</h3>
        </Col>
        <Col md="4" className="footer-body"></Col>
      </Row>
    </Container>
  );
}

export default Footer;
