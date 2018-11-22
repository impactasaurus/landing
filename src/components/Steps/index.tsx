import * as React from "react";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Container from "react-bootstrap/lib/Container";
import DescribedImage from "../DescribedImage";

export default () => (
  <Container>
    <Row>
      <Col>
        <h2>You're Only 4 Steps Away from Impact Reporting</h2>
        <p>From choosing a questionnaire to reporting on your impact, we keep things simple</p>
      </Col>
    </Row>
    <DescribedImage
      image="/images/screenshots/radar-frame.png"
      title="Select a Questionnaire"
      desc="Pick from our range of questionnaires or define your own"
      odd={true}
    />
    <DescribedImage
      image="/images/screenshots/radar-frame.png"
      title="Collect Responses"
      desc="Gather responses from your beneficiaries"
      odd={false}
    />
    <DescribedImage
      image="/images/screenshots/radar-frame.png"
      title="Monitor Progress"
      desc="View your beneficiary's journey during the intervention"
      odd={true}
    />
    <DescribedImage
      image="/images/screenshots/radar-frame.png"
      title="Report Your Impact"
      desc="Generate reports showing the impact your organisation had on your beneficiaries"
      odd={false}
    />
  </Container>
);
