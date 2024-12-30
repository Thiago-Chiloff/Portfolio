import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import imagemCertificado from "/VsCode/Portfolio-master/src/components/Resume/Certificado-alura.png"
import imagemCC50 from "/VsCode/Portfolio-master/src/components/Resume/CC50.png"


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
         <img src={imagemCertificado}/>  
         <br/>
         <br/>
         <h1>CC50</h1>
         <img src={imagemCC50}/>
      </Container>
    </div>
  );
}

export default ResumeNew;
