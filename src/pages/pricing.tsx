import * as React from "react";
import {withLayout} from "../components/Layout";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Container from "react-bootstrap/lib/Container";
import Hero from "../components/Hero";
import SEO from "../components/SEO/SEO";

const PricingPage = () => {
  return (
    <>
    <SEO title="Pricing"/>
    <Hero>
      <h1>Pricing</h1>
    </Hero>
    <Container className="slanted">
      <Row className="header">
        <Col>
          <h2>Impactasaurus is free!</h2>
          <h4>If this changes, we will give you plenty of warning</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>What happens if the situation changes?</h5>
          <p>
            If our donations dry up or our running costs dramatically increase, there is a chance we may need to charge you.
          </p>
          <p>
            If we start charging for Impactasaurus, you will be given at least 2 months warning.
            If you decide you do not want to pay, we will help you migrate to another solution.
          </p>
          <p>
            Impactasaurus is a non profit organisation, future pricing will only cover the costs of running and developing the software.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>How do you afford the running costs?</h5>
          <p>
            Impactasaurus was designed from the start to exploit cloud computing technology, as such, running costs are minimal. Donations cover these costs.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>How do you afford to develop the software?</h5>
          <p>
            Development of the software is undertaken by volunteers who want to give back to society.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>I took part in the beta, how will future pricing apply to me?</h5>
          <p>
            Organisations which took part in the beta will have free access to Impactasaurus forever, as a thanks for your invaluable feedback.
          </p>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default withLayout(PricingPage);
