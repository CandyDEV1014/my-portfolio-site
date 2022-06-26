import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import plant from "../../Assets/Projects/plant.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import getDoctor from "../../Assets/Projects/getDoctor.png";
import nanoPasses from "../../Assets/Projects/nanoPasses.png";
import dlops from "../../Assets/Projects/dlops.png";
import entrePot from "../../Assets/Projects/entrePot.png";
import trekBeach from "../../Assets/Projects/trekBeach.png";
import cryptoApp from "../../Assets/Projects/cryptoApp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={getDoctor}
              isBlog={false}
              title="Doctor Client"
              description="Doctor Video consultation allows you to consult a healthcare professional from home, via your smartphone or your computer. This application built with React, Next.js, Redux, BootStrap."
              ghLink=""
              demoLink="https://doctor-client.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nanoPasses}
              isBlog={false}
              title="NANOPASSES"
              description="The founder of this project, he is the stoic and somber glue that holds the NANOPASS family together. Leaning on his wealth of experience as Managing Director of many successful IRL ventures, he leads the charge in executing our ambitious roadmap and build NANOPASS into the next bluechip NFT project."
              ghLink=""
              demoLink="https://www.nanopass.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dlops}
              isBlog={false}
              title="Solve problem with dlops"
              description="We are a network of designers, software engineers, data scientists and marketers whose passion for digital technologies binds us together to form this network of talents with abundant and diverse capabilities to tackle the most complex applications."
              ghLink="https://github.com/candyDEV1014/ai-landing"
              demoLink="https://dlopsai.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={entrePot}
              isBlog={false}
              title="Entrepot MarketPlace"
              description="By definition, an entrepôt is a port, city, or trading post where merchandise may be imported, stored or traded. Such centers played a critical role in trade during the days of wind-powered shipping. We developed Entrepot.app to provide a similar role in the digital world - a trading post where users can store and trade digital assets in a decentralized, non-custodial way."
              ghLink=""
              demoLink="https://entrepot.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trekBeach}
              isBlog={false}
              title="Safari Trek Beach"
              description="This project was developed with Laravel and Vue. Safari Trek Beach is the biggest marketplace for Tanzania tour packages. This platform help travelers find the best Tour Operators with the tour packages of their choice, to suit their budget and standard. This platform is the platform when it involves Tours and Holidays in Tanzania. Safari Trek Beach enables you to compare different tour operators on different categories such as Luxury, Lodge, Camping safaris, or Mountain Climbing tours as well as Beach Holidays."
              ghLink=""
              demoLink="https://safari-trek-beach.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cryptoApp}
              isBlog={false}
              title="Web3 Crypto App"
              description="This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts."
              ghLink="https://github.com/candyDEV1014/web3cryptoapp"
              demoLink="https://web3cryptoapp.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/candyDEV1014/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/candyDEV1014/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plant}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/candyDEV1014/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
