import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Deixa eu te dar  <span className="purple"> uma breve </span> INTRODUÇÃO
            </h1>
            <p className="home-about-body">
             Eu amo programação, e amo aprender sempre mais e mais.
             Amo também fazer jogos e criar músicas.
             E gosto também de fazer trabalhos braçais. 🤷‍♂️
              <br />
              <br />Minhas linguagens de programação preferidas são:
              <i>
                <b className="purple"> Python, Javascript, Typescript e C#. </b>
              </i>
              <br />
              <br />
              Acho importante dizer que minha biblioteca favorita em Js é
               <b className="purple"> React</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Meu GitHub:</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Thiago-Chiloff?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
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
