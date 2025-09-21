import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Leetcode from "./Leetcode";
import Techstack from "./Techstack";
//import Aboutcard from "./AboutCard";
//import laptopImg from "../../Assets/tech_stacks.png";
import Toolstack from "./Toolstack";

function About() {

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

      <Leetcode/>
      </Container>
    </Container>
  );
}
// <Leetcode/>
export default About;
