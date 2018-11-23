import * as React from "react";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import SlantedHero from "../Hero/slanted";
import Button from "react-bootstrap/lib/Button";

export default () => {
  return (
    <SlantedHero top={true}>
      <Row>
        <Col>
          <h1>Get Started Today</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>You will be recording your impact in a few minutes</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary" href="https://app.impactasaurus.org/signup">Sign Up</Button>
        </Col>
      </Row>
    </SlantedHero>
  );
};
