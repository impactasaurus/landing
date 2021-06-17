import * as React from "react";
import {withLayout} from "../components/Layout";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Container from "react-bootstrap/lib/Container";
import Hero from "../components/Hero";
import SEO from "../components/SEO/SEO";

const PricingPage = ({pageContext}: PageProps) => {
  return (
    <>
    <SEO
      title="Pricing"
      description="Impactasaurus is free! If this changes in future, we will give at least 2 months notice. We are a non profit organisation."
      context={pageContext}
    />
    <Hero>
      <h1>Pricing</h1>
      <h4>Hope you are sitting down...</h4>
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
          <p>
            A special thanks to the following companies who provide their services for free:
          </p>
          <p style={{display: "flex", alignItems: "center"}}>
            <a style={{padding: "1em", display: "inline-block"}} href="https://auth0.com/?utm_source=oss&utm_medium=gp&utm_campaign=oss" target="_blank"><img width="150" height="50" alt="JWT Auth for open source projects" src="/images/partners/a0.png"/></a>
            <a style={{padding: "0.2em", display: "inline-block"}} href="https://sentry.io" target="_blank"><img width="150" height="50" alt="Error tracking - Sentry" src="/images/partners/sentry.svg" /></a>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>How do you afford to develop the software?</h5>
          <p>
            Development of the software is undertaken by volunteers who want to give back to society.
          </p>
          <p>
            A special thanks to the following companies who provide their tools and services for free:
          </p>
          <p style={{display: "flex", alignItems: "center"}}>
            <a style={{padding: "1em", display: "inline-block"}} href="https://github.com/" target="_blank"><img width="80" height="18" alt="Development platform - Github" src="/images/partners/github.svg" /></a>
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

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
