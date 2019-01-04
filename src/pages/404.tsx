import * as React from "react";
import {withLayout} from "../components/Layout";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Container from "react-bootstrap/lib/Container";
import Hero from "../components/Hero";

const NotFoundPage = () =>
  <>
  <Hero>
    <h1>Oops!</h1>
  </Hero>
  <Container>
    <Row>
      <Col>
        <h3 style={{marginBottom: "8rem", marginTop: "8rem"}}>We can't seem to find the page you are looking for.</h3>
      </Col>
    </Row>
  </Container>
  </>;

export default withLayout(NotFoundPage, false);
