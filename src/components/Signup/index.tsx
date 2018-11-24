import * as React from "react";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import SlantedHero from "../Hero/slanted";
import Button from "react-bootstrap/lib/Button";
import "./style.less";

export default () => {
  return (
    <div className="signup">
      <SlantedHero top={true}>
        <Row>
          <Col>
            <h1>Get Started Today</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>In 5 minutes, you will be monitoring your impact</h4>
          </Col>
        </Row>
        <Row>
          <Col className="buttons">
            <Button className="signup-button" size="lg" href="https://app.impactasaurus.org/signup" width="100px">Sign Up</Button>
          </Col>
        </Row>
      </SlantedHero>
    </div>
  );
};
