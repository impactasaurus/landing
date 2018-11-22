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
      <Col>
        <Testimonial
          image="/images/clients/mind.png"
          name="Test User"
          quote="Great TOOL!! Excellent Print Outs. Has helped me acquire funding. Customer Service is excellent. One phone call and My questions are not only acknowledged but Resolved. I cannot Recommend this tool enough"
        />
      </Col>
      <Col>
        <Testimonial
          image="/images/clients/mind.png"
          name="Test User"
          quote="Really great way to measure impact, fantastic support from the team, easy to use, love it"
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <Testimonial
          image="/images/clients/mind.png"
          name="Test User"
          quote="It is very user friendly,well designed and presents data in clear and professional way."
        />
      </Col>
      <Col>
        <Testimonial
          image="/images/clients/mind.png"
          name="Test User"
          quote="This is great"
        />
      </Col>
    </Row>
  </Container>
);
