import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";

function Projects() {
  return (
    <Container id="projects" fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://github.com/VikashBhurji/latest-p0rtfolio/blob/main/src/project_screenshots/pluralsight.png?raw=true"
              title="Pluralsight.com clone"
              description="Pluralsight, Inc. is an American privately held online education company that offers a variety of video training courses for software developers, IT administrators, and creative professionals through its website."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css | MongoDb | Express "
              link="https://plurlsightclone.netlify.app/"
              a="https://github.com/khageswar9/Clone-Of-Plurals.com"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://github.com/VikashBhurji/latest-p0rtfolio/blob/main/src/project_screenshots/coschedule.png?raw=true"
              title="Coschedule.com clone"
              description="CoSchedule is an all-in-one platform for planning, organizing, and executing all things content marketing. It's easy to use drag-and-drop calendar interface makes it easy to collaborate and schedule all your projects in one place."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css "
              link="https://coschedule.netlify.app/"
              a="https://github.com/pankajnandi/CoSchedule.com-Clone"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://github.com/VikashBhurji/latest-p0rtfolio/blob/main/src/project_screenshots/bathandbody.png?raw=true"
              title="BathAndBodyWorks"
              description="Bath and Body Works is your go-to place for gifts & goodies that surprise & delight. From fresh fragrances to soothing skin care."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css | React"
              link="https://github.com/shailendra-k1245/BathAndBodyWorks-site"
              a="https://github.com/shailendra-k1245/BathAndBodyWorks-site"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
