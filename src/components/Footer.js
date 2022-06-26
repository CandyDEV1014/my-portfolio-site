import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  SiLinkedin,
  SiGithub,
  SiTelegram,
  SiSkype,
  // SiDiscord
} from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Daniel Gilbert</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} DG</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/candyDEV1014"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/daniel-gilbert-86a346239/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiLinkedin />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://t.me/CandyDEV0407"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiTelegram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://join.skype.com/invite/whDBGaaS0MVi"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiSkype />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
