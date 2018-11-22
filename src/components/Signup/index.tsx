import * as React from "react";
import Row from "react-bootstrap/lib/Row";
import Hero from "../Hero";
import Button from "react-bootstrap/lib/Button";

export default () => {
  return (
    <Hero>
      <Row>
        <h1>Get Started Today</h1>
      </Row>
      <Row>
        <p>You will be recording your impact in a few minutes</p>
      </Row>
      <Row>
        <Button variant="primary" href="https://app.impactasaurus.org/signup">Sign Up</Button>
      </Row>
    </Hero>
  );
};
