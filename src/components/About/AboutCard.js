import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá a todos eu sou <span className="purple">Thiago Chiloff </span>
            de <span className="purple"> São Carlos - SP - Brasil.</span>
            <br />
           Desenvolvo sites e programas de automatização para pc.
            <br />
            Eu terminei a escola em 2024, finalizando assim ensino fundamental
            e médio.
            <br />
            <br />
            Além de codar, gosto também de:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogar Videogames
            </li>
            <li className="about-activity">
              <ImPointRight /> Compor/Fazer Música
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
