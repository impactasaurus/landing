import * as React from "react";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import SlantedHero from "../Hero/slanted";
import Button from "react-bootstrap/lib/Button";
import { Link } from "gatsby";
import "./style.less";

export default () => {
  return (
    <div className="signup">
      <SlantedHero top={true}>
        <Row>
          <Col>
            <h1>Understand your impact</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Demonstrate your value and drive improvements</h4>
          </Col>
        </Row>
        <Row>
          <Col className="buttons">
            <Button className="signup-button" size="lg" as={Link} to="/signup" width="100px" style={{maxWidth: "80vw"}}>Get started</Button>
          </Col>
        </Row>
      </SlantedHero>
    </div>
  );
};
