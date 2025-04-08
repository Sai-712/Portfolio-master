import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// Using placeholder images temporarily
import placeholder from "../../Assets/Projects/placeholder.png";
import banking from "../../Assets/Projects/placeholder.png";
import elearning from "../../Assets/Projects/placeholder.png";
import flipkart from "../../Assets/Projects/placeholder.png";
import jobportal from "../../Assets/Projects/placeholder.png";
import look360 from "../../Assets/Projects/placeholder.png";
import portfolio from "../../Assets/Projects/placeholder.png";
import digitalClock from "../../Assets/Projects/placeholder.png";
import foodApp from "../../Assets/Projects/placeholder.png";
import ageCalculator from "../../Assets/Projects/placeholder.png";
import calculator from "../../Assets/Projects/placeholder.png";
import chitralai from "../../Assets/Projects/placeholder.png";
import instagram from "../../Assets/Projects/placeholder.png";
import agiro from "../../Assets/Projects/placeholder.png";
import tst from "../../Assets/Projects/placeholder.png";

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
              imgPath={banking}
              isBlog={false}
              title="Banking System"
              description="A comprehensive banking system with secure user authentication, transaction management, and account services. Built with modern web technologies to provide a seamless banking experience."
              ghLink="https://github.com/sai-712/banking-system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={elearning}
              isBlog={false}
              title="E-learning Portal"
              description="An innovative e-learning platform designed with Figma, focusing on UI/UX principles. Features intuitive web design and engaging content writing for enhanced learning experience."
              ghLink="https://github.com/sai-712/e-learning-portal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flipkart}
              isBlog={false}
              title="Flipkart Clone"
              description="A full-featured e-commerce platform with user authentication, product catalog, shopping cart, and responsive design. Built with PHP, HTML/CSS, JavaScript, and SQL."
              ghLink="https://github.com/sai-712/flipkart-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobportal}
              isBlog={false}
              title="Job Portal UI"
              description="A modern job portal interface with advanced search functionality and detailed job listings. Focuses on efficient job matching and user experience."
              ghLink="https://github.com/sai-712/job-portal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={look360}
              isBlog={false}
              title="LOOK 360"
              description="An interactive Figma design project featuring 360-degree rotation capabilities. Demonstrates advanced prototyping for enhanced user experience."
              ghLink="https://github.com/sai-712/look-360"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal Portfolio (@rch Portfolio)"
              description="A personal portfolio website showcasing projects and skills. Built with React and modern web technologies for a responsive and engaging presentation."
              ghLink="https://github.com/sai-712/portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={digitalClock}
              isBlog={false}
              title="Digital Clock"
              description="A mini project featuring a digital clock with modern UI design. Built using HTML, CSS, and JavaScript for accurate time display."
              ghLink="https://github.com/sai-712/digital-clock"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodApp}
              isBlog={false}
              title="Food App Design"
              description="A food delivery app UI design created in Figma. Features modern design elements and intuitive user flow for seamless food ordering experience."
              ghLink="https://github.com/sai-712/food-app-design"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ageCalculator}
              isBlog={false}
              title="Age Calculator"
              description="A web application that calculates age based on birthdate. Features an intuitive interface and precise calculation functionality."
              ghLink="https://github.com/sai-712/age-calculator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Simple Calculator"
              description="A basic calculator application with standard arithmetic operations. Built with clean UI and efficient functionality."
              ghLink="https://github.com/sai-712/simple-calculator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chitralai}
              isBlog={false}
              title="Chitralai"
              description="A photo-sharing app with QR-based face recognition capabilities. Implements modern security features and user-friendly interface."
              ghLink="https://github.com/sai-712/chitralai"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={instagram}
              isBlog={false}
              title="Instagram UI Clone"
              description="A clone of Instagram's user interface with core features and responsive design. Built using modern web technologies."
              ghLink="https://github.com/sai-712/instagram-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agiro}
              isBlog={false}
              title="Agiro UI"
              description="A modern UI design project showcasing clean and intuitive interface design principles. Created with focus on user experience."
              ghLink="https://github.com/sai-712/agiro-ui"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tst}
              isBlog={false}
              title="Travel Sister Travel (TST)"
              description="An NGO website UI design focusing on travel and community. Features responsive design and engaging user interface."
              ghLink="https://github.com/sai-712/tst-website"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
