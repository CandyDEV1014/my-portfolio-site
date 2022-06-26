import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, Everyone, I am <span className="purple">Daniel Gilbert </span>
            from <span className="purple"> Toronto, Canada.</span>
            <br />
            <br />
            Proactive, customer-orientated professional developer with over 8 years of experience in computer science.
            I focus my effort on creating high performance, low resource consumption, and cost-effective solutions tailored 
            to each individual project.
            <br />
            <br />
            Specialized in web application development such as Ecommerce System, Customer Relationship Management System, 
            Learning Management System, Enterprise App, Single Page Application, Health Care System, etc.<br /><br />
            I always provide professional and high-quality standards according to the clients' requirements.
            Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team.
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
