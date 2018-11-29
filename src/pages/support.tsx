import * as React from "react";
import {withLayout} from "../components/Layout";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Container from "react-bootstrap/lib/Container";
import Hero from "../components/Hero";
import SEO from "../components/SEO/SEO";
import {Questions} from "./faq";

const SupportPage = () => {
  const qs = Questions.filter((q) => q.support);
  return (
    <>
    <SEO title="Support" description="We are here to help, if you have a question or need help, please get in contact"/>
    <Hero>
      <h1>Support</h1>
      <h4>We are here to help</h4>
    </Hero>
    <Container className="slanted">
      <Row>
        <Col>
          <h4>if you have a question, feature suggestion or need help, please email:</h4>
        </Col>
      </Row>
      <Row className="header">
        <Col>
          <h2><a href="mailto:support@impactasaurus.org">support@impactasaurus.org</a></h2>
        </Col>
      </Row>
      <Row className="header">
        <Col>
          <h3>Common Queries</h3>
          {qs.map((q) => (
            <>
            <h5>{q.title}</h5>
            {q.main}
            </>
          ))}
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default withLayout(SupportPage);
