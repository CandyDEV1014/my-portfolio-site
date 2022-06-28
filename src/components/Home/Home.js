import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";
import Button from "react-bootstrap/Button";
import {
  SiLinkedin,
  SiGithub,
  SiTelegram,
  SiSkype,
  // SiDiscord
} from "react-icons/si";

const sendEmail = () => {    
  window.open("mailto:danielgilbert0407@gmail.com?subject=Contact");
};

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello, there!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                <strong className="main-name"> Daniel Gilbert</strong>
              </h1>

              <div style={{ paddingLeft: 50, paddingBottom: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
          <Row>
          <Col md={12} className="home-about-social">
            <h1>Get In Touch</h1>
            <p style={{fontSize: '1.2em'}}>
              At the moment, I’m looking for any new opportunities, my inbox is always open. <br />
              Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            </p>
            <div style={{ margin: '2rem 0' }}>
              <Button variant="outline-primary" className="email_btn" onClick={() => sendEmail()}>
                Say Hello
              </Button>  
            </div>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/candyDEV1014"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/daniel-gilbert-3a9845243/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiLinkedin />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://t.me/CandyDEV0407"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiTelegram />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://join.skype.com/invite/whDBGaaS0MVi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiSkype />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://join.skype.com/invite/whDBGaaS0MVi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiDiscord />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
