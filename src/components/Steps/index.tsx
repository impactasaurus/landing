import * as React from "react";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Container from "react-bootstrap/lib/Container";
import DescribedImage from "../DescribedImage";

export default () => (
  <Container>
    <Row className="header">
      <Col>
        <h2>You're only 4 steps away from demonstrating your impact</h2>
        <h4>From choosing a questionnaire to reporting your impact, we keep things simple</h4>
      </Col>
    </Row>
    <DescribedImage
      image="/images/screenshots/radar-frame.png"
      title="Select a questionnaire"
      desc="Pick from our range of questionnaires or define your own"
      odd={true}
    />
    <DescribedImage
      image="/images/screenshots/radar-frame.png"
      title="Collect responses"
      desc="Gather responses from your beneficiaries"
      odd={false}
    />
    <DescribedImage
      image="/images/screenshots/radar-frame.png"
      title="Monitor progress"
      desc="View your beneficiary's journey during the intervention"
      odd={true}
    />
    <DescribedImage
      image="/images/screenshots/radar-frame.png"
      title="Report your impact"
      desc="Generate reports showing the impact your organisation had on your beneficiaries"
      odd={false}
    />
  </Container>
);
