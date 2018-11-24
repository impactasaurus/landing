import * as React from "react";
import Container from "react-bootstrap/lib/Container";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import SlantedHero from "../Hero/slanted";
import {LayoutProps} from "../Layout";
import "./style.less";

export default ({children}: LayoutProps) => {
  return (
    <div id="index-hero">
      <SlantedHero bottom={true}>
        <Row className="header">
          <Col>
            <h1>Simple impact reporting</h1>
            <h4>Attract funding and improve your service, with minimal effort</h4>
          </Col>
        </Row>
      </SlantedHero>
      <Container className="screenshot">
        <Row>
          <Col>
            <img src="/images/screenshots/radar-frame.png" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
