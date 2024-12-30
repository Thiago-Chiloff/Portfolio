import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import imagemCertificado from "/VsCode/Portfolio-master/src/components/Resume/Certificado-alura.png"


function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
         <h1>Alura</h1>   
         <img src={imagemCertificado}></img>   
         <br/>
         <br/>
         <h1>CC50</h1>
         
      </Container>
    </div>
  );
}

export default ResumeNew;
