import * as React from "react";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Container from "react-bootstrap/lib/Container";
import Testimonial from "../Testimonial";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default () => (
  <Container>
    <Row className="header">
      <Col>
        <h2>Inspirational organisations <FontAwesomeIcon icon={faHeart} /> Impactasaurus</h2>
        <h4>Over 100 organisations use Impactasaurus to demonstrate their impact</h4>
      </Col>
    </Row>
    <Row>
      <Col xs={12} sm={6}>
        <Testimonial
          image="/images/clients/inclusion-gloucestershire.jpg"
          name="Inclusion Gloucestershire"
          quote="Times are tough for everyone and competition for funding is tight, having robust evidence of impact is critical. Working with Impactasaurus has helped us demonstrate the difference our work makes."
          url="https://www.inclusiongloucestershire.co.uk/"
        />
      </Col>
      <Col xs={12} sm={6}>
        <Testimonial
          image="/images/clients/crcc.jpg"
          name="Cornwall Rural Community Charity"
          quote="Impactasaurus helps us understand the impact of our different projects. It produces fantastic visual representations that help us communicate the journey people make with our support."
          url="https://www.cornwallrcc.org.uk"
        />
      </Col>
    </Row>
    <Row>
      <Col xs={12} sm={6}>
        <Testimonial
          image="/images/clients/breathing-spaces.jpg"
          name="Breathing Spaces"
          quote="We are delighted to recommend Impactasaurus to anyone who needs an easy to use, meaningful and efficient way of collecting, analysing and presenting data that demonstrates their outcomes and impact."
          url="https://www.breathingspaces.co"
        />
      </Col>
      <Col xs={12} sm={6}>
        <Testimonial
          image="/images/clients/sporting-force.png"
          name="Sporting Force"
          quote="Impactasaurus is an easy to use piece of software, it takes seconds to input questionnaire responses. We can provide funders and trustees with visuals that are easily understood on each beneficiary or project."
          url="http://www.sportingforce.org"
        />
      </Col>
    </Row>
  </Container>
);
