import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am Chebolu Sai Niranjan — a passionate and self-driven professional with hands-on experience in UI/UX Design, Digital Marketing, and Frontend Development.
              <br />
              <br />
              I specialize in crafting intuitive user experiences and building interactive web applications. I'm proficient in
              <i>
                <b className="purple"> HTML, CSS, JavaScript, and Python</b>
              </i>
              , and I love working with <b className="purple">React.js</b> to bring ideas to life.
              <br />
              <br />
              My areas of interest lie in developing
              <i>
                <b className="purple"> modern web technologies and products</b>
              </i>
              , particularly those that merge creativity with functionality. I'm deeply passionate about
              <i>
                <b className="purple"> UI/UX Design and Digital Marketing</b>
              </i>
              — always exploring how human-centered design and smart digital strategies can create real impact.
              <br />
              <br />
              Whenever possible, I blend my creativity and technical skills using
              <i>
                <b className="purple"> Figma, Adobe Creative Suite</b>
              </i>
              , and cutting-edge frameworks to build unique and user-friendly digital experiences. Currently, I'm working on innovative projects like
              <i>
                <b className="purple"> Chitralai</b>
              </i>
              , a photo-sharing app with QR-based face recognition powered by AWS, and meaningful initiatives like
              <i>
                <b className="purple"> Travel Sister Travel</b>
              </i>
              , where design meets purpose.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <div className="avatar-container">
              <img src={myImg} className="img-fluid avatar-image" alt="avatar" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sai-712"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/chebolu-sainiranjan-014a74274/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
