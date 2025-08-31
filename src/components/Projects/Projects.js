import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tumour from "../../Assets/Brain_Tumour.png";
import game from "../../Assets/Destroy_Target.png";
import backend from "../../Assets/chatbot.png";
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
                                imgPath={backend}
                                isBlog={false}
                                title="Chatbot App"
                                description="This Project is a session based chatbot which uses Django and Swagger-UI for RESTful APIs deployed using Render and a persistent PostgreSQL database instance"
                                ghLink="https://github.com/anushree410/django_project"
                                demoLink="https://django-project-ekwx.onrender.com/"
                              />
                </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            imgPath={game}
              isBlog={false}
              title="Destroy target (game)"
              description="This project uses OpenCV in Python to identify hand gestures to destroy virtual targets on the screen."
              ghLink="https://github.com/anushree410/OpenCVProject"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tumour}
              isBlog={false}
              title="Brain Tumour Detection Using Image Processing"
              description="This Project uses MATLAB image processing to detect and outline Brain Tumour from MRI images if it exists."
              ghLink="https://github.com/anushree410/Brain-Tumor-Detection-using-Image-Processing"
            />
          </Col>





        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
