import * as React from "react";
import { withLayout, LayoutProps } from "../components/Layout";
import Hero from "../components/Hero";
import Signup from "../components/Signup";
import Testimonials from "../components/Testimonials";
import Steps from "../components/Steps";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

const IndexPage = (props: LayoutProps) => (
  <div>
    <Hero>
      <Row className="header">
        <Col>
          <h1>Simple impact reporting</h1>
          <h4>Attract funding and improve your service, with minimal overhead</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src="/images/screenshots/radar-frame.png" />
        </Col>
      </Row>
    </Hero>
    <Steps />
    <Testimonials />
    <Signup />
  </div>
);

export default withLayout(IndexPage);
