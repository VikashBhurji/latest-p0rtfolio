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
              imgPath="https://github.com/daniyal4engg/Daniyal-Portfolio/blob/master/src/project_screenshots/zee51.png?raw=true"
              title="Zee5.com clone"
              description="An Over the top Streaming service to enjoy over the internet, watch movies, series, and other entertaining content for free or by paid subscription by clicking on favorite category."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css | MongoDb | Express "
              link="https://zee5clone.netlify.app/"
              a="https://github.com/daniyal4engg/Zee5.com_clone"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://github.com/daniyal4engg/Daniyal-Portfolio/blob/master/src/project_screenshots/myth.png?raw=true"
              title="mytheresa.com clone"
              description="This is an E-Commerce website which speciaizes in selling clothes and styling products. The website provides 800 brands and 33,000 products of different types of clothes, watches, shoes etc."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css "
              link="https://mytheresashp.netlify.app/"
              a="https://github.com/daniyal4engg/mytheresa_clone"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://github.com/daniyal4engg/Daniyal-Portfolio/blob/master/src/project_screenshots/dice-g301ebfc49_1920.jpg?raw=true"
              title="Dice Game"
              description="The object of this game is to be the first person to score 100 points. The game-play involves rolling dice and adding the total each time. However, there is a complication which gives the game its entertainment value.  A player scores points by rolling the dice and finding the total of the dots. For example, if a player rolls a 4 and 5, they score 9.  At this point they can choose to either:  roll again and continue adding to this score, or Hold (STOP) and keep the score of 9 for their first round. Continuing to add will obviously increase the total. However, there is a catch. If a 1 appears on any dice it will wipes out all of their total score for the entire game."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css "
              link="https://dicegameswitch.netlify.app/"
              a="https://github.com/daniyal4engg/Dice-game"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
