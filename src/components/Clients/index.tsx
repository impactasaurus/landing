import * as React from "react";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Container from "react-bootstrap/lib/Container";

export default () => (
  <Container>
    <Row key="intro">
      <Col>
        <h3>Over 100 charities use Impactasaurus to demonstrate impact</h3>
      </Col>
    </Row>
    <Row key="customers-1">
      <Col>
        <img src="/images/clients/mind.png" width="100%"/>
      </Col>
      <Col>
        <img src="/images/clients/mind.png" width="100%" />
      </Col>
      <Col>
        <img src="/images/clients/mind.png" width="100%" />
      </Col>
      <Col>
        <img src="/images/clients/mind.png" width="100%" />
      </Col>
      <Col>
        <img src="/images/clients/mind.png" width="100%" />
      </Col>
    </Row>
  </Container>
);
