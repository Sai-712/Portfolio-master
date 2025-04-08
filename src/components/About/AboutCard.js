import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chebolu Sainiranjan </span>
            from <span className="purple"> Andhra Pradesh, India.</span>
            <br />
            I am currently pursuing B.Tech in Electronics and Telecommunications at IIIT Bhubaneswar (2022-2026).
            <br />
            <br />
            <strong>Work Experience:</strong>
            <br />
            • Web Developer & Designer Intern at Encryptix (July - Aug 2024)
            <br />
            • UI/UX Designer Intern at Zidio (Aug - Oct 2024)
            <br />
            • SWE Fellow at Headstarter AI (July - Oct 2024)
            <br />
            • HR Management Intern at LernX (May - July 2024)
            <br />
            <br />
            <strong>Technical Skills:</strong>
            <br />
            • Languages: C++, C, JavaScript, SQL, Python, Java
            <br />
            • Frameworks: React, Node.js, Express, MongoDB, MySQL, AWS
            <br />
            • Tools: VS Code, GitHub, Figma, Adobe, Canva
            <br />
            <br />
            <strong>Certifications:</strong>
            <br />
            • UI/UX Designer - LernX
            <br />
            • Software Engineering Essentials - IBM
            <br />
            • Web Development Bootcamp - Udemy
            <br />
            • Responsible AI - Google Cloud
            <br />
            <br />
            Apart from coding and design, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton and Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Social Activities
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Transforming challenges into opportunities is my forte!"{" "}
          </p>
          <footer className="blockquote-footer">Sainiranjan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
